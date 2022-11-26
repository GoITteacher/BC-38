const BASE_URL = 'https://getqrcode.p.rapidapi.com/api/getQR';
const options = {
  headers: {
    'X-RapidAPI-Key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
    'X-RapidAPI-Host': 'getqrcode.p.rapidapi.com',
  },
};

export function getQrCode(text) {
  const params = new URLSearchParams({
    forQR: text,
  });
  return fetch(`${BASE_URL}?${params}`, options).then(response => {
    console.log(response);
    return response.blob();
  });
}
