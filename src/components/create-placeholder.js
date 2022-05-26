import React, { useState } from 'react';
import domtoimage from 'dom-to-image';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { Spin } from 'antd';

const zip = new JSZip();
const CreatePlaceholder = () => {
  const [state, setState] = useState({
    pLoader: false,
    isDisabled: true,
  });

  const createImage = () => {
    setState({
      ...state,
      pLoader: true,
    });

    const image = document.querySelectorAll('.image');
    const element = document.getElementById('image');
    setTimeout(() => {
      image.forEach(async (item, key) => {
        const width = item.naturalWidth;
        const height = item.naturalHeight;
        const name = item.getAttribute('alt');
        const div = document.createElement('div');
        div.id = key + 1;
        div.class = 'divImage';
        div.innerHTML = width > 100 ? `${width} X ${height}` : '';
        div.style.width = `${width}px`;
        div.style.height = `${height}px`;
        div.style.background = '#b5b5b5';
        div.style.color = '#fff';
        div.style.fontSize = width > 300 ? '40px' : width > 150 ? '20px' : '12px';
        div.style.display = 'flex';
        div.style.justifyContent = 'center';
        div.style.textAlign = 'center';
        div.style.alignItems = 'center';

        element.append(div);

        await domtoimage.toBlob(document.getElementById(key + 1)).then(async blob => {
          zip.file(name, blob, { binary: true });
          if (image.length === key + 1) {
            setState({
              ...state,
              pLoader: false,
            });
            await zip.generateAsync({ type: 'blob' }).then(images => {
              // see FileSaver.js
              saveAs(images, 'placeholder.zip');
            });
          }
        });
        setState({
          ...state,
          isDisabled: true,
          pLoader: false,
        });
      });
    }, 1000);
  };

  const createImage2 = () => {
    setState({
      ...state,
      pLoader: true,
    });

    const image = document.querySelectorAll('.image');
    const element = document.getElementById('image');

    image.forEach(async (item, key) => {
      const width = item.naturalWidth;
      const height = item.naturalHeight;
      const name = item.getAttribute('alt');
      const div = document.createElement('div');
      div.id = key + 1;
      div.class = 'divImage';
      div.innerHTML = width > 100 ? `${width} X ${height}` : '';
      div.style.width = `${width}px`;
      div.style.height = `${height}px`;
      div.style.background = '#b5b5b5';
      div.style.color = '#fff';
      div.style.fontSize = width > 300 ? '40px' : width > 150 ? '20px' : '12px';
      div.style.display = 'flex';
      div.style.justifyContent = 'center';
      div.style.textAlign = 'center';
      div.style.alignItems = 'center';

      element.append(div);

      await domtoimage.toBlob(document.getElementById(key + 1)).then(async blob => {
        zip.file(name, blob, { binary: true });
      });
      setState({
        ...state,
        isDisabled: false,
        pLoader: false,
      });
    });
  };
  const { pLoader, isDisabled } = state;
  return (
    <>
      <button type="button" className="btn-convert" onClick={createImage2}>
        {pLoader ? (
          <span>
            Preparing for convert.. <Spin />
          </span>
        ) : (
          'Prepare'
        )}
      </button>
      <br />
      <br />
      <button disabled={isDisabled} type="button" className="btn-convert" onClick={createImage}>
        {pLoader ? (
          <span>
            Converting.. <Spin />
          </span>
        ) : (
          'Convert Image to Placeholder'
        )}
      </button>
    </>
  );
};

export default CreatePlaceholder;
