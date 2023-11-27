let button = document.getElementById('btn');
let url = 'https://jsonplaceholder.typicode.com/users/';

button.addEventListener("click", function () {
    fetch(url)
        .then(response => response.json())
        .then(function (data) {
            let placeholder = document.querySelector('#data-output');
            let out = "";
            for (let d of data) {
                out += `
                <tr>
                    <td>${d.id}</td>
                    <td>${d.name}</td>
                    <td>${d.username}</td>
                </tr>
                `;
            }
            placeholder.innerHTML = out;
        });
});
