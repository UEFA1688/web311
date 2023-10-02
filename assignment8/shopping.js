window.onload = pageLoad;

function pageLoad(){
    fetchData();
}

async function fetchData() {
    try {
        let response = await fetch('cloth.json');
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        let data = await response.json();
        showData(data);
    } catch (error) {
        console.error(error);
    }
}

function showData(data) {
    var layer = document.getElementById("layer");

    for (var item in data) {
        if (data.hasOwnProperty(item)) {
            var div = document.createElement('div');
            div.className = 'layer';
            div.innerHTML = `
                <img src="${data[item].pic}" alt="${data[item].brandname}">
                <h2>${data[item].brandname}</h2>
                <p>Price: $${data[item].price}</p>
            `;
            layer.appendChild(div);
        }
    }
}
