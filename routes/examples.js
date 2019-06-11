module.exports = {
  getBasicEmbedPage: (req, res) => {
    res.render('basic_embed.ejs', {
      title: "JavaScript API | Basic Embed Examples"
    });
  },
};
