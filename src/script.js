import { cardItem } from "./components/cardItem.js";

const vm = Vue.createApp({
  components: {
    "card-item": cardItem,
  },

  data() {
    return {
      postList: [],
    };
  },

  methods: {
    showData() {
      fetch("products.json")
        .then((response) => response.json())
        .then((data) => {
          this.postList = data;
        });
    },
  },

  created() {
    this.showData();
  },
}).mount("#app");
