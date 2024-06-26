
const cardData = [
    {
        imgSrc: 'assets/img/query.png',
        description: 'Selecciona todos los usuarios cuyo nombre contiene la letra ‘a’',
    },
    {
        imgSrc: 'assets/img/query2.png',
        description: 'Selecciona todos los usuarios cuyo apellido empieza con ‘S’.',
    },
    {
        imgSrc: 'assets/img/query3.png',
        description: 'Selecciona todos los usuarios cuyo correo electrónico personal termina en gmail.com.',
    },
    {
        imgSrc: 'assets/img/query4.png',
        description: 'Selecciona los nombres y correos electrónicos de todos los usuarios ordenados alfabéticamente por nombre',
    },
    {
        imgSrc: 'assets/img/query5(1).png',
        description: 'Selecciona los usuarios ordenados por su edad de forma descendente.',
    },
    {
        imgSrc: 'assets/img/query6.png',
        description: 'Selecciona los primeros 10 usuarios ordenados por su fecha de creación.',
    },
    {
        imgSrc: 'assets/img/query7.png',
        description: 'Selecciona los últimos 5 usuarios ordenados por su fecha de actualización.',
    },
    {
        imgSrc: 'assets/img/query8.png',
        description: 'Selecciona los usuarios que tienen entre 2 y 4 hijos.',
    },
    {
        imgSrc: 'assets/img/landscape-1.png',
        description: 'Selecciona los usuarios cuyo país no es ‘USA’.',
    },
    {
        imgSrc: 'assets/img/query9.png',
        description: 'Selecciona los usuarios cuyo patrimonio es mayor que 100000',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Selecciona los usuarios con el género ‘female’ y estado ‘active’',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Selecciona los usuarios con correos electrónicos personales que contienen ‘work’.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Selecciona los usuarios cuya ciudad empieza con ‘M’.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Selecciona el usuario más viejo.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Selecciona el usuario con el patrimonio más alto.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Selecciona el usuario con el patrimonio más bajo.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Selecciona el usuario con más hijos.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Selecciona el usuario con menos hijos.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Selecciona el número total de usuarios.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Selecciona el número total de usuarios activos',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Selecciona el número total de usuarios inactivos',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Selecciona el promedio de edad de todos los usuarios.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Selecciona el promedio de patrimonio de todos los usuarios.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Selecciona el total de activos de todos los usuarios.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Selecciona el total de pasivos de todos los usuarios.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Selecciona los usuarios agrupados por país y cuenta cuántos usuarios hay en cada país.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Selecciona los usuarios agrupados por ciudad y cuenta cuántos usuarios hay en cada ciudad.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Selecciona el número total de usuarios cuya música favorita es ‘Rock’.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Selecciona el número total de usuarios cuyo género es ‘male’ y están activos.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Selecciona los usuarios ordenados por su número de hijos en forma ascendente.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Selecciona los usuarios ordenados por su patrimonio en forma descendente.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Selecciona los usuarios cuyo nombre o apellido contiene la letra ‘e’.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Selecciona el usuario cuyo nombre es ‘Alice’ y su género es ‘female’.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Selecciona los usuarios que tienen más de 2 hijos y menos de 5.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Selecciona los usuarios cuyo correo electrónico personal no contiene ‘gmail.com’.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Selecciona los usuarios cuyo número de teléfono empieza con ‘555’.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Selecciona los usuarios que fueron creados en el último mes.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Selecciona los usuarios cuya edad es múltiplo de 5.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Selecciona los usuarios agrupados por estado y calcula el promedio de patrimonio en cada grupo.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Incrementa la edad de todos los usuarios cuyo país es ‘Canada’ y tienen más de 2 hijos en 2 años.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Cambia el estado a ‘inactive’ para todos los usuarios cuyo correo personal no contiene ‘work’ y son mayores de 50 años.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Duplica los activos para todos los usuarios cuyo patrimonio es menor que 50000.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Cambia la ciudad a ‘Unknown’ para todos los usuarios que no tienen hijos y están inactivos.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Actualiza el género a ‘female’ para todos los usuarios cuyo nombre contiene la letra ‘a’ y tienen más de 3 hijos.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Incrementa los pasivos en un 20% para todos los usuarios que tienen activos mayores que 100000.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Cambia el correo personal a ‘unknown@example.com’ para todos los usuarios cuyo dominio de correo es ‘hotmail.com’.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Reduce en 5 años la edad de todos los usuarios cuyo estado es ‘active’ y viven en ‘New York’.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Actualiza el patrimonio a 100000 para todos los usuarios cuyo número de hijos es par.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Cambia la música favorita a ‘Jazz’ para todos los usuarios que tienen más de 2 hijos y están activos.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Incrementa el número de hijos en 1 para todos los usuarios cuyo género es ‘male’ y tienen pasivos menores que 50000.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Cambia el estado a ‘active’ para todos los usuarios que tienen un correo electrónico que contiene ‘example’.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Actualiza la ciudad a ‘New City’ para todos los usuarios cuyo patrimonio es mayor que 200000 y tienen menos de 3 hijos.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Cambia el nombre a ‘John Doe’ para todos los usuarios que no tienen nombre.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Selecciona los usuarios cuyo nombre no es ‘John’ y patrimonio es mayor que 100000.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Selecciona los usuarios cuyo apellido es ‘Smith’ y ciudad es ‘Los Angeles’.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Selecciona los usuarios cuyo correo electrónico personal contiene ‘@’ y su patrimonio es menor que 100000.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Selecciona los usuarios cuyo nombre o apellido empieza con ‘J’.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Selecciona los usuarios cuyo correo electrónico personal no termina en ‘.com’.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Selecciona los usuarios cuyo número de hijos es mayor que su edad.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Selecciona los usuarios cuyo país es ‘Mexico’ y tienen más de 2 hijos.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Selecciona los usuarios que viven en ‘Canada’ y su ciudad no empieza con ‘M’.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Selecciona los usuarios cuyo patrimonio es mayor que 100000 y su música favorita es ‘Pop’.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Selecciona los usuarios cuyo número de teléfono no empieza con ‘555’ y tienen al menos un hijo.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Selecciona los usuarios cuyo correo electrónico personal contiene ‘example’ y su música favorita no es ‘Rock’.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Selecciona los usuarios cuya edad es mayor o igual a 50 y tienen menos de 3 hijos.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Selecciona los usuarios cuyo estado es ‘inactive’ y tienen un patrimonio menor que 50000.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Selecciona los usuarios cuyo nombre es ‘Alice’ o su patrimonio es mayor que 200000.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Selecciona los usuarios cuyo género es ‘female’ y su música favorita es ‘Rock’.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Selecciona los usuarios cuya ciudad contiene la letra ‘o’ y su patrimonio es menor que 100000.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Selecciona los usuarios cuyo número de hijos es menor que su edad y su correo electrónico personal no contiene ‘@’.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Selecciona los usuarios cuyo nombre es ‘John’ y su correo electrónico personal contiene ‘@’.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Selecciona los usuarios cuyo correo electrónico personal contiene ‘work’ y su música favorita no es ‘Jazz’.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Selecciona los usuarios cuyo número de teléfono no contiene ‘555’ y su estado es ‘active’.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Selecciona los usuarios cuyo patrimonio es menor que 50000 y su ciudad no es ‘New York’.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Selecciona los usuarios cuyo número total de activos y pasivos es mayor que 50000.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Selecciona los usuarios cuyo nombre no contiene ‘John’ y su música favorita no es ‘Pop’.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Selecciona los usuarios cuyo correo electrónico personal termina en ‘.com’ y su música favorita es ‘Rock’.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Selecciona los usuarios cuyo género es ‘male’ y su música favorita no es ‘Jazz’.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Selecciona los usuarios cuyo número de teléfono empieza con ‘555’ y su música favorita es ‘Jazz’.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Selecciona los usuarios cuyo estado es ‘active’ y su correo electrónico personal no contiene ‘work’.',
    },
    {
        imgSrc: 'assets/img/',
        description: 'Selecciona los usuarios cuyo número de hijos es igual a su edad y su patrimonio es mayor que 100000.',
    },
];

     // Get the card container element
const cardContainer = document.getElementById('cardContainer');

// Function to create a card element
const createCard = (data) => {
    const article = document.createElement('article');
    article.classList.add('card__article');

    const img = document.createElement('img');
    img.src = data.imgSrc;
    img.alt = 'image';
    img.classList.add('card__img');

    const cardDataDiv = document.createElement('div');
    cardDataDiv.classList.add('card__data');

    const title = document.createElement('h2');
    title.classList.add('card__title');
    title.textContent = data.title;

    const description = document.createElement('p');
    description.classList.add('card__description');
    description.textContent = data.description;

    cardDataDiv.appendChild(title);
    cardDataDiv.appendChild(description);

    article.appendChild(img);
    article.appendChild(cardDataDiv);

    return article;
};

// Assign titles to cardData objects
for (let i = 0; i < cardData.length; i++) {
    cardData[i].title = `Query ${i + 1}`;
}

// Generate 70 cards
for (let i = 0; i < 70; i++) {
    const index = i % cardData.length; // Cycle through cardData
    const card = createCard(cardData[index]);
    cardContainer.appendChild(card);
}