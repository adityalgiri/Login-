
const openPopup = document.getElementById('openPopup');
const closePopup = document.getElementById('closePopup');
const popupContainer = document.getElementById('popupContainer');

openPopup.addEventListener('click', () => {
    popupContainer.style.display = 'flex';
});

closePopup.addEventListener('click', () => {
    popupContainer.style.display = 'none';
});
