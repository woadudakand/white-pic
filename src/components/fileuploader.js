import React, { Fragment, useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { CloseOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import CreateButton from './create-placeholder';
import { DropZone, Title, Images, ImageWraper, MainWraper, FileUploadWrap } from './style';

const FileUploader = () => {
  const [uploadedFile, setUploadedFile] = useState([]);

  const onDrop = useCallback(
    acceptedFiles => {
      setUploadedFile([...uploadedFile, ...acceptedFiles]);
    },
    [uploadedFile],
  );
  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  const fileUploaderDelete = key => {
    const deletedData = uploadedFile.filter((item, id) => id !== key);
    setUploadedFile(deletedData);
  };

  const clearAllData = () => {
    window.location.reload();
  };

  return (
    <>
      <FileUploadWrap>
        <Title>Image to Placeholder Converter</Title>
        <form>
          <div className="dropzone-container">
            <div className="dropdown-bg">
              <img src={require('../static/img/dropzone-bg.png')} alt="" />
              <div className="dropdown-inner">
                <DropZone {...getRootProps()}>
                  <input {...getInputProps()} />
                  <div className="drop-icon">
                    <img src={require('../static/img/upload-icon.png')} alt="" />
                  </div>
                  <div className="drop-content">
                    <h2>Drag and drop files here</h2>
                    <p>
                      or <strong>Browse</strong> to upload
                    </p>
                  </div>
                </DropZone>
              </div>
            </div>
            <p className="supported-file">
              <strong>
                <span>.png,</span> <span>.jpg,</span> <span>.jpeg</span>
              </strong>
              files supported only
            </p>
            {uploadedFile.length ? (
              <>
                {' '}
                <p className="selected-count">{`You have Selected ${uploadedFile.length} files`}</p>{' '}
              </>
            ) : null}
          </div>
        </form>

        <>
          <MainWraper>
            {uploadedFile.length && uploadedFile !== undefined
              ? uploadedFile.map((item, key) => {
                  return item.type.match('image/jpeg') ||
                    item.type.match('image/png') ||
                    item.type.match('image/jpg') ? (
                    <Fragment key={key + 1}>
                      <ImageWraper>
                        <Images src={item.path} alt={item.name} className="image" />
                        <p>{item.name}</p>
                        <Link className="img-remove" onClick={() => fileUploaderDelete(key)} to="#">
                          <CloseOutlined />
                        </Link>
                      </ImageWraper>
                    </Fragment>
                  ) : (
                    <Fragment key={key + 1}>
                      <ImageWraper>
                        <p>Invalid file</p>
                        <Link className="img-remove" onClick={() => fileUploaderDelete(key)} to="#">
                          <CloseOutlined />
                        </Link>
                      </ImageWraper>
                    </Fragment>
                  );
                })
              : null}
          </MainWraper>
          <div style={{ width: '100%', height: '0px', overflow: 'hidden' }}>
            {uploadedFile.length ? <div id="image" /> : null}
          </div>

          {uploadedFile.length ? (
            <>
              <CreateButton /> <br /> <br />
              <Button className="btn-convert" onClick={clearAllData}>
                Clear All
              </Button>
            </>
          ) : null}
        </>
      </FileUploadWrap>
    </>
  );
};

export default FileUploader;
