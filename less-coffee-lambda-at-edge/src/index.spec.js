const index = require('./index');
const Url = require('url-parse');

test('Adds trailing slash correctly on URIs', () => {
    expect(index.addTrailingSlash(new Url('')).pathname)
        .toBe('/');
    expect(index.addTrailingSlash(new Url('/')).pathname)
        .toBe('/');
    expect(index.addTrailingSlash(new Url('/posts')).pathname)
        .toBe('/posts/');
    expect(index.addTrailingSlash(new Url('/posts/')).pathname)
        .toBe('/posts/');
    expect(index.addTrailingSlash(new Url('/posts/index.html')).pathname)
        .toBe('/posts/index.html');
});

test('Adds index.html on URIs which have trailing slash', () => {
    expect(index.resolveIndexPath(new Url('/')).pathname)
        .toBe('/index.html');
    expect(index.resolveIndexPath(new Url('/posts/')).pathname)
        .toBe('/posts/index.html');
    expect(index.resolveIndexPath(new Url('/index.html')).pathname)
        .toBe('/index.html');
    expect(index.resolveIndexPath(new Url('/posts')).pathname)
        .toBe('/posts');
    expect(index.resolveIndexPath(new Url('')).pathname)
        .toBe('/index.html');
});

test('Resolve URLs using multiple rewrite functions in series', () => {
    expect(index.rewriteURI(''))
        .toBe('/index.html');
    expect(index.rewriteURI('/'))
        .toBe('/index.html');
    expect(index.rewriteURI('/index.html'))
        .toBe('/index.html');
    expect(index.rewriteURI('/posts'))
        .toBe('/posts/index.html');
    expect(index.rewriteURI('/posts/'))
        .toBe('/posts/index.html');
    expect(index.rewriteURI('/posts/index.html'))
        .toBe('/posts/index.html');
    expect(index.rewriteURI('/posts/pug-go-doro'))
        .toBe('/posts/pug-go-doro/index.html');
    expect(index.rewriteURI('/posts/pug-go-doro/'))
        .toBe('/posts/pug-go-doro/index.html');
    expect(index.rewriteURI('/posts/pug-go-doro/index.html'))
        .toBe('/posts/pug-go-doro/index.html');
    expect(index.rewriteURI('/posts/pug-go-doro/help.png'))
        .toBe('/posts/pug-go-doro/help.png');
    expect(index.rewriteURI('/posts/pug-go-doro/index.xml'))
        .toBe('/posts/pug-go-doro/index.xml');
    expect(index.rewriteURI('/posts/pug-go-doro'))
        .toBe('/posts/pug-go-doro/index.html');
    expect(index.rewriteURI('/posts/pug-go-doro'))
        .toBe('/posts/pug-go-doro/index.html');
});


