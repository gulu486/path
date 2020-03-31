//  c产生随机数（0~100）
let randomNumber = Math.floor(Math.random() * 100) + 1;

// form
const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');

// resultParas
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

// 计数轮次
let guessCount = 1;
let resetButton;

// 输入框焦点
guessField.focus();

function checkGuess() {
  // 输入框的字符串值转换为数字类型，确保该值是一个数字
  const userGuess = Number(guessField.value);

  if(guessCount === 1) {
    guesses.textContent = '上次猜的数: ';
  }

  // 函数内部作用域显示
  guesses.textContent += userGuess + ' ';

  // 判断，调用setGameOver()函数结束游戏
  if(userGuess === randomNumber) {
    lastResult.textContent = '恭喜你！猜对了！';

    // 设置背景色为绿色
    lastResult.style.backgroundColor = 'green';

    // 高低判断文本显示为空
    lowOrHi.textContent = '';

    setGameOver();
  } else if(guessCount === 10) {
    lastResult.textContent = '!!!GAME OVER!!!';
    lowOrHi.textContent = '';
    setGameOver();
  } else {
    lastResult.textContent = '你猜错了！';
    lastResult.style.backgroundColor = 'red';

    // 数字高低判断
    if(userGuess < randomNumber) {
      lowOrHi.textContent = '刚才你猜低了！';
    } else if(userGuess > randomNumber) {
      lowOrHi.textContent = '刚才你猜高了！';
    }
  }
  
  // 每调用依次函数，游戏轮次递增加1
  guessCount++;

  // 输入框清空
  guessField.value = '';

  // 输入框焦点
  guessField.focus();
}

// 提交按钮绑定点击事件监听器，事件发生执行checkGuess函数
guessSubmit.addEventListener('click', checkGuess);

// 结束游戏代码
function setGameOver() {
  // 添加disabled属性使输入框和提交按钮不可选
  guessField.disabled = true;
  guessSubmit.disabled = true;

  // 创建button元素，设置文本，添加在HTML的底部，设置事件监听器
  resetButton = document.createElement('button');
  resetButton.textContent = '开始新游戏';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

// 重置游戏函数
function resetGame() {
  // 轮次设置为1
  guessCount = 1;

  const resetParas = document.querySelectorAll('.resultParas p');

  // for循环遍历p标签，设置文本为空
  for(let i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }

  // 移除resetButton节点元素
  resetButton.parentNode.removeChild(resetButton);

  // 将disabled布尔值设置为false
  guessField.disabled = false;
  guessSubmit.disabled = false;

  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  // 随机数重置
  randomNumber = Math.floor(Math.random() * 100) + 1;
}