// import express from 'express';

// import post from '../controllers/posts';
// import validate from '../middleware/postValidations';
// import Auth from '../middleware/auth';


// const postRouter = express.Router();

// const { verifyCreate, verifyDel, verifyGet } = validate;
// const {create, getPosts, getNotifications, deletePost, get } = post;
// const { verifyToken } = Auth;


// postRouter.route('/api/v1/create').post(verifyToken, verifyCreate, create);
// postRouter.route('/api/v1/post/:post_id').get(verifyToken, verifyGet, get);
// postRouter.route('/api/v1/delete/:post_id').delete(verifyToken, verifyDel, deletePost);
// postRouter.route('/api/v1/posts').get(verifyToken, getPosts);
// postRouter.route('/api/v1/notifications').get(verifyToken, getNotifications);


// export default postRouter;