document.addEventListener('DOMContentLoaded', () => {
  const encryptBtn = document.getElementById('encrypt-btn');
  const decryptBtn = document.getElementById('decrypt-btn');
  const copyBtn = document.getElementById('copy-btn');
  const textInput = document.getElementById('text-input');
  const resultOutput = document.getElementById('result-output');

  encryptBtn.addEventListener('click', () => {
    const text = textInput.value.toLowerCase();
    const encryptedText = encryptText(text);
    resultOutput.value = encryptedText;
  });

  decryptBtn.addEventListener('click', () => {
    const text = textInput.value.toLowerCase();
    const decryptedText = decryptText(text);
    resultOutput.value = decryptedText;
  });

  copyBtn.addEventListener('click', () => {
    resultOutput.select();
    document.execCommand('copy');
  });

  function encryptText(text) {
    let encryptedText = text.replace(/e/g, 'enter');
    encryptedText = encryptedText.replace(/i/g, 'imes');
    encryptedText = encryptedText.replace(/a/g, 'ai');
    encryptedText = encryptedText.replace(/o/g, 'ober');
    encryptedText = encryptedText.replace(/u/g, 'ufat');
    return encryptedText;
  }

  function decryptText(text) {
    let decryptedText = text.replace(/enter/g, 'e');
    decryptedText = decryptedText.replace(/imes/g, 'i');
    decryptedText = decryptedText.replace(/ai/g, 'a');
    decryptedText = decryptedText.replace(/ober/g, 'o');
    decryptedText = decryptedText.replace(/ufat/g, 'u');
    return decryptedText;
  }
});
