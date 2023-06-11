import { Router } from 'express';
import controller from '../controllers/controller';

const router = Router();

// Route to get the movies
router.get('/', controller.getMoviesList);

export default router;