// components/Button.js
import React from 'react';
import './Button.css';
import Link from 'next/link';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({ children, type, onClick, buttonStyle, buttonSize, href }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    if (href) {
        // If href is provided, use Link
        return (
            <Link href={href} className={`btn ${checkButtonStyle} ${checkButtonSize}`}>
                {children}
            </Link>
        );
    }

    // Otherwise, render a regular button
    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
            {children}
        </button>
    );
};
