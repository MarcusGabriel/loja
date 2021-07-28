import './NavBar.css';
import { FaUssunnah, FaVaadin, FaXbox, FaAlignRight, FaAngleDoubleUp, FaBars } from "react-icons/fa";

function NavBar() {
    return (
        <div>
            <div className="top">
                <div>
                    <a href="">
                        <FaUssunnah />
                        Minha Conta </a>
                    <a href="">
                        <FaVaadin />
                        Meus pedidos</a>
                </div>
                <div>
                    <a href="">
                        <FaXbox />
                        (19) 99607-7401</a>
                    <a href="">
                        <FaAlignRight />
                        (19) 99607-7401</a>
                    <a href="">
                        <FaAngleDoubleUp />
                        Central de atendimento</a>
                </div>
            </div>
            <div className="bottom">
                <div className="bottom_category">
                    <div>
                        <FaBars />
                    </div>
                    Categorias
                </div>
                <div>Promoções</div>
                <div>Marcas</div>
                <div>Combos</div>
                <div className="bottom_icone_torto">
                    <img src="../../assets/icones.png" alt="" />
                </div>
                <div className="bottom_little_car">
                    <input type="text" />
                    carrinho
                    R$ 0,00
                </div>
            </div>
        </div>
    );
}

export default NavBar;
