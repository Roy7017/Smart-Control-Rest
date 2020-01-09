DROP DATABASE IF EXISTS controle;
CREATE DATABASE IF NOT EXISTS controle;
USE controle;
CREATE TABLE IF NOT EXISTS controlleur (
    id INTEGER NOT NULL AUTO_INCREMENT,
    matricule VARCHAR(40) NOT NULL,
    info_personne TEXT,
    champs_systeme TEXT,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS modele (
    id INTEGER UNSIGNED NOT NULL,
    manque TEXT,
    description TEXT,
    categorie VARCHAR(40),
    champs_systeme TEXT,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS vehicule (
    id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    immat VARCHAR(40) NOT NULL,
    id_model INTEGER UNSIGNED NOT NULL,
    champs_systeme TEXT,
    PRIMARY KEY (id),
	FOREIGN KEY (id_model) REFERENCES modele(id)
);


CREATE TABLE IF NOT EXISTS enregistreur (
    id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    matricule VARCHAR(40) NOT NULL,
    grade INTEGER NOT NULL,
    info_personne TEXT,
    champs_systeme TEXT,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS type_organisme(
	id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    libelle VARCHAR(40),
    champs_systeme TEXT,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS type_piece(
	id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    libelle INTEGER,
    est_renouvelable BOOLEAN,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS organisme(
	id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    nom VARCHAR(40),
    contact INTEGER,
    id_type INTEGER UNSIGNED,
    champs_systeme TEXT,
    PRIMARY KEY (id),
	FOREIGN KEY (id_type) REFERENCES type_organisme(id)
);

CREATE TABLE IF NOT EXISTS piece (
	id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    id_vehicule INTEGER  UNSIGNED,
    id_provenance INTEGER  UNSIGNED,
    id_type INTEGER  UNSIGNED,
    date_deliv datetime,
    date_expir datetime,
    champs_systeme TEXT,
    PRIMARY KEY (id),
	FOREIGN KEY (id_vehicule) REFERENCES vehicule(id),
	FOREIGN KEY (id_provenance) REFERENCES organisme(id),
	FOREIGN KEY (id_type) REFERENCES type_piece(id)
);

CREATE TABLE IF NOT EXISTS piece_invalide (
	id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    id_controlleur INTEGER,
    champs_systeme TEXT,
    PRIMARY KEY (id),
	FOREIGN KEY (id_controlleur) REFERENCES controlleur(id)
);

