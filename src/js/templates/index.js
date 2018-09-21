
export const userProfileTemplate = ({ picture, login }) => {
  return `<img class="user__picture" src="${picture.thumbnail}" alt="alt">
 <p class="user__name">Hi, ${login.username}</p>`;
};


export const movieTemplate = ({ medium_cover_image }) => {
  return `<div class="movies__item">
    <img src="${medium_cover_image}" alt="alt">
  </div>`
}
