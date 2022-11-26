import { saveAs } from 'file-saver';
import { getQrCode } from './modules/qrCodeAPI';

const refs = {
  inputElem: document.querySelector('.js-input'),
  btnElem: document.querySelector('.js-btn'),
  imgElem: document.querySelector('.js-img'),
  btnDownload: document.querySelector('.js-btn-download'),
};

refs.btnElem.addEventListener('click', () => {
  const text = refs.inputElem.value;
  //   getQrCode(text).then(file => {
  //     const url = URL.createObjectURL(file);
  //     const aElem = document.createElement('a');
  //     aElem.href = url;
  //     aElem.download = 'myImg.png';
  //     aElem.click();

  //     refs.imgElem.src = url;
  //   });

  getQrCode(text).then(fileImg => {
    const url = URL.createObjectURL(fileImg);
    refs.imgElem.src = url;
    file = fileImg;
  });
});

let file;

refs.btnDownload.addEventListener('click', () => {
  saveAs(file);
});
