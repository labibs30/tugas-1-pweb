const app = Vue.createApp({
  data() {
    return {
      books: [
        { title: "Pemrograman Web", author: "Ridho Rahman", isFav: true },
        {
          title: "Sistem Deteksi Intruksi",
          author: "Hatma Surotrisongko",
          isFav: true,
        },
        { title: "Smart City", author: "M Husni", isFav: true },
        { title: "Internet of Things", author: "M Husni", isFav: true },
      ],
    };
  },
  methods: {
    favFunction(i) {
      if (this.books[i].isFav === true) {
        this.books[i].isFav = false;
      } else {
        this.books[i].isFav = true;
      }
    },
  },
  computed: {
    filteredBooks() {
      return this.books;
    },
  },
});
app.mount("#app");
