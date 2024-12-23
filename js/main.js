const elUrlShortener = document.querySelector('.url-shortener');
const elUrlShortenerForm = document.querySelector('.js-url-shortener__form');
const elUrlShortenerResults = document.querySelector('.url-shortener__results');



if(elUrlShortenerForm) {
    elUrlShortenerForm.addEventListener('submit', function(evt) {
        evt.preventDefault();

        elUrlShortenerResults.classList.add('url-shortener__results-open')
    });
}

if(elUrlShortener){
    elUrlShortener.addEventListener('click', function(evt) {
        if (evt.target.matches('.js-copy-button')) {
            evt.target.classList.add('copy-button--open');
            evt.target.textContent = 'Copied!';

            navigator.clipboard.writeText(evt.target.previousElementSibling.textContent);


            setTimeout( function () {
                evt.target.classList.remove('copy-button--open');
                evt.target.textContent = 'Copy';
            }, 3000)
        }
    })
}