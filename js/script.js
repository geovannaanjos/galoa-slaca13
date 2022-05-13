// Menu mobile

const menuOpenIcon = document.querySelector('#event-name-mobile .menu-open-icon');
const menuCloseIcon = document.querySelector('#sidebar .menu-close-icon');
const container = document.querySelector('#container');

menuOpenIcon.onclick = function() {
  container.classList.add('show-menu');
}

menuCloseIcon.onclick = function() {
  container.classList.remove('show-menu');
}

// Leia mais do Resumo

const readMore = document.querySelector('.block-content .read-more');
const resume = document.querySelector('.block-content .resume');
const fullText = document.querySelector('.block-content .full-text');

readMore.onclick = function() {
  resume.classList.add('inactive');
  fullText.classList.add('active');
}

// Ações da discussão
const shareIdeas = document.querySelector('#share-ideas');
const btnShareIdeas = document.querySelector('#share-ideas .btn-share-ideas');
const formShareIdeas = document.querySelector('#share-ideas-form');
const btnFormShareIdeas = document.querySelector('#share-ideas-form button');
const sentShareIdeas = document.querySelector('#share-ideas-sent');
const btnSentShareIdeas = document.querySelector('#share-ideas-sent .btn-share-ideas-new');

btnShareIdeas.onclick = function() {
  shareIdeas.classList.add('inactive');
  formShareIdeas.classList.add('active');
}

btnFormShareIdeas.onclick = function() {
  formShareIdeas.classList.add('inactive');
  sentShareIdeas.classList.add('active');
  sentShareIdeas.classList.remove('inactive');
}

btnSentShareIdeas.onclick = function() {
  sentShareIdeas.classList.add('inactive');
  formShareIdeas.classList.add('active');
  formShareIdeas.classList.remove('inactive');
}

const replyButtons = document.querySelectorAll('.question-box .actions .reply');
const likeButtons = document.querySelectorAll('.question-box .actions .like');

replyButtons.forEach(reply => {
  reply.onclick = function() {
    reply.parentElement.parentElement.parentElement.querySelector('.answers').classList.toggle('active');
  }
});

likeButtons.forEach(like => {
  like.onclick = function() {
    const counter = like.querySelector('.like-counter').innerHTML;
    const likeCount = Number(counter) + 1;
    like.querySelector('.like-counter').innerHTML = likeCount;
  }
});

// Editor de texto da discussão

var oDoc;
function initiateDocs() {
  oDoc = document.getElementById("textBox");
}
function formatType(sCmd, sValue) {
  document.execCommand(sCmd, false, sValue);
  oDoc.focus();
}