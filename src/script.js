import { cardItem } from "./components/cardItem.js";
import { shopList } from "./components/shopList.js";

const vm = Vue.createApp({
  components: {
    "card-item": cardItem,
    "shop-list": shopList,
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
    addshop(id) {
      console.log("add to card", id);
      const cardShop = this.postList.find((cardItem) => cardItem.id === id);
      if (cardShop) {
        this.shopList.push(cardItem);
      } else {
      }

      console.log("shop list:", this.shopList);
      // find item into postList where id aqual id

      // cardShop[index];
      // this.shopList.push(cardItem);
    },
  },

  created() {
    this.showData();
  },
}).mount("#app");
