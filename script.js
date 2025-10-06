```javascript
// Lấy input từ người dùng
const commandInput = document.getElementById('command-input');
const runButton = document.getElementById('run-button');

// Hiển thị kết quả khi chạy lệnh
function displayOutput(output) {
    const outputField = document.getElementById('output');
    outputField.textContent = output;
}

// Chạy lệnh và hiển thị kết quả
runButton.addEventListener('click', () => {
    const command = commandInput.value.trim();
    if (command !== '') {
        // Gọi API hoặc thực hiện hành động khác
        displayOutput(`> ${command} \n`);
    }
});
