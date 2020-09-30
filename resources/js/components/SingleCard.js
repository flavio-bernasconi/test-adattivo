import React from "react";

export function SingleCard({ info }) {
    const { number, title, icon, subtitle } = info;
    // { number: 5, title: "titolo 5", icon: "icon.png", subtitle: "sottotitolo" }

    return (
        <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12 text-center text-container">
            <img className="" src={`img/${icon}`} />
            <h1 className="sub-title">{title}</h1>
            <h3 className="paragraph">{subtitle}</h3>
        </div>
    );
}
