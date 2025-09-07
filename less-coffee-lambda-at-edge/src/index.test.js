const { handler } = require('./index.js');

test('Handler processes Lambda@Edge event correctly', async () => {
    const event = {
        Records: [{
            cf: {
                request: {
                    uri: '/posts'
                }
            }
        }]
    };

    const result = await handler(event, null);

    expect(result).toEqual({
        uri: '/posts/index.html'
    });
});

test('Handler handles root path', async () => {
    const event = {
        Records: [{
            cf: {
                request: {
                    uri: ''
                }
            }
        }]
    };

    const result = await handler(event, null);

    expect(result).toEqual({
        uri: '/index.html'
    });
});

test('Handler handles trailing slash paths', async () => {
    const event = {
        Records: [{
            cf: {
                request: {
                    uri: '/posts/'
                }
            }
        }]
    };

    const result = await handler(event, null);

    expect(result).toEqual({
        uri: '/posts/index.html'
    });
});

test('Handler preserves file extensions', async () => {
    const event = {
        Records: [{
            cf: {
                request: {
                    uri: '/posts/pug-go-doro/help.png'
                }
            }
        }]
    };

    const result = await handler(event, null);

    expect(result).toEqual({
        uri: '/posts/pug-go-doro/help.png'
    });
});
