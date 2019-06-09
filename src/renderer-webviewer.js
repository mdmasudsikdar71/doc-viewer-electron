const { dialog } = require('electron').remote;
const path = require('path');

document.getElementById('myButton').addEventListener('click', () => {
    dialog.showOpenDialog({
        properties: ['openFile'],
        filters: [{ name: "PDFs", extensions: ['pdf'] }]
    }, (filepaths) => {
        if (!filepaths || filepaths.length === 0) return;

        const filePath = filepaths[0];
        const viewerEle = document.getElementById('viewer');
        viewerEle.innerHTML = '';

        // Create an iframe that loads PDF.js viewer
        const iframe = document.createElement('iframe');
        iframe.src = path.resolve(__dirname, `../public/pdfjs/web/viewer.html?file=${filePath}`);
        iframe.width = '100%';
        iframe.height = '100%';
        iframe.style.border = 'none';

        viewerEle.appendChild(iframe);
    });
});
