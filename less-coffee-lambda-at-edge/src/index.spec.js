const {addTrailingSlash, resolveIndexPath, rewriteURI} = require('./index');
const Url = require('url-parse');

test('Adds trailing slash correctly on URIs', () => {
    expect(addTrailingSlash(new Url('')).pathname)
        .toBe('/');
    expect(addTrailingSlash(new Url('/')).pathname)
        .toBe('/');
    expect(addTrailingSlash(new Url('/posts')).pathname)
        .toBe('/posts/');
    expect(addTrailingSlash(new Url('/posts/')).pathname)
        .toBe('/posts/');
    expect(addTrailingSlash(new Url('/posts/index.html')).pathname)
        .toBe('/posts/index.html');
});

test('Adds index.html on URIs which have trailing slash', () => {
    expect(resolveIndexPath(new Url('/')).pathname)
        .toBe('/index.html');
    expect(resolveIndexPath(new Url('/posts/')).pathname)
        .toBe('/posts/index.html');
    expect(resolveIndexPath(new Url('/index.html')).pathname)
        .toBe('/index.html');
    expect(resolveIndexPath(new Url('/posts')).pathname)
        .toBe('/posts');
    expect(resolveIndexPath(new Url('')).pathname)
        .toBe('/index.html');
});

test('Resolve URLs using multiple rewrite functions in series', () => {
    expect(rewriteURI(''))
        .toBe('/index.html');
    expect(rewriteURI('/'))
        .toBe('/index.html');
    expect(rewriteURI('/index.html'))
        .toBe('/index.html');
    expect(rewriteURI('/posts'))
        .toBe('/posts/index.html');
    expect(rewriteURI('/posts/'))
        .toBe('/posts/index.html');
    expect(rewriteURI('/posts/index.html'))
        .toBe('/posts/index.html');
    expect(rewriteURI('/posts/pug-go-doro'))
        .toBe('/posts/pug-go-doro/index.html');
    expect(rewriteURI('/posts/pug-go-doro/'))
        .toBe('/posts/pug-go-doro/index.html');
    expect(rewriteURI('/posts/pug-go-doro/index.html'))
        .toBe('/posts/pug-go-doro/index.html');
    expect(rewriteURI('/posts/pug-go-doro/help.png'))
        .toBe('/posts/pug-go-doro/help.png');
    expect(rewriteURI('/posts/pug-go-doro/index.xml'))
        .toBe('/posts/pug-go-doro/index.xml');
    expect(rewriteURI('/posts/pug-go-doro'))
        .toBe('/posts/pug-go-doro/index.html');
    expect(rewriteURI('/posts/pug-go-doro'))
        .toBe('/posts/pug-go-doro/index.html');
});


