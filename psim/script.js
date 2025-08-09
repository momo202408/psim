var count = 0;


//log(navigator.userAgent);


const inputA = document.getElementById('inputA');
const inputP = document.getElementById('inputP');
const runB = document.getElementById('runButton');
const runC = document.getElementById('runOnesButton');
const clearB = document.getElementById('clearButton');
const calcB = document.getElementById('calcButton');
const logs = document.getElementById('logs');

inputA.addEventListener('input', () => { inputP.value = inputA.value; });
inputP.addEventListener('input', () => { inputA.value = inputP.value; });
runB.addEventListener('click', runSimi);
//clearB.addEventListener('click', clearLog);
calcB.addEventListener('click', calcBinomialDistribution);
runC.addEventListener('click', runOnesSimi);

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
  // if (logs.firstChild && text == logs.firstChild.textContent) {
  //   logs.firstChild.classList.toggle("again", true);
  //   logs.firstChild.dataset.times =
  //     (parseInt(logs.firstChild.dataset.times) || 0) + 1;
  //   return;
  // }
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

