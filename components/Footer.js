import React from 'react'

function Footer() {
    const year = new Date().getFullYear();
    return (
        <div className="flex justify-center">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © {year} Ariel Paixão™
            </span>
        </div>
    )
}

export default Footer