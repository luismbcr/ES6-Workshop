
export const userProfileTemplate = ({ picture, login }) => {
  return `<img class="user__picture" src="${picture.thumbnail}" alt="alt">
 <p class="user__name">Hi, ${login.username}</p>`;
};
