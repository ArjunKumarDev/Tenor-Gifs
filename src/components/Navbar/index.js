import React from "react";
import { Container } from "style/CommonStyle";
import styled from "styled-components";

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
`;

const NavLogo = styled.div`
  padding-left: 0.2rem;

  img {
    width: 8rem;
    height: 2.2rem;
  }
`;

const UploadButton = styled.button`
  background-color: #007add;
  border-color: #007add;
  border-radius: 3px;
  color: #fff;
  font-weight: 700;
  line-height: 1.4;
  padding: 12px;
  text-transform: uppercase;
  font-size: 13px;
  padding: 7px 15px;
  margin-right: 1rem;
  cursor: pointer;

  // temp
  border-style: solid;
  border-width: 1px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 8%), 0 4px 6px 0 rgb(83 83 92 / 11%);
  text-align: center;

  img {
    height: 1.3rem;
    margin-right: 0.7rem;
  }
`;

const SignInButton = styled(UploadButton)`
  background-color: #fff;
  color: #007add;
`;

export default function NavBar() {
  return (
    <Container>
      <NavWrapper>
        <NavLogo>
          <img src="https://tenor.com/assets/img/tenor-logo.svg" alt="logo" />
        </NavLogo>
        <div>
          <UploadButton>
            <img
              src="https://tenor.com/assets/icons/upload-icon.svg"
              alt="upload"
            />
            create
          </UploadButton>
          <SignInButton>Sign In</SignInButton>
        </div>
      </NavWrapper>
    </Container>
  );
}
