import { IProductItem } from "../components/product/ProductItem";

export interface AppState {
    pages: {
        cart: IProductItem[],
        wishlist: IProductItem[],
        category: {},
        home: {},
        product: {},
        checkout: {},
        checkoutPayment: {},
        myOrders: {},
        orderDetails: {},
        personalInformation: {}
    }

}

export let STATE: AppState = {
    pages: {
        cart: [],
        wishlist: [],
        category: {},
        home: {},
        product: {},
        checkout: {},
        checkoutPayment: {},
        myOrders: {},
        orderDetails: {},
        personalInformation: {}
    }
};

export function clearAppState() {
    STATE = {
        pages: {
            cart: [],
            wishlist: [],
            category: {},
            home: {},
            product: {},
            checkout: {},
            checkoutPayment: {},
            myOrders: {},
            orderDetails: {},
            personalInformation: {}
        }
    };
}

export function addToCart(product: IProductItem) {
    const existingProduct = STATE.pages.cart.filter(item => item.id === product.id)[0];
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        STATE.pages.cart.push(product);
    }
}

export function removeFromCart(productId: string) {
    STATE.pages.cart = STATE.pages.cart.filter(item => item.id !== productId);
}