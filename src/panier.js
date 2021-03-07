import "bootstrap/dist/css/bootstrap.css";
import ContentPanier from "./contentPanier";
import React, { useState } from "react";
import Article from "./article";
import Accueil from "./accueil";
import Apropos from "./apropos";
import Contact from "./contact";
import Header from "./header";
import Footer from "./footer";

const ContentPage = (props) => {
	if (props.motif === "accueil") {
		return <Accueil />;
	} else if (props.motif === "boutique") {
		return <Article motif="boutique" />;
	} else if (props.motif === "produit") {
		return <Article addToPanier={props.addToPanier} motif="produit" />;
	} else if (props.motif === "contact") {
		return <Contact />;
	} else if (props.motif === "a_propos") {
		return <Apropos />;
	}
};

const Panier = (props) => {
	const [nbreArticle, setNbreArticle] = useState(0);
	const [isOnLink, setIsOnLink] = useState(false);
	const [listSelectedArticles, setListSlectedArticles] = useState([]);

	const displayContentPanier = () => setIsOnLink(true);

	const removeContentPanier = () => setIsOnLink(false);

	const ajouterArticle = (e, quantite, articleAdded) => {
		e.preventDefault();
		const index = listSelectedArticles.findIndex(
			(article) => article.id === articleAdded.id,
		);
		if (index === -1) {
			const article = {
				id: articleAdded.id,
				titre: articleAdded.titre,
				image: articleAdded.image,
				prix: articleAdded.prix,
				quantite,
			};
			listSelectedArticles.push(article);
			setListSlectedArticles(listSelectedArticles);
		} else {
			listSelectedArticles[index].quantite += quantite;
		}
		console.log(listSelectedArticles);
		countArticles();
	};

	const countArticles = () => {
		let nbreArticle = 0;
		for (let i = 0; i < listSelectedArticles.length; i++) {
			nbreArticle += listSelectedArticles[i].quantite;
		}
		setNbreArticle(nbreArticle);
	};

	const coutTotal = () => {
		let nbreArticle = 0;
		for (let i = 0; i < listSelectedArticles.length; i++) {
			nbreArticle +=
				listSelectedArticles[i].quantite * listSelectedArticles[i].prix;
		}
		return nbreArticle;
	};

	const toggleDisplay = () =>
		isOnLink ? { opacity: "1" } : { opacity: "0" };

	return (
		<>
			<Header
				nbrePanier={nbreArticle}
				onPanier={displayContentPanier}
				outPanier={removeContentPanier}
			/>
			<main className="position-relative">
				<ContentPanier
					style={toggleDisplay()}
					articles={listSelectedArticles}
					coutTotal={coutTotal()}
					onPanier={displayContentPanier}
					outPanier={removeContentPanier}
				/>
				{
					<ContentPage
						addToPanier={ajouterArticle}
						motif={props.motif}
					/>
				}
			</main>
			<Footer />
		</>
	);
};

export default Panier;
