import './index.scss';

import { articlesData } from "./mock/data.js";

const articlesList = document.querySelector('.articles-list');

articlesData.forEach((post) => {
  articlesList.insertAdjacentHTML('beforeend', createPostTmp(post));
});


function createPostTmp(post) {
  const postTmp = `
    <article class="articles-list__item" id="${post.id}">
        <div class="article-snippet">
          <div class="article-snippet__meta">
            <div class="article-author-img">
            <img src="${post.author.avatarUrl}" alt="${post.author.alias}">
            </div>
            <div class="article-author-info">
              <a href="#!" class="article-author-name"><span>${post.author.alias}</span></a>
              <span class="article-author-time">${post.timePublished}</span>
              </div>
          </div>

          <h2 class="article-snippet__title"><a href="#!" class="title-a"><span>${post.titleHtml}</span></a></h2>

          <div class="article-snippet__status">
            <div class="article-reading icon-and-text-div">
            <svg id="scheduled" viewBox="0 0 24 24" width="24px" class="article-icon-svg">
            <path fill="currentColor" d="M12 3c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z"/>
            <path fill="currentColor" d="M12.5 12.2V7H11v6l5.2 3.2.8-1.2z"/>
            <title>Время на прочтение</title>
            </svg>
            <span>${post.readingTime} мин</span>
            </div>
            <div class="article-view icon-and-text-div">
            <svg id="counter-views" viewBox="0 0 24 24" width="24px" class="article-icon-svg">
            <path fill="currentColor" d="M21.5 10.4C20 8.3 16.8 5 12 5s-8 3.3-9.5 5.4c-.7 1-.7 2.3 0 3.2C4 15.7 7.2 19 12 19s8-3.3 9.5-5.4c.7-1 .7-2.3 0-3.2zM12 17c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"/>
            <path fill="currentColor" d="M13.7 9.5c-.5-.3-1.1-.5-1.7-.5-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3h-3l1.7-2.5z"/>
            <title>Количество просмотров</title>
            </svg>
            <span>${formatViewCount(post.statistics.readingCount)}</span>
            </div>
          </div>

          <div class="article-snippet__hubs">
            <span>${post.hubs.map((obj) => makeHubLink(obj)).join(', ')}</span>
          </div>

          <div class="article-snippet__body">
            <div class="article-cover">
            ${post.leadData.image
      ? `<img src="${post.leadData.image.url}" alt="${post.leadData.image.fit}">`
      : ''
    }
            </div>
            <div class="article-text">${post.leadData.textHtml}</div>
            <a href="#!" class="article-read-more-button">Читать далее</a>
          </div>
        </div>

        <div class="article-icons">
          <div class="article-icons__icon icon-and-text-div">
          <svg id="counter-rating" viewBox="0 0 24 24" width="24px" class="article-icon-svg">
          <path fill="currentColor" d="M17 10v4l-5 6-5-6v-4l5-6 5 6Z" />
          <title>Всего голосов ${post.statistics.votesCount}: ↑${post.statistics.votesCountPlus} и ↓${post.statistics.votesCountMinus}</title>
          </svg>
          <span>${post.statistics.score}</span>
          </div>
          <div class="article-icons__icon icon-and-text-div">
          <button type="button" class="article-icon-button">
          <svg id="counter-favorite" viewBox="0 0 24 24" width="24px" class="article-icon-svg">
          <path fill="currentColor" d="M7 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1.514.858L12 17.166l4.485 2.692A1 1 0 0 0 18 19V5a1 1 0 0 0-1-1H7Z"/>
          <title>Добавить в закладки</title>
          </svg>
          </button>
          <span>${post.statistics.favoritesCount}</span>
          </div>
          <div class="article-icons__icon icon-and-text-div">
          <button type="button" class="article-icon-button">
          <svg viewBox="0 0 24 24" width="24px" class="article-icon-svg">
          <path fill="currentColor" d="M13.8 13.8V18l7.2-6.6L13.8 5v3.9C5 8.9 3 18.6 3 18.6c2.5-4.4 6-4.8 10.8-4.8z"/>
          <title>Поделиться</title>
          </svg>
          </button>
          </div>
          <div class="article-icons__icon icon-and-text-div">
          <a href="#!">
          <svg id="counter-comments" viewBox="0 0 24 24" width="24px" class="article-icon-svg">
          <path fill="currentColor" d="M16 6a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4v2.217a.783.783 0 0 1-1.186.671L10 18H8a4 4 0 0 1-4-4v-4a4 4 0 0 1 4-4h8Z" />
          <title>Комментарии</title>
          </svg>
          </a>
          <span>${post.statistics.commentsCount}</span>
          </div>
        </div>
    </article>
    `;

  return postTmp;
}

function formatViewCount(num) {
  if (num >= 1000) {
    num = (num / 1000).toFixed(1);
    if (num[num.length - 1] == 0) {
      num = (+num).toFixed(0);
    }
    num += 'K';
  }

  return num;
}

function makeHubLink(hub) {
  return `<a href="#!" class="article-snippet__hub-link">${hub.titleHtml}</a>`;
}