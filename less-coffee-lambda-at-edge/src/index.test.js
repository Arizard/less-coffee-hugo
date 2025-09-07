const { handler } = require('./index.js');

test('Handler processes Lambda@Edge event correctly', () => {
    const event = {
        Records: [{
            cf: {
                request: {
                    uri: '/posts'
                }
            }
        }]
    };

    const callback = jest.fn();

    handler(event, null, callback);

    expect(callback).toHaveBeenCalledWith(null, {
        uri: '/posts/index.html'
    });
});

test('Handler handles root path', () => {
    const event = {
        Records: [{
            cf: {
                request: {
                    uri: ''
                }
            }
        }]
    };

    const callback = jest.fn();

    handler(event, null, callback);

    expect(callback).toHaveBeenCalledWith(null, {
        uri: '/index.html'
    });
});

test('Handler handles trailing slash paths', () => {
    const event = {
        Records: [{
            cf: {
                request: {
                    uri: '/posts/'
                }
            }
        }]
    };

    const callback = jest.fn();

    handler(event, null, callback);

    expect(callback).toHaveBeenCalledWith(null, {
        uri: '/posts/index.html'
    });
});

test('Handler preserves file extensions', () => {
    const event = {
        Records: [{
            cf: {
                request: {
                    uri: '/posts/pug-go-doro/help.png'
                }
            }
        }]
    };

    const callback = jest.fn();

    handler(event, null, callback);

    expect(callback).toHaveBeenCalledWith(null, {
        uri: '/posts/pug-go-doro/help.png'
    });
});
