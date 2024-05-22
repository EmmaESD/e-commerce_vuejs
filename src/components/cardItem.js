export const cardItem = {
  props: {
    image_url: String,
    price: Number,
    name: String,
    like: Boolean,
    number: Number,
    id: Number,
    addshop: Function,
    like: Boolean,
    likeCard: Function,
  },
  template: `
    <div class="card-container">
            <h2 class="price">{{price}}</h2>
            <img :src="image_url" alt="" />
        <div class="card-bottom">
            <div class="btn-like btn like" v-on:click="$emit('likecard', id)">
            <i :class="{'fa-regular fa-heart': !like, 'fa-solid fa-heart': like}"></i>
            </div>
            <div class="btn-shop btn" v-on:click="$emit('addshop', id)">
                <i class="fa-solid fa-cart-shopping" style="color: #ffffff"></i>
            </div>
        </div>
    </div>
    `,
};
