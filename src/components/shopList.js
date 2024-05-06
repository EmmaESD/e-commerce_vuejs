export const shopList = {
  template: `
    <div class="card-container" v-bind:key="index">
        <h2 class="price">{{price}}</h2>
        <img :src="image_url" alt="" />
    <div class="card-bottom">
        <div class="btn-like btn">
            <i class="fa-regular fa-heart" style="color: #ffffff"></i>
        </div>
        <div class="btn-shop btn" v-on:click="$emit('addshop', 3)">
            <i class="fa-solid fa-cart-shopping" style="color: #ffffff"></i>
        </div>
    </div>
    </div>
  `,
};
