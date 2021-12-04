DROP DATABASE IF EXISTS RELOGIOS;
CREATE DATABASE IF NOT EXISTS RELOGIOS;

USE RELOGIOS;

DROP TABLE IF EXISTS RELOGIOS;
DROP TABLE IF EXISTS FABRICANTES;

CREATE TABLE FABRICANTES(
  fab_codigo INT AUTO_INCREMENT,
  fab_nome VARCHAR(30) NOT NULL,
  fab_fantasia VARCHAR(15) NOT NULL,
  fab_pais VARCHAR(20) NOT NULL,
  fab_fundacao INT NOT NULL,
  PRIMARY KEY (fab_codigo)
);

CREATE TABLE RELOGIOS(
  rel_codigo INT AUTO_INCREMENT,
  rel_descricao VARCHAR(30) NOT NULL,
  rel_modelo VARCHAR(20) NOT NULL,
  rel_tipo VARCHAR(15) NOT NULL,
  rel_pulseira VARCHAR(10) NOT NULL,
  rel_garantia INT NOT NULL,
  fab_codigo INT NOT NULL,
  PRIMARY KEY(rel_codigo),
  FOREIGN KEY(fab_codigo) REFERENCES FABRICANTES(fab_codigo)
);

INSERT INTO FABRICANTES VALUES ('1', 'Rolex S. A', 'Rolex', 'Suíça', '1905');
INSERT INTO FABRICANTES VALUES ('2', 'TAG Heuer S.A.', 'TAG Heuer', 'Suíça', '1860');
INSERT INTO FABRICANTES VALUES ('3', 'Breitling SA', 'Breitling', 'Suíça', '1884');

INSERT INTO RELOGIOS VALUES ('1', 'Relógio analógico vermelho', 'Modelo 1', 'Analógico', 'Couro', '3', '1');
INSERT INTO RELOGIOS VALUES ('2', 'Relógio digital preto', 'Modelo 2', 'Digital', 'Couro', '6', '2');
INSERT INTO RELOGIOS VALUES ('3', 'Relógio digital azul', 'Modelo 3', 'Digital', 'Metal', '6', '3');



