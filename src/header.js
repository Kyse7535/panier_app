import React, { useState, useEffect } from "react";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Header = (props) => {
	const [nbreArticle, setNbreArticle] = useState(0);

	useEffect(() => {
		setNbreArticle(props.nbrePanier);
	}, [props.nbrePanier]);

	return (
		<header>
			<div className="container-fluid">
				<div className="row">
					<div className="col-6 offset-3 d-flex justify-content-between py-3">
						<div>Mon logo</div>
						<ul className="my-0 px-0 ">
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
									Panier({nbreArticle})
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
