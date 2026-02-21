let qrcode = null;

document.getElementById('generateBtn').addEventListener('click', generateQRCode);
document.getElementById('downloadBtn').addEventListener('click', downloadQRCode);

document.getElementById('textInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && e.ctrlKey) {
        generateQRCode();
    }
});

function generateQRCode() {
    const text = document.getElementById('textInput').value.trim();
    
    if (!text) {
        alert('请输入要转换的文本！');
        return;
    }
    
    const qrcodeContainer = document.getElementById('qrcode');
    qrcodeContainer.innerHTML = '';
    
    qrcode = new QRCode(qrcodeContainer, {
        text: text,
        width: 256,
        height: 256,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
    });
    
    document.getElementById('downloadBtn').style.display = 'block';
}

function downloadQRCode() {
    const canvas = document.querySelector('#qrcode canvas');
    if (!canvas) {
        alert('请先生成二维码！');
        return;
    }
    
    const url = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'qrcode.png';
    link.href = url;
    link.click();
}
