console.log("EditorJS Demo");

window.addEventListener('load', (event) => {
    initEditorJSTutorial();
});

// /posts/a-todo-with-a-twist/will-turner-bJlQOClnEGs-unsplash_huff83ee650924560e2db952790c0bdbde_3162240_1000x625_fill_q80_box_center.jpg

class SimpleImage {
    static get toolbox() {
        return {
            title: 'Image',
            icon: '<i class="far fa-image"></i>'
        }
    }

    constructor({data}) {
        this.data = data;
    }

    render() {
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('simple-image');

        if (this.data && this.data.url) {
            this._createImage(this.data.url, this.data.caption);
            return this.wrapper;
        }

        const input = document.createElement('input');

        input.placeholder = 'Paste an image URL...';
        input.addEventListener('paste', (event) => {
            this._createImage(event.clipboardData.getData('text'));
        });

        this.wrapper.appendChild(input);

        return this.wrapper

    }


    _createImage(url, captionText) {
        const image = document.createElement('img');
        const caption = document.createElement('input');

        image.src = url;
        caption.placeholder = 'Caption this...';
        caption.value = captionText || '';

        this.wrapper.innerHTML = '';
        this.wrapper.appendChild(image);
        this.wrapper.appendChild(caption);
    }

    validate(savedData) {
        return savedData.url.trim()
    }

    save(blockContent) {
        const image = blockContent.querySelector('img');
        const caption = blockContent.querySelector('input');
        return {
            url: image.src,
            caption: caption.value,
        }
    }
}
let editor = null;
function initEditorJSTutorial() {
    editor = new EditorJS({
        holder: 'editorjs',
        tools: {
            header: {
                class: Header,
                inlineToolbar: ['link'],
            },
            image: SimpleImage,
        },
        data: {
            "time": 1598436527804,
            "blocks": [
                {
                    "type": "image",
                    "data": {
                        "url": "http://localhost:1313/posts/a-todo-with-a-twist/will-turner-bJlQOClnEGs-unsplash_huff83ee650924560e2db952790c0bdbde_3162240_1000x625_fill_q80_box_center.jpg",
                        "caption": "That mountain looks cold"
                    }
                },
                {
                    "type": "header",
                    "data": {
                        "text": "Lorem Ipsum H2",
                        "level": 2
                    }
                },
                {
                    "type": "paragraph",
                    "data": {
                        "text": "Try editing all this text. Pretty cool! It uses <a href=\"https://editorjs.io/\">Editor.js</a>."
                    }
                },
                {
                    "type": "header",
                    "data": {
                        "text": "Boxing H3",
                        "level": 3
                    }
                },
                {
                    "type": "paragraph",
                    "data": {
                        "text": "As conceived in 1632 by Portuguese printing press operator Andre Felipe, boxing was a gentleman’s game, in which two men would square off and regale each other with stories monotonous for days on end, until one of them fell to the ground from boredom or exhaustion. Over the next few years the new sport developed a respectable following of a few hundred local socialites."
                    }
                }
            ],
            "version": "2.18.0"
        },
    });
}
