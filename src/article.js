import React from "react";
import Boutique from "./boutique";
import Produit from "./produit";
const Article = (props) => {
	const article = {
		id: 1,
		titre: "Ordinateur-portable1",
		image: "/ordi.jpg",
		prix: 499,
		description: "Description",
	};

	const article2 = {
		id: 2,
		titre: "Ordinateur-portable2",
		image: "/ordi.jpg",
		prix: 499,
		description: "Description",
	};
	const article3 = {
		id: 3,
		titre: "Ordinateur-portable3",
		image: "/ordi.jpg",
		prix: 499,
		description: "Description",
	};
	const listeArticle = [article, article2, article3];
	const content =
		props.motif === "boutique" ? (
			<Boutique articles={listeArticle} />
		) : (
			<Produit articles={listeArticle} addToPanier={props.addToPanier} />
		);

	return <> {content} </>;
};

export default Article;
