import React from "react";
import * as Icon from "react-bootstrap-icons";
const ContentPanier = (props) => {
	return (
		<div className="container position-absolute end-0 top-0 cursor-pointer">
			<div className="row">
				<div className="col-4 border offset-5">
					{props.articles.length === 0 ? (
						<p>Votre panier est vide</p>
					) : (
						<>
							{props.articles.map((article) => (
								<div
									className="d-flex justify-content-between align-items-center"
									key={article.id}>
									<img
										src={article.image}
										alt={article.titre}
										className="photo-panier"
									/>
									<div>
										<p className=" small text-left">
											{article.titre} <br />
											Qtité: {article.quantite}
										</p>
									</div>
									<div>
										<Icon.X
											className="fw-bolder"
											onClick={() => props.outPanier()}
										/>
										<p className="small text-left">
											Prix unitaire <br />
											{article.prix} €
										</p>
									</div>
								</div>
							))}
							<div className="small bg-light cursor-pointer px-0">
								<p className="d-flex justify-content-between">
									<span className="">SOUS-TOTAL</span>
									<span className="">{props.coutTotal}€</span>
								</p>
								<button className=" w-100 text-white bg-dark border-0  mx-2 cursor-pointer">
									PASSER AU PAIEMENT
								</button>
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
};
export default ContentPanier;
