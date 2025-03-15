function generateText() {
    // 獲取輸入值
    const a = document.getElementById('inputA').value;
    const b = document.getElementById('inputB').value;
    const c = document.getElementById('inputC').value;

    // 檢查是否所有欄位都已填寫
    if (!a || !b || !c ) {
        alert('請填寫所有欄位！');
        return;
    }

    // 生成文字
    const text = `你不知道你下一刻會${a}，我告訴你，我也不知道
我只知道的是${b}的時候
我們之間的${c}已經產生微妙的變化了`;

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
    outputDiv.textContent = "你不知道你下一刻會被幹走多少錢，我告訴你，我也不知道\n\
我只知道的是當你把銀行帳本交給張媽媽的時候\n\
我們之間的財務關係已經產生微妙的變化了";
    outputDiv.style.display = 'block';
}