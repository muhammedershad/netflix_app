import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import {actionMovies, comedyMovies, horrorMovies, originals, romanceMovies} from './constents/urls'
import AxiosProvider from './constents/axios'

function App() {
  return (
    <AxiosProvider>
      <div className="App">
        <NavBar/>
        <Banner/>
        <RowPost title='Netflix Originals' isSmall={false} url={originals} />
        <RowPost title='Action Movies' isSmall url={actionMovies} />
        <RowPost title='Romantic Movies' isSmall url={romanceMovies} />
        <RowPost title='Horror Movies' isSmall url={horrorMovies} />
        <RowPost title='Comedy Movies' isSmall url={comedyMovies} />
    </div>
    </AxiosProvider>
  );
}

export default App;
