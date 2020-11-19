const inputArea = document.getElementById('input-area');
const resultArea = document.getElementById('result-area');

inputArea.addEventListener('change', function (e) {
  const count = (inputArea.value.match(/(iframe)/g) || []);
  if (inputArea.value.match(/^<iframe.*<\/iframe>$/) && count.length === 2) {
    resultArea.innerHTML = inputArea.value;
  } else {
    resultArea.innerHTML = '<p>iframeタグを入力してください<br>（他のタグは入力できません・iframeタグを複数入力することはできません）</p>';
  }
});