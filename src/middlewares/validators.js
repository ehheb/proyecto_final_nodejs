import joi from "joi";
import spanishJoi from "../utils/spanish-joi-messages";

//Validaciones genéricas de la url
export const findInUrl = joi.object({
        id: joi.string().pattern(/^[0-9]+$/, 'numbers').required().messages(spanishJoi)
});

export const validateFindInUrl = (schema) => {
    return async(req, res, next) => {

        try {
            const value = await schema.validateAsync(req.params);
            next();

        } catch (error) {
            res.status(400).json({
                message: error.message
            });
        }
    }
}

export const contentActorIds = joi.object({
    contentId: joi.string().pattern(/^[0-9]+$/, 'numbers').required().messages(spanishJoi),
    actorId: joi.string().pattern(/^[0-9]+$/, 'numbers').required().messages(spanishJoi)
})


export const contentActorIdsBody = joi.object({
    newContentId: joi.string().pattern(/^[0-9]+$/, 'numbers').required().messages(spanishJoi),
    newActorId: joi.string().pattern(/^[0-9]+$/, 'numbers').required().messages(spanishJoi)
})

export const contentDirectorIds = joi.object({
    contentId: joi.string().pattern(/^[0-9]+$/, 'numbers').required().messages(spanishJoi),
    directorId: joi.string().pattern(/^[0-9]+$/, 'numbers').required().messages(spanishJoi)
})


export const contentDirectorIdsBody = joi.object({
    newContentId: joi.string().pattern(/^[0-9]+$/, 'numbers').required().messages(spanishJoi),
    newDirectorId: joi.string().pattern(/^[0-9]+$/, 'numbers').required().messages(spanishJoi)
})

export const contentGenreIds = joi.object({
    contentId: joi.string().pattern(/^[0-9]+$/, 'numbers').required().messages(spanishJoi),
    genreId: joi.string().pattern(/^[0-9]+$/, 'numbers').required().messages(spanishJoi)
})


export const contentGenreIdsBody = joi.object({
    newContentId: joi.string().pattern(/^[0-9]+$/, 'numbers').required().messages(spanishJoi),
    newGenreId: joi.string().pattern(/^[0-9]+$/, 'numbers').required().messages(spanishJoi)
})

export const validatePivotTableUrl = (schema) => {
    return async(req, res, next) => {
        try {
            const value = await schema.validateAsync(req.params);
            next();
        } catch(error) {
            res.status(400).json({
                message: error.message
            });
        }
    }
}

export const validatePivotTableBody = (schema) => {
    return async(req, res, next) => {
        try {
            const valure = await schema.validateAsync(req.body);
            next();
        } catch(error) {
            res.status(400).json({
                message: error.message
            });
        }
    }
}



//Validaciones genéricas para obtener el nombre de los actores, directores, generos, tipos, idiomas, etc
export const createNameSchema = joi.object({
    name: joi.string().required().messages(spanishJoi)
});

export const validateName = (schema) => {
    return async(req, res, next) => {
        try {
            const value = await schema.validateAsync(req.body);
            next();
        } catch(error) {
            return res.status(400).json({
                message: error.message
            })
        }
    }
}

export const createContentRatingSchema = joi.object({
    contentTypeId: joi.string().pattern(/^[0-9]+$/, 'numbers').required().messages(spanishJoi),
    name: joi.string().required().messages(spanishJoi),
    description: joi.string().required().messages(spanishJoi)
});

export const validateContentRating = (schema) => {
    return async (req, res, next) => {
        try {
            const value = await schema.validateAsync(req.body);
            next();
        } catch(error) {
            return res.status(400).json({
                message: error.message
            });
        }
    }
}

export const episodeSchema = joi.object({
    seasonNum: joi.string().pattern(/^[0-9]+$/, 'numbers').required().messages(spanishJoi), 
    episodeName: joi.string().required().messages(spanishJoi), 
    contentId: joi.string().pattern(/^[0-9]+$/, 'numbers').required().messages(spanishJoi), 
    releaseDate: joi.string().required().messages(spanishJoi), 
    episodeRating: joi.string().pattern(/[+-]?([0-9]*[.])?[0-9]+/, 'numbers').required().messages(spanishJoi), 
    episodeNum: joi.string().pattern(/^[0-9]+$/, 'numbers').required().messages(spanishJoi), 
    description: joi.string().required().messages(spanishJoi), 
    episodeImdbLink: joi.string().required().messages(spanishJoi), 
    episodeScoreVotes: joi.string().pattern(/^[0-9]+$/, 'numbers').required().messages(spanishJoi)
});

export const validateEpisode = (schema) => {
    return async(req, res, next) => {
        try {
            const value = await schema.validateAsync(req.body);
            next();

        } catch(error) {
            return res.status(400).json({
                message: error.message
            });
        }
    }
}

export const createContentSchema = joi.object({
    title: joi.string().required().messages(spanishJoi),
    description: joi.string().required().messages(spanishJoi),
    totalSeasons: joi.string().pattern(/^[0-9]+$/, 'numbers').required().messages(spanishJoi),
    imdbScore: joi.string().pattern(/[+-]?([0-9]*[.])?[0-9]+/, 'numbers').required().messages(spanishJoi),
    releaseDates: joi.string().required().messages(spanishJoi),
    playTime : joi.string().required().messages(spanishJoi),
    contentRatingId: joi.string().pattern(/^[0-9]+$/, 'numbers').required().messages(spanishJoi),
    totalEpisodes: joi.string().pattern(/^[0-9]+$/, 'numbers').required().messages(spanishJoi),
    contentTypeId: joi.string().pattern(/^[0-9]+$/, 'numbers').required().messages(spanishJoi),
    imdbLink: joi.string().required().messages(spanishJoi),
    imdbScoreVotes: joi.string().pattern(/^[0-9]+$/, 'numbers').required().messages(spanishJoi),
    ratingDetails: joi.string().required().messages(spanishJoi),
    languages: joi.array().items(joi.string().required()).required().messages(spanishJoi)
});

export const validateContent = (schema) => {
    return async (req, res, next) => {
        try {
            const value = await schema.validateAsync(req.body);
            next();
        } catch(error) {
            return res.status(400).json({
                message: error.message
            });
        }
    }
}

//Validaciones específicas para las funciones de los usuarios
export const signupSchema = joi.object({
    firstName: joi.string().required().messages(spanishJoi),
    lastName: joi.string().required().messages(spanishJoi),
    email: joi.string().email().required().messages(spanishJoi),
    password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,30}$')).required().messages(spanishJoi)
});

export const validateSignup = (schema) => {
    return async(req, res, next) => {

        try {
            const value = await schema.validateAsync(req.body);
            next();

        } catch (error) {
            return res.status(400).json({
                message: error.message
            });
        }
    }
}

export const loginSchema = joi.object({
    email: joi.string().email().required().messages(spanishJoi),
    password: joi.string().required()
});

export const validateLogin = (schema) => {
    return async(req, res, next) => {

        try {
            const value = await schema.validateAsync(req.body);
            next();

        } catch (error) {
            return res.status(400).json({
                message: error.message
            });
        }
    }
}

export const resetPassSchema = joi.object({
    email: joi.string().email().required().messages(spanishJoi)
});

export const validateResetPass = (schema) => {
    return async(req, res, next) => {

        try {
            const value = await schema.validateAsync(req.body);
            next();

        } catch (error) {
            return res.status(400).json({
                message: error.message
            });
        }
    }
}

export const updatePassSchema = joi.object({
    token: joi.string().uuid().required().messages(spanishJoi),
    password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,30}$')).required().messages(spanishJoi)
});

export const validateUpdatePass = (schema) => {
    return async(req, res, next) => {

        try {
            const value = await schema.validateAsync(req.body);
            next();

        } catch(error) {
            return res.status(400).json({
                message: error.message
            });
        }
    }
}

export const roleSchema = joi.object({
    name : joi.string().pattern(new RegExp('^[a-zA-Z]+$')).required().messages(spanishJoi)
});

export const validateRole = (schema) => {
    return async(req, res, next) => {

        try {
            const value = await schema.validateAsync(req.body);
            next();

        } catch (error) {
            return res.status(400).json({
                message: error.message
            })
        }
    }
}

export const userRoleSchema = joi.object({
    userId : joi.string().pattern(/^[0-9]+$/, 'numbers').required().messages(spanishJoi),
    roleId : joi.string().pattern(/^[0-9]+$/, 'numbers').required().messages(spanishJoi)
});

export const validateUserRole = (schema) => {
    return async(req, res, next) => {

        try {
            const value = await schema.validateAsync(req.params);
            next();

        } catch(error) {
            res.status(400).json({
                message: error.message
            });
        }
    } 
}
