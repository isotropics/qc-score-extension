(async function () {
  console.log("🔍 QC Extension Injected");

  const response = await fetch("https://your-api.com/scores");
  const scoreData = await response.json();

  for (const [boxId, score] of Object.entries(scoreData)) {
    const targetBox = document.querySelector(`[data-box-id="${boxId}"]`);
    if (!targetBox) continue;

    const badge = document.createElement("div");
    badge.className = `qc-score-badge qc-score-${score}`;
    badge.textContent = score;

    targetBox.style.position = 'relative';
    targetBox.appendChild(badge);
  }
})();
