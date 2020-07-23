import { NEWSAPI } from './utils/constants';

export function getNews() {
  return fetch(NEWSAPI.top_headlines).then((resp) => {
    const res = resp.json();
    return resp.articles;
  });
}