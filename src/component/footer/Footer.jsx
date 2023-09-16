import React from 'react'
import './footer.css'

function Footer() {
        return (
                <div>
                        <footer className="footer">
                                <div className="copy">&copy; 2023 flight booking app</div>
                                <div className="bottom-links">
                                        <div className="links">
                                                <span>More Info</span>
                                                <a href="#">Home</a>
                                                <a href="#">Booking</a>
                                               
                                        </div>
                                       
                                </div>
                        </footer>
                </div>
        )
}

export default Footer
