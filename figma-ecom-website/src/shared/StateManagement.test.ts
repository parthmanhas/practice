import { describe, expect, test } from '@jest/globals';
import { STATE, addToCart, clearAppState, removeFromCart, addToWishlist, removeFromWishlist } from './StateManagement';
import { IProductItem } from './../components/product/ProductItem';

describe('state management testing', () => {

    const product: IProductItem = {
        id: '1',
        name: 'Product A',
        description: 'Description of Product A',
        price: 212,
        quantity: 1
    }

    beforeEach(() => {
        clearAppState();
    });

    test('adds product to cart', () => {
        addToCart(product);
        expect(STATE.pages.cart).toContain(product);
    });

    test('if product is already added, increase its quantity by one', () => {
        addToCart(product);
        addToCart(product);
        expect(STATE.pages.cart[0].quantity).toBe(2);
        expect(STATE.pages.cart.length).toBe(1);
    });

    test('remove product from cart', () => {
        addToCart(product);
        removeFromCart(product.id);
        expect(STATE.pages.cart.length).toBe(0);
    });

    test('adds product to wishlist', () => {
        addToWishlist(product);
        expect(STATE.pages.wishlist).toContain(product);
    });

    test('if product is already added in wishlist, do not add', () => {
        addToWishlist(product);
        addToWishlist(product);
        expect(STATE.pages.wishlist.length).toBe(1);
    });

    test('remove product from wishlist', () => {
        addToWishlist(product);
        removeFromWishlist(product.id);
        expect(STATE.pages.wishlist.length).toBe(0);
    });
});