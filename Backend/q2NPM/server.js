const axios = require('axios');


async function getProduct(id) {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    console.log(res.data);
}

getProduct(1);