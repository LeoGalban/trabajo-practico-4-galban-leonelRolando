import express from 'express';
import Character from "../models/character.model";

// Obtener todos los personajes
export const getAllCharacters = async (req, res) => {
    try {
        const characters = await Character.findAll();
        res.status(200).json(characters);
    } catch (error) {
        res.status(500).json({ error: "No se pudo obtener todos los personajes" });
    }
};

// Obtener un personaje por ID
export const getCharacterById = async (req, res) => {
    try {
        const character = await Character.findByPk(req.params.id);
        if (!character) {
            return res.status(404).json({ error: "Personaje no encontrado" });
        }
        res.status(200).json(character);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener el personaje" });
    }
};

// Crear un nuevo personaje
export const createCharacter = async (req, res) => {
    try {
        const { name, ki, race, gender, description } = req.body;
        console.log(req.body);

        if (!name || !ki || !race || !gender) {
            return res.status(400).json({ error: "Faltan campos obligatorios" });
        }

        if (isNaN(ki)) {
            return res.status(400).json({ error: "El ki debe ser un número entero" });
        }

        if (gender !== "Masculino" && gender !== "Femenino") {
            return res.status(400).json({ error: "El género solo puede ser Masculino o Femenino" });
        }

        const newCharacter = await Character.create({
            name,
            ki: parseInt(ki),
            race,
            gender,
            description,
        });

        res.status(200).json(newCharacter);
    } catch (error) {
        if (error.name === "SequelizeUniqueConstraintError") {
            res.status(400).json({ error: "El nombre ya está en uso" });
        } else {
            res.status(500).json({ error: "Error al crear el personaje" });
        }
    }
};
