import React from "react";
import * as Icon from "react-bootstrap-icons";

const ContentPanier = (props) => {
	return (
		<div className="container-fluid position-absolute z-index-2 end-0 top-0 cursor-pointer">
			<div className="row">
				<div
					className="col-3 content-panier border border-dark offset-8 px-0"
					style={{ display: "none" }}>
					{props.articles.length === 0 ? (
						<p>Votre panier est vide</p>
					) : (
						<>
							{props.articles.map((article) => (
								<div
									className="d-flex justify-content-between align-items-center px-1"
									key={article.id}>
									<img
										src={
											process.env.PUBLIC_URL +
											article.image
										}
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
											onClick={(e) =>
												props.deleteArticles(
													e,
													article.id,
												)
											}
										/>
										<p className="small text-left">
											Prix unitaire <br />
											{article.prix} €
										</p>
									</div>
								</div>
							))}
							<div className="small bg-secondary cursor-pointer px-0 ">
								<p className="d-flex justify-content-between m-0">
									<span className="">SOUS-TOTAL</span>
									<span className="">{props.coutTotal}€</span>
								</p>
								<button className=" w-75 text-white bg-dark border-0  mb-2 py-1 cursor-pointer">
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
