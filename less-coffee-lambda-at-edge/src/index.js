'use strict';
const Url = require('url-parse');

exports.handler = (event, context, callback) => {

    let request = event.Records[0].cf.request;

    let newUri = rewriteURI(request.uri);

    console.log(`Rewrite ${request.uri} to ${newUri}`);

    request.uri = newUri;

    return callback(null, request);
};

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

exports.addTrailingSlash = addTrailingSlash;
exports.resolveIndexPath = resolveIndexPath;
exports.rewriteURI = rewriteURI;