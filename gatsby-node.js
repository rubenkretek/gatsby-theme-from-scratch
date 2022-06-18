const path = require('path');
const data = require('./data');

exports.createPages = ({ actions }) => {
    const { createPage } = actions;
    console.log(data);
    data.map(page => {
        createPage({
            path: page.slug,
            component: path.resolve('./src/templates/generic.js'),
            context: {
                title: page.title,
                pageText: page.pageText
            }
        })
    })
}