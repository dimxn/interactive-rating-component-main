let ratings = document.querySelectorAll('.circle'),
    btn = document.getElementById('btn'),
    ratting = document.querySelector('.rating'),
    thanks = document.querySelector('.thanks'),
    span = document.getElementById('result');

for (let i = 0; i < ratings.length; i++) {
    ratings[i].addEventListener('click', () => {
        let rating = ratings[i].innerHTML;
        for (let i = 0; i < ratings.length; i++) {
            ratings[i].classList.contains('selected')
            ratings[i].classList.remove('selected');
        }
        ratings[i].classList.add('selected');
        btn.addEventListener('click', () => {
            ratting.style.display = 'none';
            thanks.style.display = 'block';
            span.innerHTML = rating;
        })
    })
}