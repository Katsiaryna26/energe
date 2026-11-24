const questions = [
  {category:'ЭНЕРГОПРИВЫЧКИ',icon:'☀',text:'Ты выходишь из комнаты. Как лучше поступить со светом?',answers:['Оставить включённым — вдруг пригодится','Выключить, если в комнате никого нет','Включить ещё одну лампу'],correct:1,tip:'Свет в пустой комнате — ненужный расход энергии.'},
  {category:'ЭЛЕКТРИЧЕСТВО',icon:'⚡',text:'Какой чайник расходует меньше энергии?',answers:['Чайник с водой ровно на одну чашку','Чайник, налитый до краёв','Любой, это не зависит от количества воды'],correct:0,tip:'Нагревай ровно столько воды, сколько тебе нужно.'},
  {category:'ДОМ',icon:'⌂',text:'На улице холодно. Как сберечь тепло дома?',answers:['Открыть окно настежь и включить отопление','Закрыть окна и плотно зашторить на ночь','Держать входную дверь открытой'],correct:1,tip:'Закрытые окна и шторы помогают сохранить тепло.'},
  {category:'ТЕХНИКА',icon:'▣',text:'Что лучше сделать с зарядным устройством после зарядки?',answers:['Отключить его от розетки','Оставить в розетке навсегда','Обмотать его бумагой'],correct:0,tip:'Даже без телефона адаптер может расходовать энергию.'},
  {category:'ЭКОЛОГИЯ',icon:'♧',text:'Какое освещение обычно экономнее?',answers:['Старая лампа накаливания','Светодиодная лампа','Свеча в каждой комнате'],correct:1,tip:'Светодиодные лампы потребляют меньше электричества.'},
  {category:'ЭЛЕКТРИЧЕСТВО',icon:'⚡',text:'Телевизор выключен пультом и показывает красную точку. Что это значит?',answers:['Он полностью отключён от электричества','Он находится в режиме ожидания','Он заряжает пульт'],correct:1,tip:'Режим ожидания тоже потребляет немного электричества.'},
  {category:'ДОМ',icon:'⌂',text:'Какая привычка помогает холодильнику тратить меньше энергии?',answers:['Часто и надолго открывать дверцу','Ставить горячую кастрюлю внутрь','Не оставлять дверцу открытой'],correct:2,tip:'Планируй, что достать, чтобы меньше держать дверцу открытой.'},
  {category:'ЭНЕРГОПРИВЫЧКИ',icon:'☀',text:'Ты чистишь зубы. Что делать с водой?',answers:['Выключить кран, пока чистишь','Оставить воду течь','Набрать полную ванну'],correct:0,tip:'Закрывая кран, мы бережём воду и энергию на её подогрев.'},
  {category:'ТРАНСПОРТ',icon:'↗',text:'До парка совсем близко. Как можно добраться с меньшими выбросами?',answers:['На личном автомобиле одному','Пешком или на велосипеде','На самолёте'],correct:1,tip:'Короткая прогулка пешком полезна и человеку, и природе.'},
  {category:'ЭЛЕКТРИЧЕСТВО',icon:'⚡',text:'Днём в комнате светло от солнца. Что лучше?',answers:['Использовать дневной свет','Закрыть шторы и включить лампы','Включить все лампы'],correct:0,tip:'Естественный свет бесплатный — открывай шторы днём.'},
  {category:'ДОМ',icon:'⌂',text:'Как быстрее проветрить комнату зимой?',answers:['Немного приоткрыть окно на весь день','Открыть окно широко на несколько минут','Держать окно открытым всю ночь'],correct:1,tip:'Короткое проветривание помогает освежить воздух и не выхолодить стены.'},
  {category:'ТЕХНИКА',icon:'▣',text:'Что сделать, когда ноутбук больше не нужен?',answers:['Оставить включённым на всю ночь','Выключить или перевести в сон','Поставить ещё одну игру'],correct:1,tip:'Выключай технику, если не пользуешься ею долго.'},
  {category:'ЭКОЛОГИЯ',icon:'♧',text:'Что помогает экономить ресурсы при стирке?',answers:['Запускать полную загрузку подходящим режимом','Стирать одну футболку отдельно каждый раз','Стирать всё в самой горячей воде'],correct:0,tip:'Полная загрузка и подходящий режим помогают расходовать меньше воды и энергии.'},
  {category:'ЭНЕРГОПРИВЫЧКИ',icon:'☀',text:'Почему полезно накрыть кастрюлю крышкой?',answers:['Еда готовится быстрее, уходит меньше тепла','Плита начинает работать громче','Крышка охлаждает еду'],correct:0,tip:'Под крышкой тепло сохраняется, и плите нужно меньше работать.'},
  {category:'ДОМ',icon:'⌂',text:'Где лучше поставить холодильник?',answers:['Рядом с горячей плитой или батареей','В прохладном месте подальше от плиты','Под прямым солнцем'],correct:1,tip:'В прохладном месте холодильнику проще сохранять нужную температуру.'},
  {category:'ЭЛЕКТРИЧЕСТВО',icon:'⚡',text:'Какой способ сушить вещи экономит электричество?',answers:['Использовать сушилку каждый раз','Развесить вещи и дать им высохнуть на воздухе','Включить отопление на максимум'],correct:1,tip:'Если позволяет погода, воздух и солнце высушат вещи без электроприбора.'},
  {category:'ТРАНСПОРТ',icon:'↗',text:'Для поездки на дальнее расстояние что часто экономнее?',answers:['Поезд или автобус','Автомобиль в одиночку на каждого','Несколько коротких поездок на такси'],correct:0,tip:'Общественный транспорт перевозит много людей за одну поездку.'},
  {category:'ТЕХНИКА',icon:'▣',text:'Посудомоечная машина загружена. Как действовать?',answers:['Запустить подходящий полный цикл','Открыть её во время мойки','Запустить несколько циклов с одной тарелкой'],correct:0,tip:'Полная загрузка и экономичный цикл помогают расходовать меньше ресурсов.'},
  {category:'ЭКОЛОГИЯ',icon:'♧',text:'Что лучше для планеты — выбросить банку или переработать?',answers:['Переработать, если доступен сбор такого сырья','Выбросить в лесу','Закопать у дома'],correct:0,tip:'Сортировка помогает вернуть некоторые материалы в новое использование.'},
  {category:'ЭНЕРГОПРИВЫЧКИ',icon:'☀',text:'На улице солнечный летний день. Как высушить футболку?',answers:['На солнце и свежем воздухе','Включить электрический обогреватель','Не сушить и купить новую'],correct:0,tip:'Солнце и воздух — простые помощники без лишнего электричества.'},
  {category:'ДОМ',icon:'⌂',text:'Как сохранить прохладу летом?',answers:['Задёрнуть шторы от жаркого солнца','Всегда держать окно открытым на солнце','Оставить холодильник открытым'],correct:0,tip:'Шторы со стороны солнца помогают помещению меньше нагреваться.'},
  {category:'ВОДА',icon:'≈',text:'Как сберечь горячую воду, принимая душ?',answers:['Проводить под душем как можно дольше','Закрывать воду, пока намыливаешься','Оставлять кран открытым после душа'],correct:1,tip:'Меньше горячей воды — меньше энергии на её нагрев.'},
  {category:'ЭЛЕКТРИЧЕСТВО',icon:'⚡',text:'Сколько вещей стоит подключать к розетке?',answers:['Столько, сколько нужно сейчас','Все приборы, которые найдёшь','Любые сломанные приборы'],correct:0,tip:'Используй технику по необходимости и выключай после работы.'},
  {category:'ЭКОЛОГИЯ',icon:'♧',text:'Зачем сажают деревья?',answers:['Они помогают природе, животным и людям','Чтобы было больше упаковки','Чтобы расходовать больше электричества'],correct:0,tip:'Деревья поддерживают жизнь, дают тень и создают среду обитания.'},
  {category:'ТРАНСПОРТ',icon:'↗',text:'Вы едете всей семьёй в одно место. Что разумнее?',answers:['По возможности поехать вместе','Всем взять по отдельной машине','Каждому заказать отдельное такси'],correct:0,tip:'Одна общая поездка часто требует меньше топлива на человека.'},
  {category:'ТЕХНИКА',icon:'▣',text:'Почему полезно выбирать приборы с высокой энергоэффективностью?',answers:['Они при работе расходуют меньше электричества','Они никогда не ломаются','Они работают без электричества'],correct:0,tip:'Экономичная техника помогает снизить расход электричества.'},
  {category:'ДОМ',icon:'⌂',text:'На кухне нужен свет. Что лучше сделать?',answers:['Включить только нужный свет','Включить свет во всём доме','Не выключать свет до утра'],correct:0,tip:'Включай свет там и тогда, где он действительно нужен.'},
  {category:'ВОДА',icon:'≈',text:'Зачем чинить капающий горячий кран?',answers:['Чтобы не терять воду и энергию на её нагрев','Чтобы вода капала быстрее','Это только для красоты'],correct:0,tip:'Даже небольшая утечка со временем превращается в большой расход.'},
  {category:'ЭНЕРГОПРИВЫЧКИ',icon:'☀',text:'Что сделать со светом, уходя из дома?',answers:['Выключить ненужные лампы и технику','Включить свет во всех комнатах','Оставить открытыми все окна'],correct:0,tip:'Проверь свет и приборы перед выходом.'},
  {category:'ЭКОЛОГИЯ',icon:'♧',text:'Как лучше поступить с вещью, которая тебе больше не нужна?',answers:['Отдать тому, кому она пригодится','Сразу выбросить в лес','Купить такую же новую'],correct:0,tip:'Повторное использование вещей экономит материалы и ресурсы.'},
  {category:'ТРАНСПОРТ',icon:'↗',text:'Когда автобус полезнее, чем отдельные поездки на машине?',answers:['Когда он перевозит много пассажиров','Когда едет пустым без остановок','Никогда'],correct:0,tip:'Вместе добираться часто эффективнее, чем ехать по одному.'},
  {category:'ВОДА',icon:'≈',text:'Почему важно сообщить взрослым о протекающей трубе?',answers:['Чтобы вовремя починить утечку','Чтобы стало мокрее','Чтобы открыть все краны'],correct:0,tip:'Найденная и исправленная утечка помогает сохранить воду.'},
];

const playerConfig = [
  {name:'Игрок 1',token:'☀',avatar:'avatar-one'},
  {name:'Игрок 2',token:'☾',avatar:'avatar-two'},
];
const totalSteps = 29;
const state = {positions:[0,0],currentPlayer:0,turnOrigin:0,lastQuestion:-1,busy:false,finished:false,pendingQuestion:null,pendingLanding:null,answerCorrect:null};
const board = document.querySelector('#board');
const dice = document.querySelector('#rollButton');
const dieFace = document.querySelector('#dieFace');
const dialog = document.querySelector('#questionDialog');
const resultDialog = document.querySelector('#resultDialog');

function buildBoard(){
  board.replaceChildren();
  for(let index=0;index<=totalSteps;index++){
    const row=Math.floor(index/6);
    const offset=index%6;
    const column=row%2===0?offset:5-offset;
    const cell=document.createElement('div');
    cell.className='cell'+(index===0?' cell-start':'')+(index===totalSteps?' cell-finish':'');
    cell.dataset.cell=String(index);
    cell.style.gridRow=String(row+1);
    cell.style.gridColumn=String(column+1);
    const number=document.createElement('span');number.className='cell-number';number.textContent=String(index===0?'':index);
    const symbol=document.createElement('span');symbol.className='cell-symbol';symbol.textContent=index===0?'⚑':index===totalSteps?'✿':['✦','♧','☀','≈','↗','✧'][(index*7)%6];
    const tokens=document.createElement('span');tokens.className='tokens';tokens.dataset.tokens=String(index);
    cell.append(number,symbol,tokens);board.append(cell);
  }
}

function render(){
  document.querySelectorAll('.tokens').forEach(container=>container.replaceChildren());
  state.positions.forEach((position,player)=>{
    const token=document.createElement('span');token.className=`token token-${player===0?'one':'two'}`;token.textContent=playerConfig[player].token;token.title=playerConfig[player].name;
    board.querySelector(`[data-tokens="${position}"]`)?.append(token);
  });
  board.querySelectorAll('.cell').forEach(cell=>{
    const occupied=state.positions.includes(Number(cell.dataset.cell));
    cell.classList.toggle('cell-player',occupied);
  });
  state.positions.forEach((position,player)=>{
    const score=document.querySelector(`#score${player+1}`);
    const label=document.querySelector(`#position${player+1}`);
    score.textContent=String(position);
    label.textContent=position===0?'Старт':position===totalSteps?'Финиш':`Клетка ${position}`;
    document.querySelector(`#playerRow${player+1}`).classList.toggle('active-player',!state.finished&&player===state.currentPlayer);
  });
  const player=playerConfig[state.currentPlayer];
  document.querySelector('#turnLabel').textContent=`ХОД ИГРОКА ${state.currentPlayer+1}`;
  document.querySelector('#turnAvatar').className=`player-avatar ${player.avatar}`;
  document.querySelector('#turnAvatar').textContent=player.token;
  document.querySelector('#turnName').textContent=player.name;
  document.querySelector('#turnHint').textContent=state.busy?'Выбери ответ на вопрос':state.finished?'Партия завершена':'Твоя очередь — бросай кубик';
  document.querySelector('#progressFill').style.width=`${Math.round(state.positions[state.currentPlayer]/totalSteps*100)}%`;
  document.querySelector('#progressText').textContent=`${state.positions[state.currentPlayer]} из ${totalSteps} шагов`;
  dice.disabled=state.busy||state.finished;
  document.querySelector('#diceTitle').textContent=state.busy?'Твой вопрос!':state.finished?'Финиш!':'Твой ход!';
  document.querySelector('#diceDescription').textContent=state.busy?'Выбери правильный ответ.':state.finished?'Выбери победителя!':'Нажми на кубик и отправляйся в путь.';
  document.querySelector('#rollText').textContent=state.finished?'Партия завершена':'Бросить кубик';
}

function pickQuestion(){
  const candidates=questions.map((_,i)=>i).filter(i=>i!==state.lastQuestion);
  return candidates[Math.floor(Math.random()*candidates.length)];
}

function roll(){
  if(state.busy||state.finished)return;
  const player=state.currentPlayer;
  state.turnOrigin=state.positions[player];
  const steps=Math.floor(Math.random()*6)+1;
  state.busy=true;
  dice.disabled=true;
  dieFace.classList.add('token-bounce');
  dieFace.dataset.value=String(steps);
  document.querySelector('#announcement').textContent=`Появилось число ${steps}. ${playerConfig[player].name} передвигается на ${steps} шагов.`;
  window.setTimeout(()=>{
    dieFace.classList.remove('token-bounce');
    state.pendingLanding=Math.min(totalSteps,state.turnOrigin+steps);
    state.pendingQuestion=pickQuestion();
    state.lastQuestion=state.pendingQuestion;
    openQuestion(steps);
  },520);
}

function openQuestion(steps){
  const question=questions[state.pendingQuestion];
  const player=playerConfig[state.currentPlayer];
  document.querySelector('#questionIcon').textContent=question.icon;
  document.querySelector('#questionCategory').textContent=question.category;
  document.querySelector('#questionStep').textContent=`КЛЕТКА ${state.pendingLanding}`;
  document.querySelector('#questionDie').dataset.value=String(steps);
  document.querySelector('#questionDie').setAttribute('aria-label',`На кубике выпало ${steps}`);
  document.querySelector('#questionRoll').textContent=String(steps);
  document.querySelector('#questionAvatar').className=`player-avatar ${player.avatar}`;
  document.querySelector('#questionAvatar').textContent=player.token;
  document.querySelector('#questionPlayer').textContent=player.name;
  document.querySelector('#questionTitle').textContent=question.text;
  const list=document.querySelector('#answerList');list.replaceChildren();
  document.querySelector('#answerFeedback').textContent='';
  document.querySelector('#answerFeedback').className='answer-feedback';
  const continueButton=document.querySelector('#continueButton');continueButton.classList.add('hidden');
  question.answers.forEach((answer,index)=>{
    const button=document.createElement('button');button.type='button';button.className='answer-option';
    const letter=document.createElement('span');letter.className='answer-letter';letter.textContent=String.fromCharCode(65+index);
    const text=document.createElement('span');text.textContent=answer;
    button.append(letter,text);button.addEventListener('click',()=>chooseAnswer(index));list.append(button);
  });
  state.pendingSteps=steps;
  dialog.showModal();
  list.querySelector('button')?.focus();
}

function chooseAnswer(selected){
  if(!state.busy)return;
  const question=questions[state.pendingQuestion];
  const correct=selected===question.correct;
  state.answerCorrect=correct;
  const buttons=[...document.querySelectorAll('.answer-option')];
  buttons.forEach((button,index)=>{button.disabled=true;if(index===question.correct)button.classList.add('correct');if(index===selected&&!correct)button.classList.add('wrong');});
  const feedback=document.querySelector('#answerFeedback');
  const continueButton=document.querySelector('#continueButton');
  if(correct){
    state.positions[state.currentPlayer]=state.pendingLanding;
    render();
    feedback.textContent=state.pendingLanding===totalSteps
      ? `Верно! ${question.tip} Ты дошёл до финиша!`
      : `Верно! ${question.tip} Теперь бросает соперник.`;
    feedback.className='answer-feedback';
    continueButton.innerHTML=state.pendingLanding===totalSteps
      ? 'Завершить игру <span aria-hidden="true">→</span>'
      : 'Передать ход <span aria-hidden="true">→</span>';
  }else{
    state.positions[state.currentPlayer]=state.turnOrigin;
    render();
    feedback.textContent='Не совсем! Фишка остаётся на месте, теперь ход соперника.';
    feedback.className='answer-feedback incorrect';
    continueButton.innerHTML='Передать ход <span aria-hidden="true">→</span>';
  }
  continueButton.classList.remove('hidden');
  document.querySelector('#announcement').textContent=correct
    ? (state.pendingLanding===totalSteps?'Правильно! Игрок дошёл до финиша.':'Правильно! Ход переходит сопернику.')
    : 'Неверно. Фишка осталась на прежнем месте, ход переходит сопернику.';
}

function continueTurn(){
  if(!state.busy)return;
  dialog.close();
  if(state.answerCorrect&&state.pendingLanding===totalSteps){
    const winner=playerConfig[state.currentPlayer];
    state.busy=false;state.finished=true;state.pendingQuestion=null;state.pendingLanding=null;state.answerCorrect=null;
    render();
    document.querySelector('#resultTitle').textContent=`${winner.name} победил!`;
    document.querySelector('#resultText').textContent=`${winner.name} правильно ответил на вопрос финиша и стал другом энергии!`;
    resultDialog.showModal();
    return;
  }
  state.currentPlayer=1-state.currentPlayer;
  state.busy=false;state.pendingQuestion=null;state.pendingLanding=null;state.answerCorrect=null;render();
  dice.focus();
}

function restart(){
  dialog.close();resultDialog.close();
  state.positions=[0,0];state.currentPlayer=0;state.turnOrigin=0;state.lastQuestion=-1;state.busy=false;state.finished=false;state.pendingQuestion=null;state.pendingLanding=null;state.answerCorrect=null;
  dieFace.dataset.value='1';render();dice.focus();
  document.querySelector('#announcement').textContent='Новая игра. Начинает игрок 1.';
}

document.querySelector('#continueButton').addEventListener('click',continueTurn);
document.querySelector('#closeDialog').addEventListener('click',()=>{if(state.busy){state.positions[state.currentPlayer]=state.turnOrigin;state.currentPlayer=1-state.currentPlayer;state.busy=false;state.pendingQuestion=null;state.pendingLanding=null;state.answerCorrect=null;render();}dialog.close();});
document.querySelector('#playAgainButton').addEventListener('click',restart);
document.querySelector('#restartTop').addEventListener('click',restart);
dice.addEventListener('click',roll);
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&dialog.open)document.querySelector('#closeDialog').click();});
buildBoard();render();
