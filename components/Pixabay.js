import React from 'react';

const api_key = "40710938-4f24488a87c2de7f823c65b97";

export default function GetPictures(keyword) {

const url = 'https://pixabay.com/api/?key=' +api_key+'&q='+keyword+'&image_type=photo&pretty=true'

return fetch(url)
.then((response) => response.json())
.catch((error) => console.error(error))
}