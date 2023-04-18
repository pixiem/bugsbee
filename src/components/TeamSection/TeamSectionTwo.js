import teamSection from "@/data/teamSection";
import React from "react";
import { Row } from "react-bootstrap";
import SingleTeam from "./SingleTeam";

const { title, teams } = teamSection;

const TeamSectionTwo = () => {
  return (
    <section className="team-section">
      <div className="auto-container">
        <div className="sec-title centered">
          <h2>
            {title} <span className="dot">.</span>
          </h2>
        </div>
        <Row className="clearfix justify-content-center">
         
            <SingleTeam
              key={1}
              team={ {
                id: 1,
                image: "team-2.jpg",
                name: "MD Naymul Islam",
                designation: "Founder & Frontend Engineer",
                socials: [
                  {
                    id: 1,
                    icon: "fab fa-facebook-square",
                    href: "https://www.facebook.com/naymul.ctg",
                  },
                  {
                    id: 2,
                    icon: "fab fa-linkedin",
                    href: "https://www.linkedin.com/in/dev-naymul",
                  },
                  {
                    id: 3,
                    icon: "fab fa-instagram",
                    href: "https://www.instagram.com/naymul_mist/",
                  }
                ],
              }}
              className="col-lg-4 col-md-6 col-sm-12"
            />
            <SingleTeam
              key={2}
              team={ {
                id: 1,
                image: "team-3.jpg",
                name: "Mohammad Sohan Khan",
                designation: "Co-Founder & CTO",
                socials: [
                  {
                    id: 1,
                    icon: "fab fa-facebook-square",
                    href: "https://www.facebook.com/chittagonian.king",
                  },
                  {
                    id: 2,
                    icon: "fab fa-linkedin",
                    href: "https://www.linkedin.com/in/deepdiverguy/",
                  }
                ],
              }}
              className="col-lg-4 col-md-6 col-sm-12"
            />
          
        </Row>
      </div>
    </section>
  );
};

export default TeamSectionTwo;
