# lucian

Partie front du site-web.

POST - sur la vue `contactpage`\
GET, POST - sur la vue `adminview` - pour y accéder il faut remplir le formulaire de contact de la manière suivante (la route c'est /check; mais j'ai mis une guarde `[canActivate]` qui ne permet pas d'y accéder si cela n'est pas fait à travers le formulaire) : \
`Prénom : Lucian`\
`Nom : Mocan`\
`Email : check@submit.com`\
`Message : (laisser le champs vide, c'est le seul cas où ça marche).`

Pas de vues pour les pages Projets, Parcours, Passions. Ça demandait encore plus de travail.\
Validation de formulaire avec Angular dans le document HTML.

# ProgwebFrontAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

