(this.webpackJsonppanier_app=this.webpackJsonppanier_app||[]).push([[0],{31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);c(17);var i=c(1),s=c.n(i),n=c(19),r=c.n(n),a=c(5),l=c(2),o=c(9),d=c(34),j=c(0),u=function(e){return Object(j.jsx)("div",{className:"container-fluid position-absolute z-index-2 end-0 top-0 cursor-pointer",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"col-3 content-panier border border-dark offset-8 px-0",style:{display:"none"},children:0===e.articles.length?Object(j.jsx)("p",{children:"Votre panier est vide"}):Object(j.jsxs)(j.Fragment,{children:[e.articles.map((function(t){return Object(j.jsxs)("div",{className:"d-flex justify-content-between align-items-center px-1",children:[Object(j.jsx)("img",{src:"/panier_app"+t.image,alt:t.titre,className:"photo-panier"}),Object(j.jsx)("div",{children:Object(j.jsxs)("p",{className:" small text-left",children:[t.titre," ",Object(j.jsx)("br",{}),"Qtit\xe9: ",t.quantite]})}),Object(j.jsxs)("div",{children:[Object(j.jsx)(d.a,{className:"fw-bolder",onClick:function(c){return e.deleteArticles(c,t.id)}}),Object(j.jsxs)("p",{className:"small text-left",children:["Prix unitaire ",Object(j.jsx)("br",{}),t.prix," \u20ac"]})]})]},t.id)})),Object(j.jsxs)("div",{className:"small bg-secondary cursor-pointer px-0 ",children:[Object(j.jsxs)("p",{className:"d-flex justify-content-between m-0",children:[Object(j.jsx)("span",{className:"",children:"SOUS-TOTAL"}),Object(j.jsxs)("span",{className:"",children:[e.coutTotal,"\u20ac"]})]}),Object(j.jsx)("button",{className:" w-75 text-white bg-dark border-0  mb-2 py-1 cursor-pointer",children:"PASSER AU PAIEMENT"})]})]})})})})},b=function(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"row",children:e.articles.map((function(e){return Object(j.jsx)("div",{className:"col-12 col-md-6 text-left my-5",children:Object(j.jsx)(a.b,{to:"/boutique/".concat(e.titre),children:Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:"/panier_app"+e.image,className:"photo-boutique img-fluid",alt:"ordinateur"}),Object(j.jsx)("h5",{children:e.titre}),Object(j.jsxs)("p",{children:[e.prix,"\u20ac"]})]})})},e.id)}))})})})},m=c(35),x=function(e){var t=Object(l.f)(),c=e.articles.find((function(e){return e.titre===t.params.titreArticle})),s=Object(i.useState)(1),n=Object(o.a)(s,2),r=n[0],a=n[1];return Object(j.jsxs)("div",{className:"container h-100",children:[Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"col-12 text-left mt-5 mb-3 px-0 ",children:t.url})}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-12 col-md-5 border p-2 d-flex align-items-center",style:{height:"60vh"},children:Object(j.jsx)("img",{src:"/panier_app"+c.image,alt:c.titre,className:" img-fluid"})}),Object(j.jsxs)("div",{className:"col-12 col-md-6 z-index-1 text-left px-4 py-2",children:[Object(j.jsx)("p",{className:"font-weight-bold",children:c.titre}),Object(j.jsxs)("p",{className:"font-weight-bold",children:[c.prix,"\u20ac "]}),Object(j.jsxs)("form",{onSubmit:function(t){return e.addToPanier(t,r,c)},children:[Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-3 col-md-2",children:[Object(j.jsx)("label",{className:"d-block",children:"Quantit\xe9"}),Object(j.jsx)("input",{type:"number",min:"1",className:" form-control rounded-0 px-1",value:r,onChange:function(e){e.preventDefault(),a(e.target.value)}})]})}),Object(j.jsxs)("p",{className:"text-success font-weight-lighter my-2",children:[Object(j.jsx)(m.a,{size:"12"})," En stock"]}),Object(j.jsx)("input",{type:"submit",value:"AJOUTER AU PANIER",className:"w-100 form-control-lg rounded-0 text-white bg-dark border-0 "})]})]})]}),Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-12 text-center text-md-left font-smaller py-3",children:[Object(j.jsx)("h5",{className:"fw-bold",children:"Description"}),Object(j.jsx)("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus vitae illo molestiae odit, hic consectetur porro illum ea distinctio sed blanditiis cum nobis enim exercitationem, ipsum sunt sit praesentium? Mollitia distinctio minus itaque. Quis velit adipisci aut minima! Consequatur aliquid obcaecati nihil aut voluptas aperiam et at assumenda aspernatur expedita."})]})})]})},p=function(e){var t=[{id:1,titre:"Ordinateur-portable1",image:"/ordi.jpg",prix:499,description:"Description"},{id:2,titre:"Ordinateur-portable2",image:"/ordi.jpg",prix:499,description:"Description"},{id:3,titre:"Ordinateur-portable3",image:"/ordi.jpg",prix:499,description:"Description"}],c="boutique"===e.motif?Object(j.jsx)(b,{articles:t}):Object(j.jsx)(x,{articles:t,addToPanier:e.addToPanier});return Object(j.jsxs)(j.Fragment,{children:[" ",c," "]})},O=function(e){return Object(j.jsx)("div",{className:"row ",style:{backgroundImage:"url(".concat("/panier_app","/part1.jpg)"),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"100vh"},children:Object(j.jsx)("div",{className:" col-12 col-md-8 offset-md-2 text-white position-relative",children:Object(j.jsxs)("div",{className:"part-1 text-right mx-0",children:[Object(j.jsx)("h6",{className:"fw-bolder letter-spacing-3",children:"UNE TECHNOLOGIE REVOLUTIONNAIRE"}),Object(j.jsx)("p",{children:"Ceci est un paragraphe. Survolez-moi avec votre souris d'ordinateur et cliquez une fois pour que le menu s'affiche. Double-cliquez pour \xe9diter directement le texte. Vous pouvez aussi me d\xe9placer n'importe o\xf9 sur la page par la m\xe9thode du \xabGlisser et D\xe9poser\xbb"})]})})})},h=function(e){return Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("div",{className:"col-12 col-md-5 offset-md-1 col-lg-3 offset-lg-3 text-md-left my-5 py-5 ",style:{fontSize:"15px"},children:[Object(j.jsx)("h6",{className:"letter-spacing-3 fw-bolder",children:"NOUVEAU PRODUIT"}),Object(j.jsx)("p",{className:"my-4 font-weight-400",children:"Ceci est un paragraphe. Survolez-moi avec votre souris d'ordinateur et cliquez une fois pour que le menu s'affiche. Double-cliquez pour \xe9diter directement le texte. Vous pouvez aussi me d\xe9placer n'importe o\xf9 sur la page par la m\xe9thode du \xabGlisser et D\xe9poser\xbb"}),Object(j.jsx)(a.b,{to:"/boutique/Ordinateur-portable2",className:" btn-acheter d-inline-block bg-black text-white w-70 text-center small py-2 rounded-pill text-decoration-none",children:"ACHETER"})]}),Object(j.jsx)("img",{src:"/panier_app/Laptop-produit.jpg",alt:"ordi",className:"col-12 col-md-5 col-lg-3 img-fluid "})]})},f=function(e){return Object(j.jsxs)("div",{className:"container-fluid ",children:[Object(j.jsx)(O,{}),Object(j.jsx)(h,{}),Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"col-12 part-3",style:{background:"url(".concat("/panier_app","/ipad.jpg) center no-repeat"),backgroundSize:"cover",height:"450px"},children:" "})}),Object(j.jsx)("div",{className:"row bg-black text-white",children:Object(j.jsxs)("div",{className:"col-12 col-md-3 center-div py-5 my-5",children:[Object(j.jsx)("h6",{className:"letter-spacing-3 fw-bolder",children:"TECHNOLOGIE AVANCEE"}),Object(j.jsx)("p",{className:"p-3  font-size-14 text-center",children:"Ceci est un paragraphe. Survolez-moi avec votre souris d'ordinateur et cliquez une fois pour que le menu s'affiche. Double-cliquez pour \xe9diter directement le texte. Vous pouvez aussi me d\xe9placer n'importe o\xf9 sur la page par la m\xe9thode du \xabGlisser et D\xe9poser\xbb"})]})})]})},N=function(e){return Object(j.jsxs)("div",{children:["A propos de moi au : ",e.nbrePanier," "]})},v=function(e){return Object(j.jsxs)("div",{children:["Contact moi au : ",e.nbrePanier," "]})},g=c(36),w=c(11),k=c.n(w),y=function(e){var t=Object(i.useState)(0),c=Object(o.a)(t,2),s=c[0],n=c[1];Object(i.useEffect)((function(){n(e.nbrePanier)}),[e.nbrePanier]);return Object(j.jsx)("header",{className:"menu-desktop",children:Object(j.jsx)("div",{className:"container-fluid",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-8 offset-2 d-flex justify-content-between py-3",children:[Object(j.jsx)("div",{children:"Mon logo"}),Object(j.jsxs)("ul",{className:"my-0 px-0 ",children:[Object(j.jsx)("li",{className:"mx-3 link-menu cursor-pointer",children:Object(j.jsx)(a.b,{className:"text-dark text-decoration-none",to:"/",children:"Accueil"})}),Object(j.jsx)("li",{className:"mx-3 link-menu cursor-pointer",children:Object(j.jsx)(a.b,{className:"text-dark text-decoration-none",to:"/boutique",children:"Boutique"})}),Object(j.jsx)("li",{className:"mx-3 link-menu cursor-pointer",children:Object(j.jsx)(a.b,{className:"text-dark text-decoration-none",to:"/a_propos",children:"A propos"})}),Object(j.jsx)("li",{className:"mx-3 link-menu cursor-pointer",children:Object(j.jsx)(a.b,{className:"text-dark text-decoration-none ",to:"/contact",children:"Contact"})}),Object(j.jsxs)("li",{className:"mx-3 link-menu cursor-pointer panier",onMouseEnter:function(){return k()(".content-panier").fadeIn()},onMouseLeave:function(){return k()(".content-panier").fadeOut()},children:[Object(j.jsx)(g.a,{className:"mr-2 ",size:"30"}),Object(j.jsxs)(a.b,{className:"text-dark text-decoration-none",to:"/panier",children:["Panier(",s,")"]})]})]})]})})})})},q=function(e){return Object(j.jsx)("div",{className:"container-fluid",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"col-12 py-3",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h6",{className:"letter-spacing-3 fw-bolder",children:"COMPAGNIE DE TECHNOLOGIE"}),Object(j.jsx)("p",{className:"mb-0",children:"432 rue des Dunes"}),Object(j.jsx)("p",{children:"75000 Paris"})]})})})})},E=(c(31),function(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:" position-fixed h-100 w-100 z-index-2 overlay",style:{display:"none"},children:Object(j.jsxs)("div",{id:"menu_mobile",className:"h-100 w-100",children:[Object(j.jsx)("i",{className:"fas fa-times fa-2x close-menu",onClick:function(){k()(".overlay").fadeOut()}}),Object(j.jsx)("div",{className:"h-100  d-flex align-items-center position-static justify-content-center",children:Object(j.jsxs)("ul",{className:"col-12 my-0 px-0 text-white",children:[Object(j.jsx)("li",{className:"mx-3 py-2 link-menu d-block cursor-pointer",children:Object(j.jsx)(a.b,{className:" text-decoration-none",to:"/",children:"Accueil"})}),Object(j.jsx)("li",{className:"mx-3 py-2 link-menu d-block cursor-pointer",children:Object(j.jsx)(a.b,{className:" text-decoration-none",to:"/boutique",children:"Boutique"})}),Object(j.jsx)("li",{className:"mx-3 py-2 link-menu d-block cursor-pointer",children:Object(j.jsx)(a.b,{className:" text-decoration-none",to:"/a_propos",children:"A propos"})}),Object(j.jsx)("li",{className:"mx-3 py-2 link-menu d-block cursor-pointer",children:Object(j.jsx)(a.b,{className:" text-decoration-none ",to:"/contact",children:"Contact"})}),Object(j.jsxs)("li",{className:"mx-3 py-2 link-menu d-block cursor-pointer",children:[Object(j.jsx)(g.a,{className:"mr-2 text-black",size:"30"}),Object(j.jsxs)(a.b,{className:" text-decoration-none",to:"/panier",children:["Panier(",e.nbreArticle,")"]})]})]})})]})}),Object(j.jsxs)("div",{className:"hamburger d-flex justify-content-between py-1 px-5",children:[Object(j.jsx)("div",{children:"logo"}),Object(j.jsx)("i",{className:"fas fa-bars fa-2x",id:"open-menu",onClick:function(){k()(".overlay").fadeIn()}})]})]})}),A=function(e){return"accueil"===e.motif?Object(j.jsx)(f,{}):"boutique"===e.motif?Object(j.jsx)(p,{motif:"boutique"}):"produit"===e.motif?Object(j.jsx)(p,{addToPanier:e.addToPanier,motif:"produit"}):"contact"===e.motif?Object(j.jsx)(v,{}):"a_propos"===e.motif?Object(j.jsx)(N,{}):void 0},z=function(e){var t=Object(i.useState)(0),c=Object(o.a)(t,2),s=c[0],n=c[1],r=Object(i.useState)([]),a=Object(o.a)(r,2),l=a[0],d=a[1],b=Object(i.useState)(window.innerWidth),m=Object(o.a)(b,2),x=m[0],p=m[1],O=function(){var e=window.innerWidth;p(e)};Object(i.useEffect)((function(){window.addEventListener("resize",O)}));var h=function(){for(var e=0,t=0;t<l.length;t++)e+=l[t].quantite;n(e)};return Object(j.jsxs)(j.Fragment,{children:[x<1200?Object(j.jsx)(E,{windowWidth:x,nbreArticle:s}):Object(j.jsx)(y,{nbrePanier:s}),Object(j.jsxs)("main",{className:"position-relative",children:[x<1200?Object(j.jsx)(j.Fragment,{children:" "}):Object(j.jsx)(u,{articles:l,coutTotal:function(){for(var e=0,t=0;t<l.length;t++)e+=l[t].quantite*l[t].prix;return e}(),className:"panier",deleteArticles:function(e,t){e.preventDefault();var c=l.findIndex((function(e){return e.id===t}));l.splice(c,1),d(l),h()}}),Object(j.jsx)(A,{addToPanier:function(e,t,c){e.preventDefault();var i=l.findIndex((function(e){return e.id===c.id}));if(-1===i){var s={id:c.id,titre:c.titre,image:c.image,prix:c.prix,quantite:parseInt(t)};l.push(s),d(l)}else l[i].quantite+=parseInt(t);h()},motif:e.motif})]}),Object(j.jsx)(q,{})]})},P=(c(32),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,37)).then((function(t){var c=t.getCLS,i=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),i(e),s(e),n(e),r(e)}))});r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(a.a,{basename:"/panier_app",children:Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{exact:!0,path:"/",children:Object(j.jsx)(z,{motif:"accueil"})}),Object(j.jsx)(l.a,{exact:!0,path:"/boutique",children:Object(j.jsx)(z,{motif:"boutique"})}),Object(j.jsx)(l.a,{exact:!0,path:"/contact",children:Object(j.jsx)(z,{motif:"contact"})}),Object(j.jsx)(l.a,{exact:!0,path:"/boutique/:titreArticle",children:Object(j.jsx)(z,{motif:"produit"})}),Object(j.jsx)(l.a,{exact:!0,path:"/a_propos",children:Object(j.jsx)(z,{motif:"a_propos"})}),Object(j.jsx)(l.a,{exact:!0,path:"*",children:Object(j.jsx)(z,{motif:"accueil"})})]})})}),document.getElementById("root")),P()}},[[33,1,2]]]);
//# sourceMappingURL=main.511682e9.chunk.js.map