import authRoutes from "./routes/auth";
import userRoutes from "./routes/users";
import roleRoutes from "./routes/roles";
import actorsRoutes from "./routes/imdb/actors";
import directorsRoutes from "./routes/imdb/directors";
import contentTypesRoutes from "./routes/imdb/contentTypes";
import genresRoutes from "./routes/imdb/genres";
import languagesRoutes from "./routes/imdb/languages";
import contentRatingsRoutes from "./routes/imdb/contentRatings";
import contentsRoutes from "./routes/imdb/contents";
import episodeRoutes from "./routes/imdb/episodeList";
import contentActorRoutes from "./routes/imdb/contentActors";
import contentDirectorRoutes from "./routes/imdb/contentDirectors";
import contentGenreRoutes from "./routes/imdb/contentGenres";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import jwt from "express-jwt";
import swaggerUI from "swagger-ui-express";
import swaggerDocument from "../swagger.json";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

const authJWT = { secret: process.env.SECRET_KEY, algorithms: ["HS256"]}

//Todas las rutas para la base de datos imdb
app.use("/api/v1", actorsRoutes);
app.use("/api/v1", directorsRoutes);
app.use("/api/v1", contentTypesRoutes);
app.use("/api/v1", genresRoutes);
app.use("/api/v1", languagesRoutes);
app.use("/api/v1", contentRatingsRoutes);
app.use("/api/v1", contentsRoutes);
app.use("/api/v1", episodeRoutes);
app.use("/api/v1", contentActorRoutes);
app.use("/api/v1", contentDirectorRoutes);
app.use("/api/v1", contentGenreRoutes)

//Todas las rutas del signin, signup, addroles, resetpassword
app.use("/api/v1",authRoutes);
app.use("/api/v1", jwt(authJWT), userRoutes);
app.use("/api/v1", jwt(authJWT), roleRoutes);


export default app;
