window.addEventListener('DOMContentLoaded', function() {
    const modalTrigger = document.querySelector('[data-modal]'),
          form = document.querySelector('.form'),
          title = document.querySelector('.title'),
          modal = document.querySelector('.modal'),
          modalTitle = document.querySelector('.modal__title'),
          modalClosebtn = document.querySelector('[data-close]'),
          modalConfirmBtn = document.querySelector('[data-confirm]'),
          modalImg = document.querySelector('.confirm__content');


    

        modalTrigger.addEventListener('click', () => {
            let data = document.querySelector('#mail').value;
                modal.style.display = 'block';
                modalTitle.textContent = `Please confirm account creation for ${data}`;
        });

        modalClosebtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    
        modalConfirmBtn.addEventListener('click', () => {
            let data = document.querySelector('#mail').value;
            modal.style.display = 'none';
            form.style.display = 'none';
            modalImg.style.display ='block';
            title.textContent = `Hello user with email: ${data}`;
        });
});