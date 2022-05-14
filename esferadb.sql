-- MySQL Script generated by MySQL Workbench
-- sex 06 mai 2022 20:43:00
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `EsferaTesteDevelopment` DEFAULT CHARACTER SET utf8 ;
USE `EsferaTesteDevelopment` ;

-- -----------------------------------------------------
-- Table `EsferaTesteDevelopment`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `EsferaTesteDevelopment`.`User` (
  `id` CHAR(36) NOT NULL,
  `Nome` TEXT NOT NULL,
  `Sobrenome` TEXT NOT NULL,
  `CPF` CHAR(11) NULL,
  `createdAt` TIMESTAMP NOT NULL,
  `updatedAt` TIMESTAMP NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `EsferaTesteDevelopment`.`Contatos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `EsferaTesteDevelopment`.`Contatos` (
    `id` CHAR(36) NOT NULL,
    `Telefone` VARCHAR(20) NOT NULL,
    `Email` TEXT NULL,
    `UserId` CHAR(36) NOT NULL,
    `createdAt` TIMESTAMP NOT NULL,
    `updatedAt` TIMESTAMP NULL,
    PRIMARY KEY (`id`),
    INDEX `fk_Contatos_User_idx` (`UserId` ASC),
    CONSTRAINT `fk_Contatos_User`
        FOREIGN KEY (`UserId`)
        REFERENCES `EsferaTesteDevelopment`.`User` (`id`)
        ON DELETE CASCADE
        ON UPDATE NO ACTION
)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `EsferaTesteDevelopment`.`Endereco`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `EsferaTesteDevelopment`.`Endereco` (
  `id` CHAR(36) NOT NULL,
  `Cep` CHAR(8) NOT NULL,
  `Logradouro` TEXT NOT NULL,
  `Numero` VARCHAR(10) NOT NULL,
  `Complemento` TEXT NULL,
  `Bairro` TEXT NOT NULL,
  `Cidade` TEXT NOT NULL,
  `Estado` CHAR(2) NOT NULL,
  `UserId` CHAR(36) NOT NULL,
  `createdAt` TIMESTAMP NOT NULL,
  `updatedAt` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Endereco_User_idx` (`UserId` ASC),
  CONSTRAINT `fk_Endereco_User`
    FOREIGN KEY (`UserId`)
    REFERENCES `EsferaTesteDevelopment`.`User` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
