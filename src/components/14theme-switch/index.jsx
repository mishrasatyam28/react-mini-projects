
import useLocalStorage from './useLocalStorage';
import './styles.css'

export const LightDarkMode = () => {
    const [theme, setTheme] = useLocalStorage('theme',"dark");

    function handleToggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

  return (
      <div className='light-dark-mode' data-theme={theme}>
          <div className="container1">
              <p>Hello World!</p>
              <button onClick={handleToggleTheme}>
                Change theme
              </button>
          </div>
    </div> 
  )
}
