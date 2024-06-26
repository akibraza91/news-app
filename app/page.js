"use client"

import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import './globals.css';

export default function Home() {
  return (
    <>
    <Header />
    <main className={styles.main}>
      <div className="container">
        <div className="left-container">
          <picture>
            <source media="(min-width: 600px)" srcSet="./image-web-3-desktop.jpg" />
            <img src="./image-web-3-mobile.jpg" alt="Web 3 Image" />
          </picture>
          <div className="bottom">
            <div className="left">
              <h1>The Bright Future of Web 3.0?</h1>
            </div>
            <div className="right">
              <p>
              We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
              But is it really fulfilling its promise?
              </p>
              <button>Read more</button>
            </div>
          </div>
        </div>
        <div className="right-container">
          <div className="child">
            <h1>New</h1>
            <h3>Hydrogen VS Electric Cars</h3>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </div>
          <div className="child">
            <h3>The Downsides of AI Artistry</h3>
            <p>What are the possible adverse effects of on-demand AI image generation?</p>
          </div>
          <div className="child">
            <h3>Is VC Funding Drying Up?</h3>
            <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
          </div>
        </div>
      </div>
    </main>
    <div className="bottom-container">
      <div className="card">
        <div className="imgBox">
          <img src="./image-retro-pcs.jpg" alt="Retro PC" />
        </div>
        <div className="right">
          <h1>01</h1>
          <h4>Reviving Retro PCs</h4>
          <p>What happens when old PCs are given modern upgrades?</p>
        </div>
      </div>
      <div className="card">
        <div className="imgBox">
          <img src="./image-top-laptops.jpg" alt="Laptop" />
        </div>
        <div className="right">
          <h1>02</h1>
          <h4>Top 10 Laptops of 2022</h4>
          <p>Our best picks for various needs and budgets.</p>
        </div>
      </div>
      <div className="card">
        <div className="imgBox">
          <img src="./image-gaming-growth.jpg" alt="Gaming" />
        </div>
        <div className="right">
          <h1>03</h1>
          <h4>The Growth of Gaming</h4>
          <p>How the pandemic has sparked fresh opportunities.</p>
        </div>
      </div>
    </div>
    <div class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="#">Akib</a>.
    </div>
    </>
  );
}
