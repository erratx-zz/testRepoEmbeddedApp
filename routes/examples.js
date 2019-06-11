module.exports = {
    var examplePages = {'basic_embed.ejs'}
  getBasicEmbedPage: (req, res) => {
    res.render(examplePages[0], {
      title: "JavaScript API | Basic Embed Examples"
      exampleNumber: 1;
    });
  },
};
