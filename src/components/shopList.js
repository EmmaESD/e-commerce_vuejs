export const cardShop = {
  props: {
    image_url: String,
    price: Number,
    name: String,
    like: Boolean,
    number: Number,
    id: Number,
    remove: Function,
    name: String,
  },
  template: `
    <div class="card-shop">
          <img :src="image_url" alt="" />
          <div class="title-price-container">
            <h1>{{name}}</h1>
            <h2 class="price">{{price}}€</h2>
          </div>
      <div class="card-bottom">
          <div class="remove">
            <button @click="$emit('remove', id)"><i class="fa-solid fa-trash"></i></button>
          </div>
      </div>  
    </div>
  `,
};
