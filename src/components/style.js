import Styled from 'styled-components';

const FileUploadWrap = Styled.div`
    padding: 90px 0;
    max-width: 600px;
    margin: 0 auto;
    @media only screen and (max-width: 767px){
        max-width: 100%;
        padding: 50px 15px;
    }
    .ant-progress {
        margin: 25px 0 15px;
    }
    .btn-convert{
        cursor: pointer;
        width: 100%;
        text-align: center;
        color: #fff;
        background-color: #0D83F9;
        border: 0 none;
        padding: 15px 0;
        border-radius: 4px;
        &:focus{
            outline: none;
        }
        .ant-spin{
            margin-left: 20px;
            position: relative;
            top: 4px;
        }
        .ant-spin-dot{
            .ant-spin-dot-item{
                background-color: #fff;
            }
        }
        &:disabled {
            background-color: #0D83F950;
        }
    }
    .dropzone-container{
        .dropdown-bg{
            position: relative;
            img{
                width: 100%;
            }
        }
        .dropdown-inner{
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
        }
        .selected-count{
            font-size: 15px;
            margin: 20px 0;
            color: #61667E;
        }
        .supported-file{
            font-size: 15px;
            margin: 10px 0 0;
            color: #61667E;
            span{
                display: inline-block;
                margin-right: 4px;
            }
        }
    }
`;
const Title = Styled.h1`
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    color: #181A31;
    margin-bottom: 50px;
    @media only screen and (max-width: 575px){
        font-size: 26px;
    }
`;
const Message = Styled.div`
    margin: 15px auto 20px; 
    .ant-alert {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 15px 0;
        color: #52c41a;
        border: 0 none;
        &.ant-alert-success{
            background-color: #E9F6E5;
            .ant-alert-message{
                color: #52c41a;
            }
        }
    }   
    .ant-alert-icon{
        fopt-size: 20px;
        position: relative;
        top: 0;
        left: 0;
        margin-right: 10px;
    }
`;
const DropZone = Styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 15px;
    margin: auto;
    cursor: pointer;
    text-align: center;
    width: 100%;
    height: 100%;
    &:focus{
        outline: none;
    }
    .drop-icon{
        margin-bottom: 25px;
        img{
            @media only screen and (max-width: 575px){
                max-width: 35px
            }
        }
    }
    .drop-content{
        h2{
            font-size: 24px;
            font-weight: 600;
            color: #272B41;
            margin-bottom: 6px;
            @media only screen and (max-width: 575px){
                font-size: 18px;
            }
        }
        p{
            font-size: 15px;
            margin-bottom: 10px;
            strong{
                color: #0D83F9;
            }
        }
    }
    input:focus{
        outline: none;
    }
`;
const UploadButton = Styled.button`
    margin: 20px auto;
    display: block;
    padding: 11px;
    border: 1px solid #ddd;
    background: transparent;
    cursor: pointer;
`;
const ImageWraper = Styled.div`
    margin: 10px;
    padding-top: 36px;
    position: relative;
    .img-remove{
        position: absolute;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
        width: 26px;
        height: 26px;
        border-radius: 50%;
        background-color: #FFE5E5;
        text-align: center;
        line-height: 1.8;
        color: #FF0000;
    }
    p{
        font-size: 13px;
        color: #646984;
        margin-top: 8px;
    }
`;
const Images = Styled.img`
    width: 100%;  
    max-width: 100px;  
    p{
        color: #646984;
        font-size: 13px;
    }
`;
const MainWraper = Styled.div`
    overflow: hidden;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin: -10px -10px 5px;
`;
export { DropZone, Title, Message, UploadButton, Images, ImageWraper, MainWraper, FileUploadWrap };
