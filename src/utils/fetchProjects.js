
const fetchData = () => {
    fetch('https://api.github.com')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            return data;
        })
        .catch(error => console.error(error));
}

module.exports = fetchData;
