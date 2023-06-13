console.log('a.js')

fetch('http://localhost:8080/api/productos', { method: 'POST' })
    .then(res => res.json())
    .then(data => console.log(data))