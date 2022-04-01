import React, { Component } from "react";

export class Home extends Component {
  render() {
    return (
      <div className="wrapper">
        <Card
          img="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2149446597/settings_images/7rEd998KQvawXxSIlIzb_Legacy_Graduation_SD_2022_.jpeg"
          // img="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/1534643/settings_images/nI39spoMRxKMwTP3QEM8_Sedona_Grads.png"
          price="$19.00"
          title="Personal Finance: Financial Security Thinking & Principles"
          description="Take your boring salads up a knotch. This recipe is perfect for lunch
          and only contains 5 ingredients!"
        />

        <Card
          img="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2149446597/settings_images/WjEiVQwRRjWUdYHgZv11_getcertified.jpg"
          price="$22.00"
          title="Learning to Write as a Professional Author"
          description="Fear Risotto no more! This simple recipe is perfect for family dinners."
        />

        <Card
          img="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/1534643/settings_images/mr5qMoZfTGWDzi3mdsmX_file.jpg"
          price="$29.00"
          title="Legacy Training International"
          description="Baked Cod with Vegetables. 30 minute meal!"
        />
        <Card
          img="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2149446597/settings_images/InXQ7wH9QzGA29YQidhT_heatherbaseball.jpg"
          price="$33.90"
          title="Start Coaching : Go further, faster!"
          description="Take your boring salads up a knotch. This recipe is perfect for lunch
          and only contains 5 ingredients!"
        />

        <Card
          img="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/1534643/settings_images/Kt9qzmCTKKT48zVvUCh1_file.jpg"
          price="$18.00"
          title="Legacy Training International"
          description="Fear Risotto no more! This simple recipe is perfect for family dinners."
        />

        <Card
          img="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/1534643/settings_images/nI39spoMRxKMwTP3QEM8_Sedona_Grads.png"
          // img="https://maxcoach.thememove.com/main/wp-content/uploads/sites/1/2019/11/stock-full-hd-06-480x298.jpg"
          price="$26.00"
          title="Master jQuery in a Short Period of Time"
          description="Baked Cod with Vegetables. 30 minute meal!"
        />
      </div>
    );
  }
}
function Card(props) {
  return (
    <div className="card">
      <div className="card__body">
        <img src={props.img} class="card__image" />
        <h2 className="card__price">{props.price}</h2>

        <p className="card__title">{props.title}</p>
        {/* <p className="card__description">{props.description}</p> */}
        <p className="card__bottom">
          <i className="fa fa-file"></i>&nbsp; 17 Lessons &nbsp; &nbsp;{" "}
          <i className="fa fa-clock-o"></i>&nbsp; 12 Weeks{" "}
        </p>
      </div>
      {/* <button className="card__btn">View Recipe</button> */}
    </div>
  );
}
