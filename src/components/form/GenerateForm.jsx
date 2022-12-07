import "./generate-form.css";
import React from "react";

export const GenerateForm = () => {
  return (
    <div className="adminpage-container">
      <form className="admin-form" action="">
        <h1>SUBMIT A WASHROOM</h1>
        <div className="input-container">
          <label htmlFor="name">Where is the Washroom?</label>
          <input
            type="text"
            id="name"
            name="input-name"
            placeholder="Davis Centre Washroom"
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="region">What Region is it in?</label>
          <input
            type="text"
            id="region"
            name="input-region"
            placeholder="Waterloo, Ontario"
            required
          />
        </div>
        <label className="ratings-title">Rate the Washroom On:</label>
        <div>
          <label className="ratings-subtitle">Cleanliness</label>
          <div className="rating ratings-container">
            <label>
              <input type="radio" name="clean" value="1" defaultChecked />
              <span className="icon">★</span>
            </label>
            <label>
              <input type="radio" name="clean" value="2" />
              <span className="icon">★</span>
              <span className="icon">★</span>
            </label>
            <label>
              <input type="radio" name="clean" value="3" />
              <span className="icon">★</span>
              <span className="icon">★</span>
              <span className="icon">★</span>
            </label>
            <label>
              <input type="radio" name="clean" value="4" />
              <span className="icon">★</span>
              <span className="icon">★</span>
              <span className="icon">★</span>
              <span className="icon">★</span>
            </label>
            <label>
              <input type="radio" name="clean" value="5" />
              <span className="icon">★</span>
              <span className="icon">★</span>
              <span className="icon">★</span>
              <span className="icon">★</span>
              <span className="icon">★</span>
            </label>
          </div>
        </div>
        <div>
          <label className="ratings-subtitle">Comfort</label>
          <div className="rating ratings-container">
            <label>
              <input type="radio" name="comfort" value="1" defaultChecked />
              <span className="icon">★</span>
            </label>
            <label>
              <input type="radio" name="comfort" value="2" />
              <span className="icon">★</span>
              <span className="icon">★</span>
            </label>
            <label>
              <input type="radio" name="comfort" value="3" />
              <span className="icon">★</span>
              <span className="icon">★</span>
              <span className="icon">★</span>
            </label>
            <label>
              <input type="radio" name="comfort" value="4" />
              <span className="icon">★</span>
              <span className="icon">★</span>
              <span className="icon">★</span>
              <span className="icon">★</span>
            </label>
            <label>
              <input type="radio" name="comfort" value="5" />
              <span className="icon">★</span>
              <span className="icon">★</span>
              <span className="icon">★</span>
              <span className="icon">★</span>
              <span className="icon">★</span>
            </label>
          </div>
        </div>
        <div className="textarea-container">
          <label className="text-title" htmlFor="review">
            Can you write a Review on the Washroom?
          </label>
          <textarea
            id="review"
            name="input-review"
            rows={5}
            cols={20}
            required
          ></textarea>
        </div>
        <div className="input-container">
          <label htmlFor="myFile">Do you have a Picture?</label>
          <input type="file" id="myFile" name="filename" required />
        </div>
        <div className="input-container">
          <label htmlFor="input-insta">What's your Instagram?</label>
          <input
            type="text"
            name="input-insta"
            id="insta"
            placeholder="@mileycirus"
            required
          ></input>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};
