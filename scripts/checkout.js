import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { renderOrderSummary } from './checkout/orderSummary.js';
import { loadProducts,loadProductsFetch } from '../data/products.js';
// import '../data/cart-class.js';
// import '../data/backend-practice.js';

async function loadPage() {
  await loadProductsFetch();
  renderOrderSummary();
  renderPaymentSummary();
}
loadPage()

/*
Promise.all([
  loadProductsFetch()
]
).then((values) => {
  console.log(values);
  renderOrderSummary();
  renderPaymentSummary();
})
*/ 

/*
loadProducts(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/
 