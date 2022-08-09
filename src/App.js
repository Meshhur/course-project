import './App.css';
import Achievements from './layout/achievements/Achievements';
import Buttons from './layout/buttons/Buttons';
import Customers from './layout/customers/Customers';
import Customs from './layout/customs/Customs';
import Footer from './layout/footer/Footer';
import Header from './layout/header/Header';
import Products from './layout/products/Products';
import Requests from './layout/requests/Requests';

function App() {
    return (

        <div className='App'>

            <Header />

            <main className='wrapper'>

                <Customers />
                <Achievements />
                <Products />
                <Customs />
                <Buttons />
                <Requests />

            </main>

            <Footer />

        </div>

    );
}

export default App;
