(this.webpackJsonppanier_app=this.webpackJsonppanier_app||[]).push([[0],{31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);c(17);var i=c(1),s=c.n(i),r=c(19),n=c.n(r),a=c(5),l=c(2),o=c(9),d=c(0),j=function(e){return Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-12 text-right trier",children:Object(d.jsx)("form",{children:Object(d.jsxs)("select",{className:"bg-light border-0 small",onChange:function(t){return e.trier(t)},children:[Object(d.jsx)("option",{value:"AtoZ",children:"Titre: de A \xe0 Z"}),Object(d.jsx)("option",{value:"ZtoA",children:"Titre: de Z \xe0 A"}),Object(d.jsx)("option",{value:"Ascendant",children:"Prix: Ascendant"}),Object(d.jsx)("option",{value:"Descendant",children:"Prix: Descendant"}),Object(d.jsx)("option",{value:"Moins",children:"Moins recent"}),Object(d.jsx)("option",{value:"plus",children:"Plus recent"})]})})})})},u=function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(j,{trier:e.trier}),Object(d.jsx)("div",{className:"row",children:e.articles.map((function(e){return Object(d.jsx)("div",{className:"col-12 col-md-6 text-left my-5",children:Object(d.jsx)(a.b,{to:"/boutique/".concat(e.titre),children:Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{src:"/panier_app"+e.image,className:"photo-boutique img-fluid",alt:"ordinateur"}),Object(d.jsx)("h5",{children:e.titre}),Object(d.jsxs)("p",{children:[e.prix,"\u20ac"]})]})})},e.id)}))})]})})},b=c(34),p=function(e){var t=Object(l.f)(),c=e.articles.find((function(e){return e.titre===t.params.titreArticle})),s=Object(i.useState)(1),r=Object(o.a)(s,2),n=r[0],a=r[1];return Object(d.jsxs)("div",{className:"container h-100",children:[Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-12 text-left mt-5 mb-3 px-0 ",children:t.url})}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-12 col-md-5 border p-2 d-flex align-items-center",style:{height:"60vh"},children:Object(d.jsx)("img",{src:"/panier_app"+c.image,alt:c.titre,className:" img-fluid"})}),Object(d.jsxs)("div",{className:"col-12 col-md-6 z-index-1 text-left px-4 py-2",children:[Object(d.jsx)("p",{className:"font-weight-bold",children:c.titre}),Object(d.jsxs)("p",{className:"font-weight-bold",children:[c.prix,"\u20ac "]}),Object(d.jsxs)("form",{onSubmit:function(t){return e.addToPanier(t,n,c)},children:[Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"col-3 col-md-2",children:[Object(d.jsx)("label",{className:"d-block",children:"Quantit\xe9"}),Object(d.jsx)("input",{type:"number",min:"1",className:" form-control rounded-0 px-1",value:n,onChange:function(e){e.preventDefault(),a(e.target.value)}})]})}),Object(d.jsxs)("p",{className:"text-success font-weight-lighter my-2",children:[Object(d.jsx)(b.a,{size:"12"})," En stock"]}),Object(d.jsx)("input",{type:"submit",value:"AJOUTER AU PANIER",className:"w-100 form-control-lg rounded-0 text-white bg-dark border-0 "})]})]})]}),Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"col-12 text-center text-md-left font-smaller py-3",children:[Object(d.jsx)("h5",{className:"fw-bold",children:"Description"}),Object(d.jsx)("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus vitae illo molestiae odit, hic consectetur porro illum ea distinctio sed blanditiis cum nobis enim exercitationem, ipsum sunt sit praesentium? Mollitia distinctio minus itaque. Quis velit adipisci aut minima! Consequatur aliquid obcaecati nihil aut voluptas aperiam et at assumenda aspernatur expedita."})]})})]})},m=function(e){var t=Object(i.useState)([{id:1,titre:"Ordinateur-portable1",image:"/ordi.jpg",prix:499,description:"Description"},{id:2,titre:"Ordinateur-portable2",image:"/ordi.jpg",prix:499,description:"Description"},{id:3,titre:"Ordinateur-portable3",image:"/ordi.jpg",prix:499,description:"Description"}]),c=Object(o.a)(t,2),s=c[0],r=c[1];Object(i.useEffect)((function(){console.log("change"),r(s)}),[s]);var n="boutique"===e.motif?Object(d.jsx)(u,{articles:s,trier:function(e){var t=e.target.value;"AtoZ"===t?s=function(){for(var e=s.slice(),t=!0;t;){t=!1;for(var c=0;c>e.length-1;c++)if(e[c].titre>e[c+1].titre){var i=e[c];e[c]=e[c+1],e[c+1]=i,t=!0}}return e}():"ZtoA"===t&&(s=function(){for(var e=s.slice(),t=!0;t;){t=!1;for(var c=0;c<e.length-1;c++)if(e[c].titre<e[c+1].titre){var i=e[c];e[c]=e[c+1],e[c+1]=i,t=!0}}return e}())}}):Object(d.jsx)(p,{articles:s,addToPanier:e.addToPanier});return Object(d.jsxs)(d.Fragment,{children:[" ",n," "]})},x=function(e){return Object(d.jsx)("div",{className:"row ",style:{backgroundImage:"url(".concat("/panier_app","/part1.jpg)"),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"100vh"},children:Object(d.jsx)("div",{className:" col-12 col-md-8 offset-md-2 text-white position-relative",children:Object(d.jsxs)("div",{className:"part-1 text-right mx-0",children:[Object(d.jsx)("h6",{className:"fw-bolder letter-spacing-3",children:"UNE TECHNOLOGIE REVOLUTIONNAIRE"}),Object(d.jsx)("p",{children:"Ceci est un paragraphe. Survolez-moi avec votre souris d'ordinateur et cliquez une fois pour que le menu s'affiche. Double-cliquez pour \xe9diter directement le texte. Vous pouvez aussi me d\xe9placer n'importe o\xf9 sur la page par la m\xe9thode du \xabGlisser et D\xe9poser\xbb"})]})})})},h=function(e){return Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"col-12 col-md-5 offset-md-1 col-lg-3 offset-lg-3 text-md-left my-5 py-5 ",style:{fontSize:"15px"},children:[Object(d.jsx)("h6",{className:"letter-spacing-3 fw-bolder",children:"NOUVEAU PRODUIT"}),Object(d.jsx)("p",{className:"my-4 font-weight-400",children:"Ceci est un paragraphe. Survolez-moi avec votre souris d'ordinateur et cliquez une fois pour que le menu s'affiche. Double-cliquez pour \xe9diter directement le texte. Vous pouvez aussi me d\xe9placer n'importe o\xf9 sur la page par la m\xe9thode du \xabGlisser et D\xe9poser\xbb"}),Object(d.jsx)(a.b,{to:"/boutique/Ordinateur-portable2",className:" btn-acheter d-inline-block bg-black text-white w-70 text-center small py-2 rounded-pill text-decoration-none",children:"ACHETER"})]}),Object(d.jsx)("img",{src:"/panier_app/Laptop-produit.jpg",alt:"ordi",className:"col-12 col-md-5 col-lg-3 img-fluid "})]})},O=function(e){return Object(d.jsxs)("div",{className:"container-fluid ",children:[Object(d.jsx)(x,{}),Object(d.jsx)(h,{}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-12 part-3",style:{background:"url(".concat("/panier_app","/ipad.jpg) center no-repeat"),backgroundSize:"cover",height:"450px"},children:" "})}),Object(d.jsx)("div",{className:"row bg-black text-white",children:Object(d.jsxs)("div",{className:"col-12 col-md-3 center-div py-5 my-5",children:[Object(d.jsx)("h6",{className:"letter-spacing-3 fw-bolder",children:"TECHNOLOGIE AVANCEE"}),Object(d.jsx)("p",{className:"p-3  font-size-14 text-center",children:"Ceci est un paragraphe. Survolez-moi avec votre souris d'ordinateur et cliquez une fois pour que le menu s'affiche. Double-cliquez pour \xe9diter directement le texte. Vous pouvez aussi me d\xe9placer n'importe o\xf9 sur la page par la m\xe9thode du \xabGlisser et D\xe9poser\xbb"})]})})]})},f=function(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"container-fluid",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-12",style:{background:"url(".concat("/panier_app","/business.jpg) center no-repeat"),height:"300px"}})})}),Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"col-12 col-md-6 offset-md-3 col-lg-5 center-div my-5 py-5 a-propos-text",children:[Object(d.jsx)("h5",{className:"fw-bolder pb-3",children:"A PROPOS"}),Object(d.jsx)("p",{children:"Ceci est un paragraphe. C'est l'endroit id\xe9al pour \xe9crire une description sur votre entreprise ou vos services. Vous pouvez ajouter et modifier le texte. Survolez-moi avec votre souris d'ordinateur et cliquez une fois pour que le menu s\u2019affiche. Double-cliquez pour \xe9diter directement le texte. Vous pouvez aussi me d\xe9placer n'importe o\xf9 sur la page par la m\xe9thode du \xab Glisser et D\xe9poser \xbb ."}),Object(d.jsx)("p",{children:"Ceci est un paragraphe. C'est l'endroit id\xe9al pour \xe9crire une description sur votre entreprise ou vos services. Vous pouvez ajouter et modifier le texte. Survolez-moi avec votre souris d'ordinateur et cliquez une fois pour que le menu s\u2019affiche. Double-cliquez pour \xe9diter directement le texte."}),Object(d.jsx)("p",{children:"Vous pouvez aussi me d\xe9placer n'importe o\xf9 sur la page par la m\xe9thode du \xab Glisser et D\xe9poser \xbb."})]})})}),Object(d.jsx)("div",{className:"container-fluid",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-12",style:{background:"url(".concat("/panier_app","/technology.jpg) center no-repeat"),height:"350px"}})})})]})},v=function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-12",style:{background:"url(".concat("/panier_app","/technology.jpg) center no-repeat"),height:"300px"}})}),Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-12",children:Object(d.jsx)("h5",{className:"fw-bolder",children:"CONTACT"})})})})]})})},N=c(36),g=c(10),w=c.n(g),k=c(35),y=function(e){return Object(d.jsx)("span",{className:" mt-2 mx-0 z-index-2 content-panier bg-white border border-dark px-0",children:0===e.articles.length?Object(d.jsx)("p",{className:"m-0",children:"Votre panier est vide"}):Object(d.jsxs)(d.Fragment,{children:[e.articles.map((function(t){return Object(d.jsxs)("div",{className:"d-flex justify-content-between align-items-center px-1",children:[Object(d.jsx)("img",{src:"/panier_app"+t.image,alt:t.titre,className:"photo-panier"}),Object(d.jsx)("div",{children:Object(d.jsxs)("p",{className:" small text-left",children:[t.titre," ",Object(d.jsx)("br",{}),"Qtit\xe9: ",t.quantite]})}),Object(d.jsxs)("div",{children:[Object(d.jsx)(k.a,{className:"fw-bolder",onClick:function(c){return e.deleteArticles(c,t.id)}}),Object(d.jsxs)("p",{className:"small text-left",children:["Prix unitaire ",Object(d.jsx)("br",{}),t.prix," \u20ac"]})]})]},t.id)})),Object(d.jsxs)("div",{className:"small bg-secondary cursor-pointer px-0 ",children:[Object(d.jsxs)("p",{className:"d-flex justify-content-between m-0",children:[Object(d.jsx)("span",{className:"",children:"SOUS-TOTAL"}),Object(d.jsxs)("span",{className:"",children:[e.coutTotal,"\u20ac"]})]}),Object(d.jsx)("button",{className:" w-75 text-white bg-dark border-0  mb-2 py-1 cursor-pointer",children:"PASSER AU PAIEMENT"})]})]})})},q=function(e){var t=Object(i.useState)(0),c=Object(o.a)(t,2),s=c[0],r=c[1];Object(i.useEffect)((function(){r(e.nbrePanier)}),[e.nbrePanier]);return w()(".panier").mouseover((function(){return w()(".content-panier").css("display","block")})),w()(".panier").mouseout((function(){return w()(".content-panier").css("display","none")})),Object(d.jsx)("header",{className:"menu-desktop",children:Object(d.jsx)("div",{className:"container-fluid",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"col-8 offset-2 d-flex justify-content-between py-3",children:[Object(d.jsx)("div",{children:"Mon logo"}),Object(d.jsxs)("ul",{className:"my-0 px-0 ",children:[Object(d.jsx)("li",{className:"mx-3 link-menu cursor-pointer",children:Object(d.jsx)(a.b,{className:"text-dark text-decoration-none",to:"/",children:"Accueil"})}),Object(d.jsx)("li",{className:"mx-3 link-menu cursor-pointer",children:Object(d.jsx)(a.b,{className:"text-dark text-decoration-none",to:"/boutique",children:"Boutique"})}),Object(d.jsx)("li",{className:"mx-3 link-menu cursor-pointer",children:Object(d.jsx)(a.b,{className:"text-dark text-decoration-none",to:"/a_propos",children:"A propos"})}),Object(d.jsx)("li",{className:"mx-3 link-menu cursor-pointer",children:Object(d.jsx)(a.b,{className:"text-dark text-decoration-none ",to:"/contact",children:"Contact"})}),Object(d.jsxs)("li",{className:"mx-3 link-menu cursor-pointer position-relative panier",children:[Object(d.jsx)(N.a,{className:"mr-2 ",size:"30"}),Object(d.jsxs)(a.b,{className:"text-dark text-decoration-none",to:"/panier",children:["Panier(",s,")"]}),Object(d.jsx)(y,{articles:e.articles,coutTotal:e.coutTotal,deleteArticles:e.deleteArticles})]})]})]})})})})},A=function(e){return Object(d.jsx)("div",{className:"container-fluid",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-12 py-3",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h6",{className:"letter-spacing-3 fw-bolder",children:"COMPAGNIE DE TECHNOLOGIE"}),Object(d.jsx)("p",{className:"mb-0",children:"432 rue des Dunes"}),Object(d.jsx)("p",{children:"75000 Paris"})]})})})})},z=(c(31),function(e){var t=function(){return w()(".overlay").fadeOut()};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:" position-fixed h-100 w-100 z-index-2 overlay",style:{display:"none"},children:Object(d.jsxs)("div",{id:"menu_mobile",className:"h-100 w-100",children:[Object(d.jsx)("i",{className:"fas fa-times fa-2x close-menu",onClick:function(){w()(".overlay").fadeOut()}}),Object(d.jsx)("div",{className:"h-100  d-flex align-items-center position-static justify-content-center",children:Object(d.jsxs)("ul",{className:"col-12 my-0 px-0 text-white",children:[Object(d.jsx)("li",{onClick:t,className:"mx-3 py-2 link-menu d-block cursor-pointer",children:Object(d.jsx)(a.b,{className:" text-decoration-none",to:"/",children:"Accueil"})}),Object(d.jsx)("li",{onClick:t,className:"mx-3 py-2 link-menu d-block cursor-pointer",children:Object(d.jsx)(a.b,{className:" text-decoration-none",to:"/boutique",children:"Boutique"})}),Object(d.jsx)("li",{onClick:t,className:"mx-3 py-2 link-menu d-block cursor-pointer",children:Object(d.jsx)(a.b,{className:" text-decoration-none",to:"/a_propos",children:"A propos"})}),Object(d.jsx)("li",{onClick:t,className:"mx-3 py-2 link-menu d-block cursor-pointer",children:Object(d.jsx)(a.b,{className:" text-decoration-none ",to:"/contact",children:"Contact"})}),Object(d.jsxs)("li",{onClick:t,className:"mx-3 py-2 link-menu d-block cursor-pointer",children:[Object(d.jsx)(N.a,{className:"mr-2 text-black",size:"30"}),Object(d.jsxs)(a.b,{className:" text-decoration-none",to:"/panier",children:["Panier(",e.nbreArticle,")"]})]})]})})]})}),Object(d.jsxs)("div",{className:"hamburger d-flex justify-content-between py-1 px-5",children:[Object(d.jsx)("div",{children:"logo"}),Object(d.jsx)("i",{className:"fas fa-bars fa-2x",id:"open-menu",onClick:function(){w()(".overlay").fadeIn()}})]})]})}),C=function(e){return"accueil"===e.motif?Object(d.jsx)(O,{}):"boutique"===e.motif?Object(d.jsx)(m,{motif:"boutique"}):"produit"===e.motif?Object(d.jsx)(m,{addToPanier:e.addToPanier,motif:"produit"}):"contact"===e.motif?Object(d.jsx)(v,{}):"a_propos"===e.motif?Object(d.jsx)(f,{}):void 0},E=function(e){var t=Object(i.useState)(0),c=Object(o.a)(t,2),s=c[0],r=c[1],n=Object(i.useState)([]),a=Object(o.a)(n,2),l=a[0],j=a[1],u=Object(i.useState)(window.innerWidth),b=Object(o.a)(u,2),p=b[0],m=b[1],x=function(){var e=window.innerWidth;m(e)};Object(i.useEffect)((function(){window.addEventListener("resize",x)}));var h=function(){for(var e=0,t=0;t<l.length;t++)e+=l[t].quantite;r(e)};return Object(d.jsxs)(d.Fragment,{children:[p<1200?Object(d.jsx)(z,{windowWidth:p,nbreArticle:s}):Object(d.jsx)(q,{nbrePanier:s,articles:l,coutTotal:function(){for(var e=0,t=0;t<l.length;t++)e+=l[t].quantite*l[t].prix;return e}(),deleteArticles:function(e,t){e.preventDefault();var c=l.findIndex((function(e){return e.id===t}));l.splice(c,1),j(l),h()}}),Object(d.jsx)("main",{className:"position-relative",children:Object(d.jsx)(C,{addToPanier:function(e,t,c){e.preventDefault();var i=l.findIndex((function(e){return e.id===c.id}));if(-1===i){var s={id:c.id,titre:c.titre,image:c.image,prix:c.prix,quantite:parseInt(t)};l.push(s),j(l)}else l[i].quantite+=parseInt(t);h()},motif:e.motif})}),Object(d.jsx)(A,{})]})},P=(c(32),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,37)).then((function(t){var c=t.getCLS,i=t.getFID,s=t.getFCP,r=t.getLCP,n=t.getTTFB;c(e),i(e),s(e),r(e),n(e)}))});n.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(a.a,{basename:"/panier_app",children:Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{exact:!0,path:"/",children:Object(d.jsx)(E,{motif:"accueil"})}),Object(d.jsx)(l.a,{exact:!0,path:"/boutique",children:Object(d.jsx)(E,{motif:"boutique"})}),Object(d.jsx)(l.a,{exact:!0,path:"/contact",children:Object(d.jsx)(E,{motif:"contact"})}),Object(d.jsx)(l.a,{exact:!0,path:"/boutique/:titreArticle",children:Object(d.jsx)(E,{motif:"produit"})}),Object(d.jsx)(l.a,{exact:!0,path:"/a_propos",children:Object(d.jsx)(E,{motif:"a_propos"})}),Object(d.jsx)(l.a,{exact:!0,path:"*",children:Object(d.jsx)(E,{motif:"accueil"})})]})})}),document.getElementById("root")),P()}},[[33,1,2]]]);
//# sourceMappingURL=main.40d93de1.chunk.js.map