import React, { memo } from 'react'

const ContentCenter = ({ children }) => {
    return (
        <div className="max-w-7xl mx-auto">
            {children}
        </div>
    )
}

export default memo(ContentCenter)
