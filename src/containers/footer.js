import React from 'react'
import Footer from '../components/footer'
import Icon from '../components/icons'

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>

            <Footer.Column>
            <Footer.Link target="_blank" href="https://linktr.ee/sohamsamanta">Soham Samanta</Footer.Link>
            </Footer.Column>

            <Footer.Column>
            <Footer.Link href="#">Ⓒ2022 | ₿</Footer.Link>
            </Footer.Column>

            <Footer.Column>
            <Footer.Link href="#">Crypto Love 🤍</Footer.Link>
            </Footer.Column>

            <Footer.Column>
            <Footer.Link href="#">Contact Us</Footer.Link>
            </Footer.Column>

            <Footer.Column>
            <Footer.Link target="_blank" href="https://www.instagram.com/sohamsamanta2/"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
            </Footer.Column>

            <Footer.Column>
            <Footer.Link target="_blank" href="https://twitter.com/sohamtwt"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
            </Footer.Column>

            <Footer.Column>
            <Footer.Link target="_blank" href="https://www.facebook.com/soham.samnata"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
            </Footer.Column>

            <Footer.Column>
            <Footer.Link target="_blank" href="https://github.com/soham-samanta"><Icon className="fab fa-github-f" />GitHub</Footer.Link>
            </Footer.Column>

            
            
            
            
        

                {/* <Footer.Column>
                <Footer.Title>About Us</Footer.Title>
                    <Footer.Link href="#">Soham Samanta</Footer.Link>
                    <Footer.Link href="#">Ⓒ 2022</Footer.Link>
                    <Footer.Link href="#">Clients</Footer.Link>
                    <Footer.Link href="#">Testimonials</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Services</Footer.Title>
                    <Footer.Link href="#">Marketing</Footer.Link>
                    <Footer.Link href="#">Consulting</Footer.Link>
                    <Footer.Link href="#">Development</Footer.Link>
                    <Footer.Link href="#">Design</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Contact Us</Footer.Title>
                    <Footer.Link href="#">United States</Footer.Link>
                    <Footer.Link href="#">United Kingdom</Footer.Link>
                    <Footer.Link href="#">Australia</Footer.Link>
                    <Footer.Link href="#">Support</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="#"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-youtube" />Youtube</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
                </Footer.Column> */}
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}