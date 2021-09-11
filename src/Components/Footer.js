import React from 'react'

export const Footer = () => {
    let footerStyle = {
        //border: "2px solid red"
    }
    return (
        <footer className="bg-dark text-light fixed-bottom" style={footerStyle}>
            <p className="text-center">
                Copyright &copy; MyTodoList.com
            </p>
        </footer>
    )
}

export default Footer;