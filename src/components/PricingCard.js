import React from "react";
import "./PricingCardStyles.css";
import { Link } from "react-router-dom";

const PricingCard =() =>{
    return(
        <div className="pricing">
            <div className="card-container">
                <div className="card">
                    <h3>- Ui/Ux Design -</h3>
                    <span className="bar"></span>
                    <p className="btc">Economy</p>
                    <p>- Featured -</p>
                    <p>- User friendly -</p>
                    <Link to="/contact" className="btn">
                        Enquiry
                    </Link>
                </div>

                <div className="card">
                    <h3>- Single Page Web Design -</h3>
                    <span className="bar"></span>
                    <p className="btc">Basic</p>
                    <p>- Featured -</p>
                    <p>- Responsive Design -</p>
                    <Link to="/contact" className="btn">
                        Enquiry
                    </Link>
                </div>

                <div className="card">
                    <h3>- Print Design -</h3>
                    <span className="bar"></span>
                    <p className="btc">Standard</p>
                    <p>- Featured -</p>
                    <p>- Responsive Design -</p>
                    <Link to="/contact" className="btn">
                        Enquiry
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PricingCard;