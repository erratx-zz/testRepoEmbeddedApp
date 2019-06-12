module.exports = {
    getExamplesHomePage: (req, res) => {
        res.render('examples_home.ejs', {
            title: "JavaScript API | Examples Homepage"
        });
    },
    getBasicEmbedPage: (req, res) => {
        res.render('basic_embed.ejs', {
            title: "JavaScript API | Basic Embed Examples"
        });
    },
};
