-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql - banco local - ambiente de desenvolvimento
*/

CREATE DATABASE IF NOT EXISTS pi;
USE pi;

CREATE TABLE IF NOT EXISTS usuario (
  id INT PRIMARY KEY NOT NULL,
  nome VARCHAR(45) NULL,
  email VARCHAR(100) NULL,
  senha VARCHAR(100) NULL
);

CREATE TABLE IF NOT EXISTS comentario (
  id INT PRIMARY KEY NOT NULL,
  titulo TEXT NULL,
  descricao TEXT NULL,
  fkUsuario INT NOT NULL,
  FOREIGN KEY (fkUsuario) REFERENCES usuario(id)
);

CREATE TABLE IF NOT EXISTS listaAfazeres (
  id INT PRIMARY KEY NOT NULL,
  descricao TEXT NULL,
  fkUsuario INT NOT NULL,
  FOREIGN KEY (fkUsuario) REFERENCES usuario(id)
);
