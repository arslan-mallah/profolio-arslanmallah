const fs = require('fs');
const { PdfReader } = require('pdfreader');

const pdfPath = './src/assets/cv/Muhammad_Arslan_Software_Engineer_KSA.pdf';
const buffer = fs.readFileSync(pdfPath);

let text = '';
new PdfReader().parseBuffer(buffer, (err, item) => {
  if (err) {
    console.error('Error:', err);
  } else if (!item) {
    console.log('=== CV TEXT ===');
    console.log(text);
  } else if (item.text) {
    text += item.text + ' ';
  }
});
