export const cardItem = {
  props: {
    id: Number,
    image_url: String,
    price: Number,
  },
  template: `
        <div class="card-container" :key="id">
            <div class="card-image-price">
                <div class="price">
                    <h2>{{price}}</h2>
                </div>
                <img :src="image_url" alt="" />
            </div>
            <div class="card-bottom">
                <div class="like-container">
                    <i class="fa-regular fa-heart" style="color: #ffffff"></i>
                </div>
                <div class="shop-container">
                    <i class="fa-solid fa-cart-shopping" style="color: #ffffff"></i>
                </div>
            </div>
        </div>
    `,
};
