new Vue({
    el:"#app",
    data:{
        currentIndex:0,
        img: [
            {
                foto:'img/dalì.jpeg',
                artista:'Dalì',
            },
            {
                foto:'img/picasso.jpeg',
                artista:'Picasso',
            },
            {
                foto:'img/Vincent_van_Gogh_-_Starry_Night_-_Google_Art_Project.jpeg',
                artista:'Van Gogh',
            },
            {
                foto:'img/primavera.jpeg',
                artista:'Botticelli',
            },    
        ]
    },

    methods: {
        fotoSuccessiva: function () {
            this.currentIndex++;
        },
        
        fotoPrecedente: function () {
            this.currentIndex--;
        },
    }
})
