module.exports = {
  getHomePage: (req, res) => {
    res.render('index.ejs', {
      title: "JavaScript API | Homepage"
    });
  },
};
