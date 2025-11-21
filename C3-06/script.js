const btnChange = document.querySelector('.btn-change');

btnChange.addEventListener('click', () => {
  // .done クラスを追加（チェックマーク風に）
  btnChange.classList.add('done');
  // ボタンテキストを「完了！」に変更
  btnChange.textContent = '完了！';
});