module.exports = {
    getExamplesHomePage: (req, res) => {
        res.render('examples_home.ejs', {
            title: "JavaScript API | Examples Homepage",
            example_num: 0
        });
    },
    getBasicEmbedPage: (req, res) => {
        res.render('basic_embed.ejs', {
            title: "JavaScript API | Basic Embed Example",
            example_num: 1
        });
    },
    getDynamicLoadPage: (req, res) => {
        res.render('dynamic_load.ejs', {
            title: "JavaScript API | Dynamic Load Example",
            example_num: 2
        });
    },
    getFilterViewPage: (req, res) => {
        res.render('filter_view.ejs', {
            title: "JavaScript API | Filtering Example",
            example_num: 3
        });
    }
};
