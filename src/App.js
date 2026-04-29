
import './App.css';
import icon from './Group-logo-icon.svg';
import  text from './Group-logo-text.svg';
import women from './women-sat.jpg';
import searching from './animated-character-searching.svg';
import animation from './website-animation.svg';
// import React from 'react';
import allian from './allianceaccountants-min-1.jpg';
import baker from './bakerbritt-website-1-min.jpg';
import infinite from './infinitas-webpage.jpg';
// import rodger from './rodgersweir-min.jpg';
import  wbda from './wbdaccountants-min.jpg';
import React, { useState } from 'react';
// import ReactRouterDOM from "react-router-dom";
// import './MenuBar.css';
// import './menubar.jsx';
// import './Hamburger.jsx';
// import './HamburgerMenu.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className='App'>
       <div className='header'>
        <div className='Appleft'>
        <img src={icon} className="icon" alt="logo" />
       <img src={text} className="text" alt="logo" />
       </div> 

        <div className='Appright'>
          
        <button className='mobile-menu-toggle' aria-label='Toggle Menu' onClick={toggleMenu}> 
    ☰
  </button>

  <nav className={`menu ${menuOpen ? "open" : ""}`}>
       
         <ul className='menu-items'>
          <li><a href="#train"><button className='btn1'>Train</button></a></li>
          <li><a href="#promote"><button className='btn2'>Promote</button></a></li>
          <li><a href="#support"><button className='btn3'>Support</button></a></li>
          <li><a href="#account">My Account</a></li>
          <li><a href="#more">More</a></li>
          <input type='text' placeholder='search' ></input>
        </ul>
      </nav>

  
        </div> 
</div>


<div className='horizontal-hr'>
     <div className="after-hr">
     <h3>Mercia Group</h3>
     <h3>Promote</h3>
      <h3>Websites for Accountants</h3>
      </div> 
      
 </div>

       
 <div className="green">
    <div className="green-left">
        <h1>Websites for Accountants</h1>

<h3>We specialise in designing and building websites for UK accountancy firms and will work with you to improve your online presence with one of our website designs.</h3>

<h4>With a selection of website designs to choose from depending on your firm's requirements, our websites include a range of features as standard that help you to supercharge your services and practice. With our website package you will benefit from a dedicated team who are with you before, during and post launch, available to answer any questions you may have.</h4>
     </div>

<div className="green-right">
  {
    <img src={women} className="green-women" alt="" />
  }

</div>

</div>


<div className='automatic'> 

 <h5> AUTOMATIC CONTENT UPDATES </h5>
 <h1>Website content you can trust</h1>
 <h2>
Every Mercia website comes with a complete suite of content specific for accountancy firms. Written by our technical experts for accuracy and website performance. </h2>
<h4>
Content is automatically updated on your new site so you can be sure it is up to date and relevant. All without the hassle of updating it yourself.</h4>


 </div>

<div className='divs8'>
  <div className='firstrow'>

  <div className='divss'>
 <h2>Factsheets</h2>
 <h4>
Over 100 factsheets written in a language your clients will understand</h4>
</div>

<div className='divss'>
<h2>Calculators</h2>
<h4>
Interactive calculators to enhance your clients website experience</h4>
</div>

<div className='divss'>
  <h2>Tax Calendar</h2>
  <h4>
List of key tax deadlines and events to keep your clients informed</h4>
</div>

<div className='divss'>
  <h2>Tax Rates </h2>
  <h4>
Easy access to current tax rates and allowances for your clients</h4>
</div>
</div>

<div className='secondrow'>

<div className='divss1'>
  <h2>News & Blogs</h2>
  <h4>
Short news articles published directly to your website every month</h4>

</div>

<div className='divss1'>
  <h2>Budget Report</h2>
  <h4>
  Detailed report of the budget uploaded to your website after the Chancellor’s statement</h4>

</div>
 

<div className='divss1'>
  <h2> Market Data</h2>
  <h4>
  Historical interest rates, exchange rates, FTSE rates and other vital statistics</h4>

</div>


<div className='divss1'>
  <h2> Downloads</h2>
  <h4>
  Easy access to HMRC and Companies House forms for your clients to use</h4>

</div> 
</div>


</div>
 
 <div className='complete'>
  <div className='left'>
   <img src={animation} className="animation" alt="" />
  </div>

  <div className='right'>
  <h3>A COMPLETE PACKAGE</h3>
<h1>Hassle free website to advertise your accounting firm</h1>
<h4>Mercia gives you a complete website to help promote your business on the internet. Everything is managed by the team at Mercia to continuously future-proof your website. So you do not have to worry about maintaining and updating your website.</h4>

 <h4> Fully designed, built, hosted and maintained</h4>
 <h4>Automatically updated with expert news updates</h4>
<h4>Built to be mobile responsive so your website works on any device</h4>
  </div>
 </div> 

 <div className='friendly'>
 <div className="left">
  <h3>SEO Friendly</h3>
<h1>Let new clients find your website easily on Google</h1>
<h4>Your new website will be built for Search Engine Optimisation (SEO). Being built for SEO means your website has more chance of ranking on search engines. Because of this, new clients will be able to find you through search engines such as Goo</h4>
 <h4> Optimised for Five relevant</h4>
 <h4>Get new clients through search en </h4>
 <h4>Ongoing monitoring of Google performance</h4>
  </div>

  <div className='right'>
  <img src={searching} className="searching" alt="" />
  </div>

 </div>


{/* //integrations */}

<div className='integrations'>
<hr/>
<h3>Website Integrations</h3>
<h1>Cloud Accounting & Portal Software</h1>
<h2>Enhance your business offering to your clients by providing them with secure cloud accounting and portal access.</h2>


</div>

<hr/>


{/* portfolio */}

<div className='portfolio'>
 
<h3>PORTFOLIO</h3>
<h1>Explore examples of accountancy websites made by Mercia Group</h1>
</div>



{/* pics */}
<div className='pics'>
<div className='picsleft'>
<img src={baker} className="baker" alt="" />
</div>


<div className='picsrightt'>


  <div className="card2">
    <img src={wbda} alt="Website 1" />
   
  </div>
 
</div> 
</div>


<div className='pricing'>
  <h3>PRICING</h3>
  <h1>Website Solutions</h1>

</div>



<div className="cards-container">
      <div className="card green-card">
        <div className="tag">MOST POPULAR</div>
        <h1>Fully Managed Website</h1>
        <p>
          We fully manage your site to ensure that it's always up to date.
        </p>
        <p>
          Designed for accountancy firms who need a website but do not have the
          time or resources to manage one. We do everything you need for a
          successful website, including design, content, SEO, and much more.
        </p>
        <h3>Package Includes:</h3>
        <div className="accordion">
          <div className="accordion-item">Website Design & Build</div>
          <div className="accordion-item">Automatic Content Updates</div>
          <div className="accordion-item">Integrations</div>
          <div className="accordion-item">Search Engine Optimization(SEO)</div>
          <div className="accordion-item">App Development</div>
        </div>
      </div>

      <div className="card blue-card">
        <div className="tag">CONTENT ONLY</div>
        <h1>Already got a successful website?</h1>
        <p>
          Sync your website to our content feed. A collection of resources that
          can be added to your website. It’s an online dataset that is updated
          automatically for you, ensuring that the content on your website is
          never out of date.
        </p>
        <h3>Content only package includes:</h3>
        <ul>
          <li>Over 100 Factsheets</li>
          <li>Interactive Calculators</li>
          <li>Up-to-date Tax Calendar</li>
          <li>Easy access Tax Rates</li>
          <li>Historic Market Data</li>
          <li>Detailed Budget Reports</li>
          <li>Access to Downloads</li>
          <li>Expertly written News & Blogs</li>
          <li>Email add-on available from an additional £20 a-month</li>
              </ul>
      </div>

</div>
<div className='table'>
      <table>
  <thead>
    <tr>
    {/* <img src={icon} className="icon" alt="logo" />
    <img src={text} className="text" alt="logo" /> */}
      <th></th> 
     
       <th>Fully Managed Websites</th>
      <th>Other Website Providers</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Designed to your brand and colours</td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <td>Includes hosting and maintenance</td>
      <td>✓</td>
      <td>Depends on provider</td>
    </tr>
    <tr>
      <td>Content written by leading accountancy experts</td>
      <td>✓</td>
      <td>X</td>
    </tr>
    <tr>
      <td>Regular news stories published automatically to your website</td>
      <td>✓</td>
      <td>X</td>
    </tr>
    <tr>
      <td>Continual optimisation for five local popular search terms</td>
      <td>✓</td>
      <td>X</td>
    </tr>
    <tr>
      <td>Interactive tax calculators included as standard</td>
      <td>✓</td>
      <td>X</td>
    </tr>
    <tr>
      <td>Pricing</td>
      <td colspan="2">All for a simple monthly cost of £110 + VAT</td>
    </tr>
  </tbody>
</table>


<div className='articles'>
  <div className='artleft'>
  <h4>ARTICLES</h4>
  <h1>Get the most out of your new website</h1>
 <h5>The best types of websites work for you. They help keep your clients informed and attract new business. Read some of our tips and tricks to learn how to get the most of out of your new website.</h5>
 </div>
<div class="card-container">
  <a href="#" class="card1">
  <div class="vertical-hr"></div>
    <h3>Why Corporate Branding is important for your accountancy firm?</h3>
    {/* <span class="arrow">→</span> */}
  </a>
  <a href="#" class="card1">
  <div class="vertical-hr"></div>
    <h3>What do visitors look for on a website?</h3>
    {/* <span class="arrow">→</span> */}
  </a>
  <a href="#" class="card1">
  <div class="vertical-hr"></div>
    <h3>What is a responsive website?</h3>
    {/* <span class="arrow">→</span> */}
  </a>
  <a href="#" class="card1">
  <div class="vertical-hr"></div>
    <h3>Make little tweaks to your website to produce dramatic results</h3>
    {/* <span class="arrow">→</span> */}
  </a>
  <a href="#" class="card1">
  <div class="vertical-hr"></div>
    <h3>Best accounting website designs:15 tips to improve</h3>
    {/* <span class="arrow">→</span> */}
  </a>
  <a href="#" class="card1">
  <div class="vertical-hr"></div>
    <h3>Social Media Marketing For Accountants:Everything you need to know</h3>
    {/* <span class="arrow">→</span> */}
  </a>

  {/* ... other cards ... */}


</div>
</div>

</div>

<div className='faq'>
<h1>FAQ'S</h1>
<div class="faq-container">
  <div className='faqleft'> 
  <details>
    <summary>What is a responsive website?</summary>
    <p>Responsive websites adapt to the device they are being viewed on, whether it is a desktop computer, mobile phone or tablet. All of our websites are designed on a responsive platform so your clients can view your website wherever they are. Responsive websites also have an advantage on search engine rankings such as Google and Bing</p>
  </details>

  <details>
    <summary>How can I integrate my social media accounts in my website?</summary>
    <p>Our SEO service involves optimising up to five key phrases (e.g. accountants in Leicester, tax advisers in Leicester, etc) for your site, this is all included in the standard website monthly fee.

SEO is an essential tool to use within a website build, but it is important to be realistic and targeted in what you want to achieve. Our aim is to deliver long-term quality leads for you and ensuring you are listed as high as possible in the various search engines.

We will help develop a suitable SEO strategy for your firm. This will focus around your key services and location(s) to ensure that your site is visible in relevant searches.</p>
  </details>

<details>
    <summary>i have portal Software(such as IRIS open space,xero,sage etc),how can i give my clients access to this?</summary>
    <p>We can integrate this into your website for you free of charge. All you have to do is email our technical team and they will implement this for yo</p>
  </details>

  <details>
    <summary>Can i use your content on my website?</summary>
    <p>Yes, we offer a resources-only package, where you can effectively 'plug in' our tax and business content, news and features to a site which is otherwise hosted by a third party.

This can be delivered automatically to your site in a number of ways, including a full API, Wordpress plugin or via an iFram</p>
  </details>

  <details>
    <summary>can you create a bespoke website for my firm?</summary>
    <p>Yes, we can design and build you a website that is bespoke to your requirements but there is an additional cost for this service and a quote is supplied once we know your full brief and objectives.</p>
  </details>

</div>

<div className='faqright'>
  <details>
    <summary>How i integrate my social media accounts in my website?</summary>
    <p>We can insert social media feeds onto your website and add buttons that link to your accounts</p>
  </details>

  <details>
    <summary>Can you help with social media?</summary>
    <p>Yes, we can help design and produce content for your social media channels, along with posting it for you. Contact our team to find out how we can help enhance you social media profile.</p>
  </details>

  <details>
    <summary>Can i send my own emails aswell as the monthly email you send for us?</summary>
    <p>Yes, our mailENGINE product enables you to easily create and send attractive HTML emails to your contacts. From £20 per month, you can send unlimited emails, branded to your firm.</p>
  </details>

  <details>
    <summary>Can i add a blog to my website?</summary>
    <p>Yes, we recommend you set up a blog on a blogging platform such as Wordpress or Blogger and then we will create a link to your blog. This will allow you to create and edit blog posts when you wish. Alternatively, we can create a blog page for you, simply adding your stories when you have written them..</p>
  </details>

  {/* ... other FAQ sections ... */}  


</div>
</div>

</div>

<div className='plc'><h1><span>Wilmington </span>plc</h1></div>




<footer>

  <div className='footerleft'>
    <h3>025 Mercia Group Ltd, a division of Wilmington plc</h3>
  <p>Mercia Group Ltd is a company registered in England & Wales with company number 1464141.</p>
  <p>Great Britain: Wilmington plc, Suite 215/216 Fort Dunlop, 2nd Floor, Fort Parkway, Birmingham, B24 9FD. VAT no. GB 899 3725 51</p>
  <p>Mercia Ireland Ltd is a company registered in the Republic of Ireland with company number 321135. Registered office: 13 Baggot Street Upper, 2nd Floor, Dublin 4, Ireland, D04 W7K5</p>

</div>


<div className='footerright'>
  <nav>
    <ul>
      <li><a href="#">Contact Us</a></li>
      <li><a href="#">About Us</a></li>
      <li><a href="#">Careers</a></li>
      <li><a href="#">News & Blogs</a></li>
      <li><a href="#">FAQs</a></li>
    </ul>
  </nav>

  <nav>
    <ul>
      <li><a href="#">Privacy Policy</a></li>
      <li><a href="#">Cookie Policy</a></li>
      <li><a href="#">Complaints Policy</a></li>
      <li><a href="#">Terms & Conditions</a></li>
    </ul>
  </nav>

  <nav>
    <ul>
    <li><a href="#">Sitemap</a></li>
      <li><a href="#">Direct Debit</a></li>
      <li><a href="#">Terms & Conditions</a></li>
      <li><a href="#">Quality Management</a></li>
    </ul>
  </nav>


  </div>
</footer>
</div>

  






  );
}

export default App;
