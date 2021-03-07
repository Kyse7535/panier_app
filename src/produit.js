import React, { useState } from "react";
import { useRouteMatch } from "react-router";

import * as Icon from "react-bootstrap-icons";

const Produit = (props) => {
	const match = useRouteMatch();
	const articles = props.articles;
	const article = articles.find(
		({ titre }) => titre === match.params.titreArticle,
	);

	const [quantite, setQuantite] = useState(1);

	const handleChange = (e) => {
		e.preventDefault();
		setQuantite(e.target.value);
	};

	return (
		<div className="container h-100">
			<div className="row">
				<div className="col-12 text-left mt-5 mb-3 px-0">
					Mon chemin
				</div>
				<div
					className="col-5 border p-2 d-flex align-items-center"
					style={{ height: "60vh" }}>
					<img
						src={process.env.PUBLIC_URL + article.image}
						alt={article.titre}
						className=" img-fluid"
					/>
				</div>
				<div className="col-6 text-left px-4 py-2">
					<p className="font-weight-bold">{article.titre}</p>
					<p className="font-weight-bold">{article.prix}€ </p>
					<form
						onSubmit={(e) =>
							props.addToPanier(e, quantite, article)
						}>
						<div className="row col-2">
							<label className="d-block">Quantité</label>
							<input
								type="number"
								min="1"
								className="w-5 form-control rounded-0 px-1"
								value={quantite}
								onChange={handleChange}
							/>
						</div>
						<p className="text-success font-weight-lighter my-2">
							<Icon.CircleFill size="12" /> En stock
						</p>
						<input
							type="submit"
							value="AJOUTER AU PANIER"
							className="w-100 form-control-lg rounded-0 text-white bg-dark border-0 "
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Produit;
