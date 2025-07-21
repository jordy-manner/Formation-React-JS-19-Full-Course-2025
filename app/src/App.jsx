import React from 'react'
import Search from './components/Search.jsx'
import heroUrl from './assets/hero.png'


const App = () => {
    const [searchTerm, setSearchTerm] = React.useState('')

    return (
        <main>
            <div className="pattern" />

            <div className="wrapper">
                <header>
                    <img src={heroUrl} alt="Hero banner" />
                    <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy Without the Hassle</h1>
                </header>

                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <h1 className="text-white">{searchTerm}</h1>
            </div>
        </main>
    )
}
export default App
