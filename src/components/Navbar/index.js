import React from 'react'
import { Container } from 'style/CommonStyle'
import {
    NavLogo,
    NavWrapper,
    NavButtons,
    SignInButton,
    UploadButton,
} from './NavbarStyle'

export default function NavBar() {
    return (
        <Container>
            <NavWrapper>
                <NavLogo>
                    <img
                        src="https://tenor.com/assets/img/tenor-logo.svg"
                        alt="logo"
                    />
                </NavLogo>
                <NavButtons>
                    <UploadButton>
                        <img
                            src="https://tenor.com/assets/icons/upload-icon.svg"
                            alt="upload"
                        />
                        create
                    </UploadButton>
                    <SignInButton>Sign In</SignInButton>
                    <box-icon name="menu" className="nav__menu"></box-icon>
                </NavButtons>
            </NavWrapper>
        </Container>
    )
}
