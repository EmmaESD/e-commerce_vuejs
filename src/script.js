const { createApp, ref } = Vue;
import { cardItem } from "./components/cardItem";

const vm = createApp({
  components: {
    "card-item": cardItem,
  },

  data() {
    return {
      postList: [],
    };
  },

  mounted() {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        this.postList = data;
      });
  },
}).mount("#app");
