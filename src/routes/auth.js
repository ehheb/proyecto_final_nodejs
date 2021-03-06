import express from "express";
import {signup} from "../controllers/signup";
import {login} from "../controllers/login";
import {validateSignup, signupSchema, validateLogin, loginSchema } from "../middlewares/validators";
import {validateResetPass, resetPassSchema, validateUpdatePass, updatePassSchema } from "../middlewares/validators";
import {resetPassword, updatePassword} from "../controllers/reset_password";

const router = express.Router();

//Rutas de para crear cuenta, inicar sesión y restablecer la contraseña
router.post("/signup", validateSignup(signupSchema), signup);
router.post("/login", validateLogin(loginSchema), login);
router.post("/reset-password", validateResetPass(resetPassSchema), resetPassword);
router.put("/users/:userId/update-password/", validateUpdatePass(updatePassSchema), updatePassword);


export default router;

