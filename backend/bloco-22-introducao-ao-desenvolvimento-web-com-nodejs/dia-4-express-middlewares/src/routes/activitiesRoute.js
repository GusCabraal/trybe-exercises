const express = require('express');
const {
    readActivities,
    getActivities,
} = require('../utils/readAndWriteFiles');
const fieldsValidation = require('../middlewares/fieldsValidation');
const nameValidation = require('../middlewares/nameValidation');

const activitiesRoute = express.Router();

activitiesRoute.post('/', fieldsValidation, nameValidation, async (request, response) => {
    const activities = await readActivities();
    const newActivity = request.body;
    activities.push(newActivity);
    response.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
});

activitiesRoute.get('/', async (req, res) => {
  // req.body.qq.coisa;
  const posts = await getActivities();
  res.status(201).json(posts);
});

activitiesRoute.use(fieldsValidation, nameValidation);

// route.post('/', async (req, res) => {
//   const blogPost = req.body;

//   const id = await getBlogPostLastId() + 1;
//   const newBlog = {
//     id,
//     ...blogPost,
//     createdAt: new Date(),
//     updatedAt: new Date(),
//   };

//   await insertBlogPostFile(newBlog);

//   res.status(201).json(newBlog);
// });

// route.put('/:id', async (req, res) => {
//   const blogPost = req.body;

//   const { id } = req.params;
//   blogPost.updatedAt = new Date();
//   const blog = await changeBlogPostFile(blogPost, id);

//   res.status(200).json(blog);
// });

module.exports = activitiesRoute;