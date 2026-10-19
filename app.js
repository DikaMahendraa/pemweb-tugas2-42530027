const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Set EJS sebagai template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware untuk file statis (CSS)
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Data Dummy Film 
const films = [
    { 
        id: 1, 
        title: 'Spider-Man: No Way Home', 
        genre: 'Action', 
        director: 'Jon Watts', 
        year: 2021, 
        synopsis: 'Identitas Peter Parker terungkap, memaksanya meminta bantuan Doctor Strange hingga membuka portal multiverse.',
        poster: '/images/spiderman.jpg',
        trailer: 'https://www.youtube.com/watch?v=JfVOs4VSpmA'
    },
   { 
        id: 2, 
        title: 'Spirited Away', 
        genre: 'Sci-Fi', 
        director: 'Hayao Miyazaki', 
        year: 2001, 
        synopsis: 'Seorang anak perempuan bernama Chihiro masuk ke dunia roh misterius setelah orang tuanya diubah menjadi babi oleh penyihir.',
        poster: '/images/ghibli.jpg',
        trailer: 'https://www.youtube.com/watch?v=ByXuk9QqQkk'
    },
    { 
        id: 3, 
        title: 'John Wick: Chapter 4', 
        genre: 'Action', 
        director: 'Chad Stahelski', 
        year: 2023, 
        synopsis: 'John Wick menemukan jalan untuk mengalahkan The High Table, namun harus menghadapi musuh baru.',
        poster: '/images/jhonwick.jpg',
        trailer: 'https://www.youtube.com/watch?v=yjRHZEUamCc'
    },
    { 
        id: 4, 
        title: 'Oppenheimer', 
        genre: 'Sci-Fi', 
        director: 'Christopher Nolan', 
        year: 2023, 
        synopsis: 'Kisah fisikawan J. Robert Oppenheimer dan perannya dalam pengembangan bom atom.',
        poster: '/images/oppenheimer.jpg',
        trailer: 'https://www.youtube.com/watch?v=uYPbbksJxIg'
    }
];

// Rute Halaman Katalog 
app.get('/', (req, res) => {
    const selectedGenre = req.query.genre;
    let filteredFilms = films;

    if (selectedGenre) {
        filteredFilms = films.filter(f => f.genre.toLowerCase() === selectedGenre.toLowerCase());
    }

    res.render('index', { films: filteredFilms, selectedGenre });
});

// Rute Halaman Detail Film
app.get('/item/:id', (req, res) => {
    const filmId = parseInt(req.params.id);
    const film = films.find(f => f.id === filmId);

    if (!film) {
        return res.status(404).render('detail', { film: null });
    }

    res.render('detail', { film });
});
// Rute menampilkan form tambah film
app.get('/tambah', (req, res) => {
    res.render('tambah');
});

// Rute memproses data form
app.post('/tambah', (req, res) => {
    const { title, genre, director, year, synopsis, poster, trailer } = req.body;
    const newFilm = {
        id: films.length + 1,
        title,
        genre,
        director: director || 'N/A',
        year: parseInt(year) || new Date().getFullYear(),
        synopsis: synopsis || '',
        poster: poster || '/images/default.jpg',
        trailer: trailer || ''
    };
    films.push(newFilm);
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});