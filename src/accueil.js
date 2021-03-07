import React from "react";
import { Link } from "react-router-dom";
const Accueil = (props) => {
	return (
		<div className="container-fluid ">
			<div
				className="row "
				style={{
					backgroundImage: "url(/part1.jpg)",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					height: "100vh",
				}}>
				<div className="col-12 col-md-6 offset-md-3 text-white text-right px-0">
					<div className="part-1 mx-0">
						<h6 className="fw-bolder letter-spacing-3">
							UNE TECHNOLOGIE REVOLUTIONNAIRE
						</h6>
						<p>
							Ceci est un paragraphe. Survolez-moi avec votre
							souris d'ordinateur et cliquez une fois pour que le
							menu s'affiche. Double-cliquez pour éditer
							directement le texte. Vous pouvez aussi me déplacer
							n'importe où sur la page par la méthode du «Glisser
							et Déposer»
						</p>
					</div>
				</div>
			</div>
			<div className="row">
				<div
					className="col-12 col-md-3 offset-md-3 text-left my-5 py-5 "
					style={{ fontSize: "15px" }}>
					<h6 className="letter-spacing-3 fw-bolder">
						NOUVEAU PRODUIT
					</h6>
					<p className="my-4 font-weight-400">
						Ceci est un paragraphe. Survolez-moi avec votre souris
						d'ordinateur et cliquez une fois pour que le menu
						s'affiche. Double-cliquez pour éditer directement le
						texte. Vous pouvez aussi me déplacer n'importe où sur la
						page par la méthode du «Glisser et Déposer»
					</p>
					<Link
						to="/boutique/Ordinateur-portable2"
						className=" btn-acheter d-inline-block bg-black text-white w-70 text-center small py-3 rounded-pill text-decoration-none">
						ACHETER
					</Link>
				</div>
				<img
					src="/Laptop-produit.jpg"
					alt="ordi"
					className="col-12 col-md-3  img-fluid "
				/>
			</div>
			<div className="row">
				<div
					className="col-12 part-3"
					style={{
						background: "url('/ipad.jpg') center no-repeat",
						backgroundSize: "cover",
						height: "450px",
					}}>
					{" "}
				</div>
			</div>
			<div className="row bg-black text-white">
				<div className="col-12 col-md-3 center-div py-5 my-5">
					<h6 className="letter-spacing-3 fw-bolder">
						TECHNOLOGIE AVANCEE
					</h6>
					<p className="p-3  font-size-14 text-center">
						Ceci est un paragraphe. Survolez-moi avec votre souris
						d'ordinateur et cliquez une fois pour que le menu
						s'affiche. Double-cliquez pour éditer directement le
						texte. Vous pouvez aussi me déplacer n'importe où sur la
						page par la méthode du «Glisser et Déposer»
					</p>
				</div>
			</div>
		</div>
	);
};

export default Accueil;
