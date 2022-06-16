const path = require('path');

exports.createPages = ({ actions }) => {
    const { createPage } = actions

    createPage({
        path: '/created',
        component: path.resolve('./src/templates/generic.js')
    })
}