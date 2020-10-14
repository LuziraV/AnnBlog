let filter = document.querySelector('.filter');
let articles = document.querySelectorAll('.block-article__all');


    filter.onchange = function () {
        for (let article of articles) {
if (article.dataset.category !== filter.value && filter.value !== 'all') {
    article.classList.add('hidden');
    console.log('hi');
} else {
    article.classList.remove('hidden')
    console.log('by');  
};

    };

};