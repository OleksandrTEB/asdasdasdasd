const body = document.querySelector('body')
const main = document.createElement('main')
body.appendChild(main)

const cards_container = document.createElement('div')
cards_container.classList.add('cards-container')
main.appendChild(cards_container)

const films = [
    {
        title: "Zielona mila",
        originalTitle: "The Green Mile",
        year: 1999,
        genre: "Dramat",
        rating: 8.6,
        image: "https://fwcdn.pl/fpo/08/62/862/7517878_1.10.webp",
    },
    {
        title: "Incepcja",
        originalTitle: "Inception",
        year: 2010,
        genre: "Sci-Fi",
        rating: 8.2,
        image: "https://fwcdn.pl/fpo/08/91/500891/7354571_1.10.webp",
    },
    {
        title: "Zielona mila",
        originalTitle: "The Green Mile",
        year: 1999,
        genre: "Dramat",
        rating: 8.6,
        image: "https://fwcdn.pl/fpo/08/62/862/7517878_1.10.webp",
    },
    {
        title: "Incepcja",
        originalTitle: "Inception",
        year: 2010,
        genre: "Sci-Fi",
        rating: 8.2,
        image: "https://fwcdn.pl/fpo/08/91/500891/7354571_1.10.webp",
    },
    {
        title: "Zielona mila",
        originalTitle: "The Green Mile",
        year: 1999,
        genre: "Dramat",
        rating: 8.6,
        image: "https://fwcdn.pl/fpo/08/62/862/7517878_1.10.webp",
    },
    {
        title: "Incepcja",
        originalTitle: "Inception",
        year: 2010,
        genre: "Sci-Fi",
        rating: 8.2,
        image: "https://fwcdn.pl/fpo/08/91/500891/7354571_1.10.webp",
    },
    {
        title: "Zielona mila",
        originalTitle: "The Green Mile",
        year: 1999,
        genre: "Dramat",
        rating: 8.6,
        image: "https://fwcdn.pl/fpo/08/62/862/7517878_1.10.webp",
    },
    {
        title: "Incepcja",
        originalTitle: "Inception",
        year: 2010,
        genre: "Sci-Fi",
        rating: 8.2,
        image: "https://fwcdn.pl/fpo/08/91/500891/7354571_1.10.webp",
    },
    {
        title: "Zielona mila",
        originalTitle: "The Green Mile",
        year: 1999,
        genre: "Dramat",
        rating: 8.6,
        image: "https://fwcdn.pl/fpo/08/62/862/7517878_1.10.webp",
    },
    {
        title: "Incepcja",
        originalTitle: "Inception",
        year: 2010,
        genre: "Sci-Fi",
        rating: 8.2,
        image: "https://fwcdn.pl/fpo/08/91/500891/7354571_1.10.webp",
    },
    {
        title: "Zielona mila",
        originalTitle: "The Green Mile",
        year: 1999,
        genre: "Dramat",
        rating: 8.6,
        image: "https://fwcdn.pl/fpo/08/62/862/7517878_1.10.webp",
    },
    {
        title: "Incepcja",
        originalTitle: "Inception",
        year: 2010,
        genre: "Sci-Fi",
        rating: 8.2,
        image: "https://fwcdn.pl/fpo/08/91/500891/7354571_1.10.webp",
    }
];

function createCard(film) {
    const card = document.createElement('div')
    card.classList.add('card', 'yes')
    cards_container.appendChild(card)

    const content = document.createElement('div')
    content.classList.add('content')
    card.appendChild(content)

    const img = document.createElement('img')
    img.src = film.image
    img.alt = film.originalTitle
    content.appendChild(img)

    const desc = document.createElement('div')
    desc.classList.add('desc')
    content.appendChild(desc)

    const title = document.createElement('div')
    title.classList.add('title')
    desc.appendChild(title)

    const h2 = document.createElement('h2')
    h2.textContent = film.title
    title.appendChild(h2)
    const h3 = document.createElement('h3')
    h3.textContent = film.title
    title.appendChild(h3)

    const user_data = document.createElement('div')
    user_data.classList.add('user-data')
    desc.appendChild(user_data)

    const div = document.createElement('div')
    user_data.appendChild(div)

    const label = document.createElement('label')
    label.classList.add('no')
    label.for = 'watched'
    div.appendChild(label)

    const input = document.createElement('input')
    input.type = 'checkbox'
    input.name = 'watched'
    input.id = 'watched'
    input.textContent = 'Oznacz jako obejrzany'
    label.appendChild(input)

    const ocena_span = document.createElement('span')
    ocena_span.textContent = `⭐ ${film.rating}`
    div.appendChild(ocena_span)


    const footer = document.createElement('div')
    footer.classList.add('footer-desc')
    desc.appendChild(footer)

    const genre_span = document.createElement('span')
    genre_span.textContent = film.genre
    footer.appendChild(genre_span)

    const year_span = document.createElement('span')
    year_span.textContent = film.year
    footer.appendChild(year_span)

    const rating_span = document.createElement('span')
    rating_span.textContent = film.rating
    footer.appendChild(rating_span)
}

films.forEach(film => {
    createCard(film)
})

// <main>
//   <div class="cards-container">

//     <div class="card yes">
//       <div class="content">
//         <img
//           src="https://fwcdn.pl/fpo/08/62/862/7517878_1.10.webp"
//           alt="Zielona mila"
//         />
//         <div class="desc">
//           <div class="title">
//             <h2>Zielona mila</h2>
//             <h3>The Green Mile</h3>
//           </div>
//           <div class="user-data">
//             <div>
//               <label class="no" for="watched"
//                 ><input type="checkbox" name="watched" id="watched" />Oznacz
//                 jako obejrzany</label
//               >
//               <span>⭐ 6</span>
//             </div>
//           </div>
//           <div class="footer-desc">
//             <span>Dramat</span>
//             <span>1999</span>
//             <span>⭐ 8,6</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </main>