const fs = require('fs/promises');

const filename = 'src/files/data.json';

const readActivities = async () => {
  // try {
  const arrayPosts = await fs.readFile(filename, 'utf8');

  return JSON.parse(arrayPosts);
  //   } catch (error) {
  //     return null;
  //   }
};

const getActivities = async () => {
  const arrayActivities = await readActivities();
  return arrayActivities;
};

module.exports = {
  readActivities,
  getActivities,
};
