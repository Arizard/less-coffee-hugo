'use strict';
const Url = require('url-parse');

// https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-event-structure.html#example-origin-request
async function handler(event, _context) {
    let request = event.Records[0].cf.request;

    request.uri = rewriteURI(request.uri);

    return request;
}

function makeHref(url) {
    return `${url.origin && url.origin}${url.pathname}`;
}

function addTrailingSlash(url) {
    if (url.pathname === '') {
        url.pathname = '/';
        url.href = makeHref(url);
        return url
    } else {
        if (url.pathname.match(/\./) !== null) {
            return url;
        }
        if (url.pathname.match(/\/$/) === null) {
            url.pathname = `${url.pathname}/`;
            url.href = makeHref(url);
            return url;
        }
    }
    return url;
}

function resolveIndexPath(url) {
    url.pathname = url.pathname.replace(/\/$/, '\/index.html');
    url.href = makeHref(url);
    return url;
}

const rewriters = [
    addTrailingSlash,
    resolveIndexPath
];

function rewriteURI(uri) {
    let url = new Url(uri);
    rewriters.map(
        (rewriter) => {
            console.log('rewriting', url.href);
            url = rewriter(url);
        }
    );

    return url.pathname
}

module.exports = { handler };
