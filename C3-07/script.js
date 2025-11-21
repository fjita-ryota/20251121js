const button = document.querySelector('.btn-sparkle');

function createSparkle() {
  const sparkle = document.createElement('div');
  sparkle.classList.add('sparkle');
  
  const size = Math.random() * 6 + 4; // 4pxから10pxまでのランダムサイズ
  sparkle.style.width = `${size}px`;
  sparkle.style.height = `${size}px`;
  
  const x = Math.random() * button.offsetWidth;
  const y = Math.random() * button.offsetHeight;
  sparkle.style.left = `${x}px`;
  sparkle.style.top = `${y}px`;
  
  button.appendChild(sparkle);

  // 一定時間後に削除
  setTimeout(() => {
    sparkle.remove();
  }, 2000);
}

function sparkleEffect() {
  setInterval(createSparkle, 300); // 0.3秒ごとに新しい星を生成
}

sparkleEffect();