import { Router } from 'express';
import userRouter from './user.routes.js';
import videoRouter from './video.routes.js';
import subscriptionRouter from './subscription.routes.js';
import likeRouter from './like.routes.js';
import commentRouter from './comment.routes.js';
import playlistRouter from './playlist.routes.js';
import tweetRouter from './tweet.routes.js';
import dashboardRouter from './dashboard.routes.js';

const router = Router();

router.use('/users', userRouter);
router.use('/videos', videoRouter);
router.use('/subscriptions', subscriptionRouter);
router.use('/likes', likeRouter);
router.use('/comments', commentRouter);
router.use('/playlists', playlistRouter);
router.use('/tweets', tweetRouter);
router.use('/dashboard', dashboardRouter);

export default router;
