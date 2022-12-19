import productdesktopimage from '../src/images/image-product-desktop.jpg';
import productmobileimage from '../src/images/image-product-mobile.jpg';
import carticon from '../src/images/icon-cart.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="body">
        <div className="product-image">
          <img src={productdesktopimage} alt="Perfume bottle" />
        </div>

        <div className="product-image-mobile">
          <img src={productmobileimage} alt="Perfume bottle" />
        </div>

        <div className="text-content">
          <div className="header">
            <div className="pre-head">PERFUME</div>
            <div className="head">Gabrielle Essence Eau De Parfum</div>
          </div>

          <div className="product-description">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </div>

          <div className="price-tags">
            <div className="discounted-price-tag">$149.99</div>
            <div className="original-price-tag">$169.99</div>
          </div>

          <div className="add-to-cart-button">
            <img src={carticon} alt="cart icon" />
            Add to Cart
          </div>
        </div>
      </div>
      <div className="attribution">
        Challenge by{' '}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="mailto:hello@ashishdeora.in">Ashish Deora</a>.
      </div>
    </div>
  );
}

export default App;
