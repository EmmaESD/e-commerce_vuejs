import { cardItem } from "./components/cardItem.js";
import { cardShop } from "./components/shopList.js";

const vm = Vue.createApp({
  components: {
    "card-item": cardItem,
    "card-shop": cardShop,
  },

  data() {
    return {
      postList: [],
      shopList: [],
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
    likecard(id) {
      this.postList[id].like = !this.postList[id].like;
    },
    addshop(id) {
      this.postList[id].number++;
      if (this.postList[id].number < 2) {
        this.shopList.push(this.postList[id]);
      }
    },
    remove(id) {
      const itemToRemove = this.shopList.find((item) => item.id === id);
      const index = this.shopList.indexOf(itemToRemove);
      if (index !== -1) {
        this.shopList.splice(index, 1);
      }
    },
  },

  computed: {
    total() {
      let totalAmount = 0;
      for (let i = 0; i < this.shopList.length; i++) {
        totalAmount += this.shopList[i].number * this.shopList[i].price;
      }
      return totalAmount;
    },
  },

  created() {
    this.showData();
  },
}).mount("#app");
