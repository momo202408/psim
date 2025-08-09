var count = 0;


//log(navigator.userAgent);


const inputA = document.getElementById('inputA');
const inputP = document.getElementById('inputP');
const runB = document.getElementById('runButton');
const runC = document.getElementById('runOnesButton');
const clearB = document.getElementById('clearButton');
const calcB = document.getElementById('calcButton');
const logs = document.getElementById('logs');
const minusButton = document.getElementById('minusButton');
const plusButton = document.getElementById('plusButton');
const minus10Button = document.getElementById('minus10Button');
const plus10Button = document.getElementById('plus10Button');

const updateValue = (amount) => {
  const currentValue = parseFloat(inputA.value) || 0;
  const newValue = Math.max(1, currentValue + amount);
  inputA.value = newValue.toFixed(1);
  inputP.value = newValue.toFixed(1);
};

inputA.addEventListener('input', () => { inputP.value = inputA.value; });
inputP.addEventListener('input', () => { inputA.value = inputP.value; });
runB.addEventListener('click', runSimi);
//clearB.addEventListener('click', clearLog);
calcB.addEventListener('click', calcBinomialDistribution);
runC.addEventListener('click', runOnesSimi);
minusButton.addEventListener('click', () => updateValue(-1));
plusButton.addEventListener('click', () => updateValue(1));
minus10Button.addEventListener('click', () => updateValue(-10));
plus10Button.addEventListener('click', () => updateValue(10));

function runSimi(e) {
  var random;
  for(var i=1;i<5000;i++){
    random = Math.random();
    if(random < (1/parseFloat(inputA.value))){
      count++;
      log(count + ' o '+i);
      break;
    }else{
      //log('x');
    }
  }
}

function runOnesSimi(e) {
  var random;
  random = Math.random();
  if(random < (1/parseFloat(inputA.value))){
    count++;
    log(count + ' ○ ');
  }else{
    count++;
    log(count + ' × ');
  }
}

function clearLog(e) {
  while(logs.lastChild){
    logs.removeChild(logs.lastChild);
  }
  count = 0;
}

function calcBinomialDistribution() {
  //var x = document.getElementById('inputX').value;
  var x = 0;
  var n = document.getElementById('inputN').value;
  var p = 1 / document.getElementById('inputP').value;
  var ans = combination(n, x) * p ** x * (1 - p) ** (n - x);
  log('Answer : ' + (1 - ans)*100 + '%');
}

function controlChange(evt, n) {
  var i, tabcontent, tablinks;

  // すべてのタブコンテンツを非表示にする
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // すべてのタブボタンから "active" クラスを削除
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // 対応するタブコンテンツを表示し、クリックされたタブボタンに "active" クラスを追加
  if (n === 0) {
    document.getElementById('ctlSimu').style.display = "block";
  } else if (n === 1) {
    document.getElementById('ctlBinomDist').style.display = "block";
  }
  evt.currentTarget.className += " active";
}



/* utils */

function log(text) {
  logs.scrollTop = 0;
  const pre = document.createElement("pre");
  pre.textContent = `${text}`;
  logs.insertBefore(pre, logs.firstChild);
}

var combination = function(n, r) {
  var m = 1, d = 1;
  for (var i = 0; i < r; i++) {
    m *= n - i;
    d *= r - i;
  }
  return m / d;
};



function setProbabilityValue(value) {
  inputA.value = value;
  inputP.value = value;
}

