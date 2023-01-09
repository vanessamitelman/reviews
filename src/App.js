import {useState} from 'react'
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { BaseTheme,theme1 } from './Themes/theme';
import Review from './components/Review';
function App() {
  const [theme,setTheme] = useState(BaseTheme)
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <main>
        <button className="random-btn" onClick={()=>theme===BaseTheme?setTheme(theme1):setTheme(BaseTheme)}>change theme</button>
        <section className='container'>
          <div className='title'>
            <h2>Our Reviews</h2>
            <div className='underline' />
          </div>
          <Review />
        </section>
      </main>
    </ThemeProvider>
  );
}

export default App;
