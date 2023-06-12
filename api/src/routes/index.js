const { Router } = require('express');
const router = Router();
const pokemonsRoute=require("./pokemonsRoute")
const typesRoute=require("./typesRoute")

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/pokemons", pokemonsRoute)
router.use("/types", typesRoute)

module.exports = router;
