function generateText() {
    // 獲取輸入值
    const a = document.getElementById('inputA').value;
    const bRaw = document.getElementById('inputB').value;
    const c = document.getElementById('inputC').value;
    const d = document.getElementById('inputD').value;

    // 檢查是否所有欄位都已填寫
    if (!a || !bRaw || !c || !d) {
        alert('請填寫所有欄位！');
        return;
    }

    // 格式化日期 (YYYY年MM月DD日)
    const date = new Date(bRaw);
    const b = `${date.getFullYear()}年${String(date.getMonth() + 1).padStart(2, '0')}月${String(date.getDate()).padStart(2, '0')}日`;

    // 生成文字
    const text = `我們摯愛的${a}，於西元${b}，悄悄的離開這個${c}，我們痛徹心扉，就僅僅一眨眼的時間，天人永隔。
${a}安祥的走完了${d}，他彷彿在沉睡中做了一個美夢。夢醒了，留下陪伴我們成長過程中的點點滴滴，留下我們永恆的追思與感恩。`;

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