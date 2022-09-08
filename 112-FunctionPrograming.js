/**
 * @description functional programming
 * #1 Pure functions
 * #2 no side effects
 * #3 same input -> same output
 *
 */

//#1 Amazon shopping
const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: [],
};
//# Implement a cart featrue:
// 1. Add items to cart.
// 2. Add  3% tax to item in cart
// 3. Buy item: cart --> purchases
// 4. Empty cart

// #Bonus:
// accept refunds.
// Track user history

/**
 * @description Solution
 */

const compose =
    (f, g) =>
    (...args) =>
        f(g(...args));

purchaseItem(emptyCart, buyItem, applyTaxToItems, addItemToCart)(user, { name: 'laptop', price: 200 });

function purchaseItem(...fns) {
    return fns.reduce(compose);
}

function addItemToCart(user, item) {
    const updateCart = user.cart.concat(item);
    return Object.assign({}, user, { cart: updatedCart });
}

function applyTaxToItems(user) {
    const { cart } = user;
    const taxRate = 1.3;
    const updatedCart = cart.map((item) => {
        return {
            name: item.name,
            price: item.price * taxRate,
        };
    });

    return Object.assign({}, user, { cart: updateCart });
}
function buyItem(user) {
    return Object.assign({}, user, { purchases: user.cart });
}
function emptyCart(user) {
    return Object.assign({}, user, { cart: [] });
}
