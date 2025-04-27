<a href="https://github.com/UpwardRow/BikeBanter">
    <img src="images-and-videos/bike-banter-logo.png" alt="Bike Banter logo" width="1920" height="1080">
</a>

<h2>Optimise your cycle tour!</h2>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li>
            <a href="#design">Design</a>
            <ul>
                <li>
                    <a href="#home-page">Home Page</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="#connect-page">Connect Page</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="#gear-page">Gear Page</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="#account-page">Account Page</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="#settings-page">Settings Page</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="#about-page">About Page</a>
                </li>
            </ul>
        </li>
      </ul>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

I am an avid cyclist. Sounds like yourself? This is a statement that comes with its own responsibilities. Cycling has numerous benefits for our mental health and longevity, and regular riding requires a careful dedication that can put strain on our day to day lives. 

As a bike to work commuter, I needed to carefully plan my route and what I needed to pack for my long journey. This can be of varying importance. 

*Picture this:*
* You forget to pack your chargers? 
* Maybe some construction is on that you haven't considered? 
* The roads are too icy for your tires? 
* Or worse yet, you forget your change of clothes for those intense days on the road? 

***Day ruined.***

That's where **BikeBanter** comes in, you can easily stay organised and connect with like minded people on your journeys! Customise your gear, add your items checklist, visualise your weather, route and suggestions from other cyclists, and see an overview of hazards you haven't considered. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Design

Before getting to work on the website I created wireframes to visualise my creation. i wanted to create a minimalistic design which employees a trendy, user friendly design. It's important to make it easy on the eyes too with colour as many people would be looking at this website before they set out on their journey the next day.


### Home Page

<img src="Wireframes/BikeBanterHomePage.drawio.png" alt="Bike Banter Home Page" width="1920" height="1080">


### Connect Page

<img src="Wireframes/BikeBanterConnectPage.drawio.png" alt="Bike Banter Connect Page" width="1920" height="1080">


### Gear Page

<img src="Wireframes/BikeBanterGearPage.drawio.png" alt="Bike Banter Gear Page" width="1920" height="1080">


### Account Page

<img src="Wireframes/BikeBanterConnectPage.drawio.png" alt="Bike Banter Account Page" width="1920" height="1080">


### Settings Page

<img src="Wireframes/BikeBanterSettingsPage.drawio.png" alt="Bike Banter Settings Page" width="1920" height="1080">


### About Page

<img src="Wireframes/BikeBanterAboutPage.drawio.png" alt="Bike Banter About Page" width="1920" height="1080">

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Built With

In the initial setup of my project I used various technologies which aided in development. Typescript and CSS are my main coding languages to develop Bike Banter. They are complemented by the React library, built in the Next.js framework. Images were created in Canva and mockups were done in Draw.io.

### Testing

I pursued Test Driven Development (TDD) to allow my code to be more error free, and to ensure that the proposed elements shown within my wireframes had loaded correctly. This prepared me to work with the data within the APIs, and data retrieved from my database that I used. It really helps when I see where my tests are failing as I debug once I have the core functionality tested and logged.

I find that looking at the website as a whole is overwhelming, that's why breaking it up into more readable testable chunks improves my thinking and logical reasoning. Early on I can see the project without the fog of when the project gets complex, which means having tests also acts as a good baseline to refer back to.

I considered a few different types of testing in conjunction with TDD. Of course, I created Unit Tests which are perfect for TDD, Integration tests, and I considered End to End and Snapshot testing. These are a less TDD appropriate as I needed to test with functional ready code first. Creating these types of tests for the end of the project when I had everything working was better for development.