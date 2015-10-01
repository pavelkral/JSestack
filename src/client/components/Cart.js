import React from 'react/addons';
import _ from 'lodash-node';

var products = [
  { "id": 1, "productName": "Banana", "price" : 0.99 },
  { "id": 2, "productName": "Apple", "price": 1.25 },
  { "id": 3, "productName": "Ribeye", "price": 6.99 },
  { "id": 4, "productName": "Pork Chop", "price": 5.25 }
];


import {EventEmitter} from 'events';

var eventer = new EventEmitter();

function calculateCartItemTotal(price, quantity) {
  return price * quantity;
}




class Product extends React.Component {
  constructor(props) {
    super(props);
   
  }
 addToCart() {
    eventer.emit("CartItemAdded", null, this.props.product.id);
  }
  render() {
    return (
      <div>
        <div>
          <strong>{ this.props.product.productName }</strong>: { "$" + this.props.product.price }
        </div>
         <div>
           <button className="small" onClick={this.addToCart.bind(this)}>Add to cart</button>
         </div>
      </div>  
    );
  }
}


class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {products: products};
 //   console.log(products);
   
  }
  render() {
     var products = this.state.products.map(function renderProduct(p) {
      return <Product key={p.id} product={p} />;
    });

    return (
      <div>
        <h3>Products</h3>
        { products }
      </div>
    );
  }
}


//...........................................................................................



class CartItem  extends React.Component { 
  constructor(props) {
    super(props);
   
  }
  render(){
    return (
          <div>
            <strong>{ this.props.itemName }</strong> x{ this.props.quantity } { String.fromCharCode(8212) } { calculateCartItemTotal(this.props.price, this.props.quantity).toFixed(2) }
          </div>
        );
  }
}


class Cart extends React.Component{
  constructor(props) {
      super(props);
      this.state = {cartItems:[]};  
      eventer.on("CartItemAdded", function productAddedToCart(e, productId) {
        this.updateCart(productId);
      }.bind(this));
  } 
  updateCart(productId) {
        var product = _.find(products, function(p) {
          return p.id == productId;
        });	

        var cartItems = this.state.cartItems;

        var cartItemQuantity = _.where(cartItems, { 'productId': productId }).length;

        if(cartItemQuantity == 0) {
          cartItems.push({
            productId: product.id,
            name: product.productName,
            price: product.price,
            quantity: 1
          });
        } else {
          var existingCartItem =_.find(cartItems, function findCartItem(cartItem) {
            return cartItem.productId == productId;
          });
          existingCartItem.quantity += 1;
        }

        this.setState({cartItems: cartItems});
  } 
  calculateTotal() {
        function addLineItemTotal(total, lineItem) {
          return total += calculateCartItemTotal(lineItem.price, lineItem.quantity);
        }
        return _.reduce(this.state.cartItems, addLineItemTotal, 0);
  } 
  render() {
        var cartItems = this.state.cartItems.map(function renderCartItem(cartItem) {
          return <CartItem key={cartItem.name} itemName={cartItem.name} quantity={cartItem.quantity} price={cartItem.price} />
        });
        return (
          <div>
            <h3>Shopping Cart</h3>
            { cartItems.length == 0 ? "Your cart is empty" : cartItems }
            <hr />
            <div className="right"><strong>Total:</strong> { "$" + this.calculateTotal().toFixed(2) }</div>
            <div><ProductList/></div>
          </div>
        );
  }
}

//Counter.propTypes = { initialCount: React.PropTypes.number };
//Counter.defaultProps = { initialCount: 0 };



// Prop types validation


export default Cart;