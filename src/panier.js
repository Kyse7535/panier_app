import "bootstrap/dist/css/bootstrap.css";
import ContentPanier from "./contentPanier";
import React, { useEffect, useState } from "react";
import Article from "./article";
import Accueil from "./accueil";
import Apropos from "./apropos";
import Contact from "./contact";
import Header from "./header";
import Footer from "./footer";
import HeaderMobile from "./headerMobile";

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

	const [listSelectedArticles, setListSlectedArticles] = useState([]);
	const [width, setWidth] = useState(window.innerWidth);

	const updateWidth = () => {
		const width = window.innerWidth;
		setWidth(width);
	};

	useEffect(() => {
		window.addEventListener("resize", updateWidth);
	});

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
				quantite: parseInt(quantite),
			};
			listSelectedArticles.push(article);
			setListSlectedArticles(listSelectedArticles);
		} else {
			listSelectedArticles[index].quantite += parseInt(quantite);
		}
		countArticles();
	};

	const deleteArticles = (e, id) => {
		e.preventDefault();
		const index = listSelectedArticles.findIndex(
			(article) => article.id === id,
		);
		listSelectedArticles.splice(index, 1);
		setListSlectedArticles(listSelectedArticles);
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

	return (
		<>
			{width < 1200 ? (
				<HeaderMobile windowWidth={width} nbreArticle={nbreArticle} />
			) : (
				<Header nbrePanier={nbreArticle} />
			)}

			<main className="position-relative">
				{width < 1200 ? (
					<> </>
				) : (
					<ContentPanier
						articles={listSelectedArticles}
						coutTotal={coutTotal()}
						className="panier"
						deleteArticles={deleteArticles}
					/>
				)}

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
