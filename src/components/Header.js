import React, { useEffect, useState } from 'react';

const Header = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'container dark')
  const toggleTheme = () => {
    if (theme === 'container ') {
      setTheme('container dark') 
    }
    else{
      setTheme('container ') 
    }
  }
  useEffect(() => {
    document.body.className = theme
  }, [theme])
  return (
    <div className='app-header'>
        <h1>Note List</h1>
        <img src={require('../assets/theme.png')} width={20} onClick={toggleTheme} />
    </div>
  )
}

export default Header