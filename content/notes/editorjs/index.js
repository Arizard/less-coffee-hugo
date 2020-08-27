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

class OutcomesBlock {
    static get toolbox() {
        return {
            title: "Outcomes Block",
            icon: '<i class="fas fa-running"></i>',
        }
    }

    constructor({data}) {
        this.data = data;
    }

    render() {
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('outcomes-block');
        this.wrapper.innerHTML = '';

        ['counts','moveName','outcome','cues'].map((cellName) => {
            let cell = document.createElement('div');
            cell.classList.add('outcomes-block-cell');
            cell.setAttribute('contenteditable', 'true');
            cell.id = cellName;
            if (this.data) {
                cell.innerHTML = this.data[cellName];
            }
            this.wrapper.appendChild(cell);
        });

        return this.wrapper;
    }

    save(wrapper) {
        console.log(wrapper);
        return {
            counts: wrapper.querySelector('#counts').innerHTML,
            moveName: wrapper.querySelector('#moveName').innerHTML,
            outcome: wrapper.querySelector('#outcome').innerHTML,
            cues: wrapper.querySelector('#cues').innerHTML,
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
            outcomes: {
                class: OutcomesBlock,
                inlineToolbar: ['bold', 'italic'],
            },
        },
        data: {
            "time": 1598533181902,
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
                },
                {
                    "type": "paragraph",
                    "data": {
                        "text": "-"
                    }
                },
                {
                    "type": "outcomes",
                    "data": {
                        "counts": "Counts",
                        "moveName": "Move Name",
                        "outcome": "Move Outcomes",
                        "cues": "Example of <b>BOLD CUE</b> support."
                    }
                },
                {
                    "type": "outcomes",
                    "data": {
                        "counts": "Counts",
                        "moveName": "Move Name",
                        "outcome": "Move Outcomes",
                        "cues": "<b>Coaching/Cues</b>"
                    }
                },
                {
                    "type": "outcomes",
                    "data": {
                        "counts": "Counts",
                        "moveName": "Move Name",
                        "outcome": "Move Outcomes",
                        "cues": "Coaching/Cues"
                    }
                },
                {
                    "type": "outcomes",
                    "data": {
                        "counts": "Counts",
                        "moveName": "Move Name",
                        "outcome": "Move Outcomes",
                        "cues": "Coaching/Cues"
                    }
                },
                {
                    "type": "outcomes",
                    "data": {
                        "counts": "Counts",
                        "moveName": "Move Name",
                        "outcome": "Move Outcomes",
                        "cues": "Coaching/Cues"
                    }
                },
                {
                    "type": "outcomes",
                    "data": {
                        "counts": "Counts",
                        "moveName": "Move Name",
                        "outcome": "Move Outcomes",
                        "cues": "Coaching/Cues"
                    }
                },
                {
                    "type": "outcomes",
                    "data": {
                        "counts": "Counts",
                        "moveName": "Move Name",
                        "outcome": "Move Outcomes",
                        "cues": "Coaching/Cues"
                    }
                },
                {
                    "type": "outcomes",
                    "data": {
                        "counts": "Counts",
                        "moveName": "Move Name",
                        "outcome": "Move Outcomes",
                        "cues": "Coaching/Cues"
                    }
                },
                {
                    "type": "outcomes",
                    "data": {
                        "counts": "Counts",
                        "moveName": "Move Name",
                        "outcome": "Move Outcomes",
                        "cues": "Coaching/Cues"
                    }
                },
                {
                    "type": "outcomes",
                    "data": {
                        "counts": "Counts",
                        "moveName": "Move Name",
                        "outcome": "Move Outcomes",
                        "cues": "Coaching/Cues"
                    }
                },
                {
                    "type": "outcomes",
                    "data": {
                        "counts": "Counts",
                        "moveName": "Move Name",
                        "outcome": "Move Outcomes",
                        "cues": "Coaching/Cues"
                    }
                }
            ],
            "version": "2.18.0"
        },
    });
}
