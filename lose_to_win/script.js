function generateText() {
    // 獲取輸入值
    const a = document.getElementById('inputA').value;
    // 檢查是否所有欄位都已填寫
    if (!a ) {
        alert('請填寫所有欄位！');
        return;
    }

    // 生成文字
    const text = `${a}開局不利→${a}昏招頻出→${a}陷入苦戰→${a}垂死掙扎→${a}全盤崩潰→${a}敗局已定→${a}發表獲勝感言`;

    // 顯示在畫面上
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = text;
    outputDiv.style.display = 'block';

    // 複製到剪貼簿
    navigator.clipboard.writeText(text)
        .then(() => {
            alert('文字已複製到剪貼簿！');
        })
        .catch(err => {
            console.error('複製失敗:', err);
            alert('複製到剪貼簿失敗，請手動複製！');
        });
}
window.onload = ()=>{
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = "宿儺開局不利→宿儺昏招頻出→宿儺陷入苦戰→宿儺垂死掙扎→宿儺全盤崩潰→宿儺敗局已定→宿儺發表獲勝感言";
    outputDiv.style.display = 'block';
}