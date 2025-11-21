const btnAdv = document.querySelector('.btn-inner-adv');
const rectAdv = document.querySelector('.btn-rect-adv');

btnAdv.addEventListener('click', () => {
  // 一度クラスをはずして再度付与することで連続クリックでもアニメ再生可能に
  rectAdv.classList.remove('active');
  // 再描画を待ってからクラス付与（わずかな遅延でtransition再適用）
  setTimeout(() => {
    rectAdv.classList.add('active');
  }, 10);
});