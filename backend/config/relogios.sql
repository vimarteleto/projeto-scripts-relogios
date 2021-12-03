CREATE DATABASE IF NOT EXISTS RELOGIOS;

USE RELOGIOS;

DROP TABLE IF EXISTS REL;
DROP TABLE IF EXISTS FAB;

CREATE TABLE FAB(
  fab_codigo INT PRIMARY KEY,
  fab_nome VARCHAR(30) NOT NULL,
  fab_fantasia VARCHAR(15) NOT NULL,
  fab_pais VARCHAR(20) NOT NULL,
  fab_fundacap INT NOT NULL
);

CREATE TABLE REL(
  rel_codigo INT PRIMARY KEY,
  rel_descricao VARCHAR(30) NOT NULL,
  rel_modelo VARCHAR(20) NOT NULL,
  rel_tipo VARCHAR(15) NOT NULL,
  rel_pulseira VARCHAR(10) NOT NULL,
  rel_garantia INT NOT NULL,
  fab_codigo INT NOT NULL,
  FOREIGN KEY(fab_codigo) REFERENCES FAB(fab_codigo)
);

INSERT INTO FAB VALUES ('1', 'Rolex S. A', 'Rolex', 'Suíça', '1905');
INSERT INTO FAB VALUES ('2', 'TAG Heuer S.A.', 'TAG Heuer', 'Suíça', '1860');
INSERT INTO FAB VALUES ('3', 'Breitling SA', 'Breitling', 'Suíça', '1884');

INSERT INTO REL VALUES ('1', 'Relógio analógico vermelho', 'Modelo 1', 'Analógico', 'Couro', '3', '1');
INSERT INTO REL VALUES ('2', 'Relógio digital preto', 'Modelo 2', 'Digital', 'Couro', '6', '2');
INSERT INTO REL VALUES ('3', 'Relógio digital azul', 'Modelo 3', 'Digital', 'Metal', '6', '3');



