

// Fetch isteklerini JSON'a döndür
export function fetchJSON(url){
    return fetch(url).then(response=>response.json());
}

// Include dizge içerisinde kelime arama
export function includes(searchFirst, searchSecond){
    return searchFirst.roLowerCase().includes(searchSecond.toLowerCase)
}


// Kelimenin baş harfini büyük yazma
export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}