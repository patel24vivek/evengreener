import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
         <div className="footer-section logo-section">
          <img
            src="https://cdn.shopify.com/s/files/1/0609/1934/9479/files/icon-logo-footer.svg?v=1645615847"
            alt="Even Greener Logo"
            className="footer-logo"
          />
        </div>
      <div className="footer-container">
        <div className="footer-section">
          <h4>SHOP</h4>
          <ul>
            <li>Bestsellers</li>
            <li>Composters</li>
            <li>Water Butts</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>GOOD TO KNOW</h4>
          <ul>
            <li>About Us</li>
            <li>Bulk Enquiries</li>
            <li>Customer Reviews</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>CONNECT</h4>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>YouTube</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>ACCOUNT</h4>
          <ul>
            <li>Manage Account</li>
            <li>Orders & Returns</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>POLICIES</h4>
          <ul>
            <li>T&Cs</li>
            <li>Cookie Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>SUPPORT</h4>
          <ul>
            <li>Contact Us</li>
            <li>Help Centre</li>
            <li>Delivery & Returns</li>
            <li>Blogs & Guides</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>GET IN TOUCH</h4>
          <p><strong>Email</strong></p>
          <p>customer.care@evengreener.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 EvenGreener. All Rights Reserved.</p>
        <div className="payment-icons">
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/Amex_logo.svg" alt="Amex" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple Pay" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Google_Pay_Logo.svg" alt="Google Pay" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Klarna_Payment_Logo.svg" alt="Klarna" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="Mastercard" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="Paypal" />
          <img src="https://cdn.shopify.com/s/assets/logos/shopify-bag.png" alt="Shopify" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
