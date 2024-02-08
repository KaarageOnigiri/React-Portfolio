import { useState, useEffect } from 'react';

export default function Footer() {
    return (
        <div className="custom-footer">
            <ul className="custom-align-center">
                <a href="https://github.com/" className="custom-footer-link">GitHub</a>
                <a href="https://www.linkedin.com/in/villy-yeoh-04480b12b/" className="custom-footer-link">LinkedIn</a>
            </ul>
        </div>
    )
}