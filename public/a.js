console.log('a.js')

const getToken = () => {
    const cookies = document.cookie.split(';')

    for (let cookie of cookies) {
        const [key, value] = cookie.split('=')
        if (key.trim() === 'JWT') return value
    }
}

const config = { method: 'PUT', headers: { Authorization: getToken() } }

// fetch('http://localhost:8080/api/productos', config)
//     .then(res => res.json())
//     .then(data => console.log(data))





fetch('http://localhost:8080/api/login', config)
    .then(res => res.json())
    .then(data => console.log({ data }))

// fetch('http://localhost:8080/api/usocookies', config)
//     // .then(res => res.json())
//     .then(data => console.log({ data }))

// console.log({ 'document-cookie': document.cookie })
// console.log(getToken())