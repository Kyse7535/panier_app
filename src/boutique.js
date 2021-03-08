import React from "react";
import { Link } from "react-router-dom";

export const Boutique = (props) => {
	return (
		<>
			<div className="container">
				<div className="row">
					{props.articles.map((article) => (
						<div
							className="col-12 col-md-6 text-left my-5"
							key={article.id}>
							<Link to={`/boutique/${article.titre}`}>
								<div>
									<img
										src={
											process.env.PUBLIC_URL +
											article.image
										}
										className="photo-boutique img-fluid"
										alt="ordinateur"
									/>
									<h5>{article.titre}</h5>
									<p>{article.prix}€</p>
								</div>
							</Link>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Boutique;
