import React from 'react';

const Notification = ({ message }) => {
    if (message === null) {
        return null
    } else if (message.success) {
        return (
            <div className='success'>
                {message.success}
            </div>
        )
    } else if (message.mistake) {
        return (
            <div className='error'>
                {message.mistake}
            </div>
        )
    } else if (message.warning) {
        return (
            <div className='warning'>
                {message.warning}
            </div>
        )
    }
}

export default Notification;