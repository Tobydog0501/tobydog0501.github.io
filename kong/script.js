function generateText() {
    // 獲取輸入值
    const a = document.getElementById('inputA').value;
    const b = document.getElementById('inputB').value;
    const c = document.getElementById('inputC').value;
    const d = document.getElementById('inputD').value;
    const e = document.getElementById('inputE').value;
    const f = document.getElementById('inputF').value;
    const g = document.getElementById('inputG').value;
    const h = document.getElementById('inputH').value;
    const i = document.getElementById('inputI').value;
    const j = document.getElementById('inputJ').value;
    const k = document.getElementById('inputK').value;
    const l = document.getElementById('inputL').value;
    const m = document.getElementById('inputM').value;

    // 檢查是否所有欄位都已填寫
    if (!a || !b || !c || !d || !e || !f || !g || !h || !i || !j || !k || !l || !m) {
        alert('請填寫所有欄位！');
        return;
    }

    // 生成文字
    const text = `${a}一到店，所有${b}便都看著他笑，有的叫道：「${a}，你${c}了！」他不回答，對櫃裏說：「${d}，要${e}。」便排出四${f}。他們又故意的高聲嚷道：「你一定又在${g}了！」${a}睜大眼睛說：「你怎麼這樣憑空污人清白……」「什麼清白？我前天親眼見你${h}，被${i}吊著打。」${a}便漲紅了臉，額上的青筋條條綻出，爭辯道：「${h}不能算${i}……${j}！……${k}，能算${i}麼？」接連便是難懂的話，什麼「${l}」，什麼「${m}」之類，引得眾人都鬨笑起來：店內外充滿了快活的空氣。`;

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