import React from "react";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const HeaderMobile = (props) => {
	return (
		<>
			<div id="overlay">
				<div id="menu_mobile">
					<i className="fas fa-times"></i>
					<ul className="col-md-6 my-0 px-0">
						<li className="mx-3 link-menu cursor-pointer">
							<Link
								className="text-dark text-decoration-none"
								to="/">
								Accueil
							</Link>
						</li>
						<li className="mx-3 link-menu cursor-pointer">
							<Link
								className="text-dark text-decoration-none"
								to="/boutique">
								Boutique
							</Link>
						</li>
						<li className="mx-3 link-menu cursor-pointer">
							<Link
								className="text-dark text-decoration-none"
								to="/a_propos">
								A propos
							</Link>
						</li>
						<li className="mx-3 link-menu cursor-pointer">
							<Link
								className="text-dark text-decoration-none "
								to="/contact">
								Contact
							</Link>
						</li>
						<li className="mx-3 link-menu cursor-pointer">
							<Icon.Bag className="mr-2 " size="30" />
							<Link
								className="text-dark text-decoration-none"
								to="/panier">
								Panier({props.nbreArticle})
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<div id="for_mobile">
				<div className="logo">Cutsy Barbershop</div>
				<div className="hamburger" id="open_menu">
					<i className="fas fa-bars fa-2x"></i>
				</div>
			</div>
		</>
	);
};

export default HeaderMobile;
