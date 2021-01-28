import express from 'express';
import {getPosts, createPost, updatePost} from '../controllers/post.js';

const router = express.Router();

router.get('/' , getPosts);
router.post('/' , createPost);
router.patch('/', updatePost);

export default router;