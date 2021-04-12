import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer>
      <div className="footer-mid">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <h4>Dummy text</h4>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} Jacob Kriese
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  .footer-mid {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
  }
  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }
`;
