export const cardItem = {
  template: `
    <div class="card">
        <div class="price"></div>
        <div class="icons">
            <div class="icon-like">
                <font-awesome-icon :icon="['far', 'heart']" />
            </div>
            <div class="icon-shop">
                <font-awesome-icon :icon="['fas', 'cart-shopping']" />
            </div>
        </div>
    </div>
    `,
};
