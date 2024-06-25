let bossHp = 100;
const maxAttempts = 3;
let attempts = 0;

function submitOpinion() {
    const userInput = document.getElementById('userInput').value;
    if (!userInput) {
        alert("意見を入力してください");
        return;
    }

    // ダミーのAI採点ロジック
    const score = Math.floor(Math.random() * 100) + 1; // 1～100のランダムなスコア
    bossHp -= score;
    attempts++;

    // 結果を表示
    const resultElement = document.getElementById('result');
    resultElement.textContent = `意見のスコア: ${score} ポイント | 上司のHP: ${bossHp > 0 ? bossHp : 0}`;
    resultElement.classList.remove('hidden');

    // ゲームの終了条件
    if (bossHp <= 0) {
        alert("おめでとうございます！上司を打ち負かしました！");
        resetGame();
    } else if (attempts >= maxAttempts) {
        alert("ゲームオーバー！上司を倒せませんでした。");
        resetGame();
    }

    // 入力をリセット
    document.getElementById('userInput').value = '';
}

function resetGame() {
    bossHp = 100;
    attempts = 0;
    document.getElementById('bossHp').textContent = bossHp;
    document.getElementById('result').classList.add('hidden');
}
