const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const miBtn = document.querySelector('.mi-btn');
const diBtn = document.querySelector('.di-btn');
const wrapperRect = wrapper.getBoundingClientRect();
const diBtnRect = diBtn.getBoundingClientRect();

miBtn.addEventListener("click", () => {
    question.innerHTML = "I Miss You Too";
});

diBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - diBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - diBtnRect.height)) + 1;
    diBtn.style.left = i + 'px';
    diBtn.style.top = j + 'px';
});
