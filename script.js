//no_no_no_mr.robocotik_you_don't_hochesh_to_use_gotovii_codik
//you_have_to_napisat_the_code_sam


let jokesContainer = document.getElementById('jokes_container');
let currentLength = 0;

let = xhr = new XMLHttpRequest();
xhr.open('GET', 'http://localhost:3000/jokes');
xhr.send();
xhr.responseType = 'json';
xhr.onload = () =>{
    const jokes = xhr.response;
    if(jokes.length){
        jokesContainer.innerHTML='';
        jokes.forEach(joke =>{
            jokesContainer.innerHTML += getJokesHTML(joke);
        });
    }
};
function getJokesHTML(joke){
    return `
    <div class="joke" id="joke_${joke.id}">
    <div class="joke__content">
        ${joke.content}
    </div>
    <div class="joke__footer">
        <div class="joke__likes">
            <span>${joke.likes}</span>
            <button class="joke__btn">
                <span class="material-symbols-outlined">
                    thumb_up
                </span>
            </button>
        </div>
        <div class="joke__likes">
            <span>${joke.dislikes}</span>
            <button class="joke__btn">
                <span class="material-symbols-outlined">
                    thumb_down
                </span>
            </button>
        </div>

    </div>
</div> `;
}
