const BASE_URL = 'https://mesto.nomoreparties.co/v1/apf-cohort-203';
const HEADERS = {
  authorization: '2956f65b-3f36-48c4-aba9-ffe0d80f9690',
  'Content-Type': 'application/json',
};

const checkResponse = (res) =>
  res.ok ? res.json() : Promise.reject(new Error(`Ошибка: ${res.status}`));

export const getUser = () =>
  fetch(`${BASE_URL}/users/me`, { headers: HEADERS }).then(checkResponse);

export const getCards = () =>
  fetch(`${BASE_URL}/cards`, { headers: HEADERS }).then(checkResponse);

export const updateUser = (name, about) =>
  fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: HEADERS,
    body: JSON.stringify({ name, about }),
  }).then(checkResponse);

export const updateAvatar = (avatar) =>
  fetch(`${BASE_URL}/users/me/avatar`, {
    method: 'PATCH',
    headers: HEADERS,
    body: JSON.stringify({ avatar }),
  }).then(checkResponse);

export const addCard = (name, link) =>
  fetch(`${BASE_URL}/cards`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({ name, link }),
  }).then(checkResponse);

export const removeCard = (cardId) =>
  fetch(`${BASE_URL}/cards/${cardId}`, {
    method: 'DELETE',
    headers: HEADERS,
  }).then(checkResponse);

export const setLike = (cardId) =>
  fetch(`${BASE_URL}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: HEADERS,
  }).then(checkResponse);

export const unsetLike = (cardId) =>
  fetch(`${BASE_URL}/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: HEADERS,
  }).then(checkResponse);
