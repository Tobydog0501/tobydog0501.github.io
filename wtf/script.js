function generateText() {
    // 獲取輸入值
    const a = document.getElementById('inputA').value;
    const b = document.getElementById('inputB').value;
    const c = document.getElementById('inputC').value;
    const d = document.getElementById('inputD').value;
    // 檢查是否所有欄位都已填寫
    if (!a || !b || !c || !d ) {
        alert('請填寫所有欄位！');
        return;
    }

    // 生成文字
    const text = `我是很佩服這個${a}\n\
TM搞的這個東西真的是剛剛好就是剛剛好怎麼樣\n\
感覺好像做了這個東西剛剛好就夠${b}\n\
哎 這真的是智慧呀你媽的\n\
真的是剛剛好就夠${b}\n\
想要${c}不可以想${d} 哎 你別想\n\
這${a}是真的牛逼呀`;

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
    outputDiv.textContent = "我是很佩服這個設計師\n\
TM搞的這個東西真的是剛剛好就是剛剛好怎麼樣\n\
感覺好像做了這個東西剛剛好就夠你吃飽飯又餓不死\n\
哎 這真的是智慧呀你媽的\n\
真的是剛剛好就夠你吃飽飯餓不死\n\
想要多不可以想餓死 哎 你別想\n\
這設計師是真的牛逼呀";
    outputDiv.style.display = 'block';
}