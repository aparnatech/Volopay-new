import React from 'react'

const loaderStyle = {
   spinnerStyle: {
        alignItems: 'center',
        height: '100vh',
        display: 'flex' 
    },
    imgStyle:{
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block',
        width: '5%',
        alignItems: 'center'
    }
  };
  
const LogoSpinner = () => {
    return (
        <div style={loaderStyle.spinnerStyle}>
            <img src='/assets/Logos/logo.png' alt='Volopay' style={loaderStyle.imgStyle} />
        </div>
    )
}

export default LogoSpinner