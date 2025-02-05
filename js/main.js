// Lovely One ISBN 9780593729908

document.getElementById('find').addEventListener('click', getCover)

function getCover() {
    const art = document.querySelector('input').value
    const url= `https://covers.openlibrary.org/b/isbn/${art}-M.jpg`

    fetch(url)
        document.querySelector('img').src = url
}