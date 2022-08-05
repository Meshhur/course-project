import './App.css';
import Achievements from './layout/achievements/Achievements';
import Customers from './layout/customers/Customers';
import Customs from './layout/customs/Customs';
import Header from './layout/header/Header';
import Products from './layout/products/Products';

function App() {
    return (

        <div>

            <Header />
            <main className='wrapper'>

                <Customers />
                <Achievements />
                <Products />
                <Customs />

            </main>

        </div>

    );
}

export default App;
