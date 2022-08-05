import './App.css';
import Achievements from './layout/achievements/Achievements';
import Customers from './layout/customers/Customers';
import Header from './layout/header/Header';

function App() {
    return (

        <div>

            <Header />
            <main className='wrapper'>
                <Customers />
                <Achievements />
            </main>

        </div>

    );
}

export default App;
