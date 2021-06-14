---
title: "Sight Words Generator"
date: 2021-06-13T15:41:57+10:00
draft: false
---

<!-- https://dcpcqtbsxy.us-east-1.awsapprunner.com/sight-words-generate -->

<style>

#sw-input {
  width: 100%;
}

</style>

<script>

const renderSightWordBullets = (words) => {
  return `<ol>${words.map((word) => `<li>${word}</li>`).join("\n")}</ol>`;
};

let words = [];

let url = "https://dcpcqtbsxy.us-east-1.awsapprunner.com/sight-words-generate";

// url = "http://localhost:8080/sight-words-generate";

window.addEventListener("load", function() {
  document.getElementById("sw-input").addEventListener("input", function(e) {
    words = e.target.value.trim().split("\n");
    document.getElementById("sw-list").innerHTML = renderSightWordBullets(words);
  });
  let downloadContainer = document.getElementById("sw-download");
  let submit = document.getElementById("sw-submit");
  submit.addEventListener("click", function(e){
    submit.setAttribute("disabled", "1");
    setTimeout(() => {
      submit.removeAttribute("disabled");
    }, 5000);
    
    downloadContainer.innerHTML = "";
    
    fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
            'Content-Type': 'application/json'
      },
      body: JSON.stringify({words: words})  
    })
      .then((response) => {
        let resp = response.json();
        console.log(resp);
        return resp;
      })
      .then(({data}) => {
        let downloadUrl = "data:application/octet-stream;base64," + data;
        downloadContainer.innerHTML = `<a href="${downloadUrl}" download="sight-words.pdf">Download PDF</a>`;
      })
      .catch(err => console.error("couldn't do the request:", err));
  });
});

</script>

{{< figure src="sight-word-has.jpg" width="525px" caption="Generate sight word worksheets." >}}

Enter sight words, one per line. **Tip:** the generator works better with 10 or more sight words!

<textarea id="sw-input" rows="16"></textarea>

<button id="sw-submit">Generate</button> &nbsp; <span id="sw-download"></span>

Your sight words are listed below, and will be used to generate the worksheets:

<p id="sw-list" style="border: 1px solid grey; padding: 4px;"></p>

## References

* [Super Coloring](http://www.supercoloring.com/) -- Free printable colouring sheets.
* [NSW Foundation Font (unofficial)](https://www.fontspace.com/nsw-font-f28230) -- Handwriting font, freeware, unofficial version of the *NSW/ACT Foundation* font.

## Technical Information

* Language: Go (backend) and Javascript (frontend)
* Deployment: Docker, AWS ECR, AWS AppRunner
* Packages: 
    * github.com/nfnt/resize
    * github.com/nu7hatch/gouuid
    * github.com/phpdave11/gofpdi 
    * github.com/pkg/errors 
    * github.com/rs/cors 
    * github.com/signintech/gopdf

