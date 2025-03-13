function generateText() {
    // 獲取輸入值
    const a = document.getElementById('inputA').value;
    const b = document.getElementById('inputB').value;
    const c = document.getElementById('inputC').value;
    const d = document.getElementById('inputD').value;
    const e = document.getElementById('inputE').value;

    // 檢查是否所有欄位都已填寫
    if (!a || !b || !c || !d || !e) {
        alert('請填寫所有欄位！');
        return;
    }

    // 生成文字
    const text = `${a}：${b}太強了
而且${b}還沒有使出全力的樣子
對方就算沒有${c}也會贏
我甚至覺得有點對不起他
我沒能在這場戰鬥讓${b}展現他的全部給我
殺死我的不是${d}或${e}
而是比我更強的傢伙，真是太好了`;

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
    outputDiv.textContent = "五條：宿儺太強了\n\
而且宿儺還沒有使出全力的樣子\n\
對方就算沒有十影也會贏\n\
我甚至覺得有點對不起他\n\
我沒能在這場戰鬥讓宿儺展現他的全部給我\n\
殺死我的不是時間或疾病\n\
而是比我更強的傢伙，真是太好了";
    outputDiv.style.display = 'block';
}