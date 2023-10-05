import React from 'react';
import './CardSection.scss';
import { BsAndroid2,BsBank2,BsBrowserFirefox } from "react-icons/bs";


const CardSection = () => {
  return (
    <div class="card-section">
        <div class="col">
            <div class="card">
            <BsAndroid2/>
            <div class="card-body">
                <h5 class="card-title">Android</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            </div>
        </div>
        <div class="col">
            <div class="card">
            <BsBank2 />
            <div class="card-body">
                <h5 class="card-title">Banking</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            </div>
        </div>
        <div class="col">
            <div class="card">
            <BsBrowserFirefox/>
            <div class="card-body">
                <h5 class="card-title">Browser</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            </div>
        </div>
    </div>
  
  )
}

export default CardSection
