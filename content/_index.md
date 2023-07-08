---
title: "Home"
---

<style>

#profile-container-inner {
    width: 100%;
    height: 100%;
    text-align: center;
    margin: 0 auto 0 auto;
    padding: 16px 0 16px 0;
    max-width: 3.6cm;

    display: flex;
    justify-content: center;
    align-items: center;
}

.profile-circle {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    padding: 0px;
    box-sizing: border-box;
    border: solid 2px #ff4757;
}

.profile-circle img {
    display: block;
  width: 100%;
  height: 100%;
  padding: 0 !important;
  margin: 0 !important;
}

.grid-super-container {
    border-radius: 8px;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    padding: 0 0 0 16px;
}

@media (min-width: 770px) {
    .grid-container {
        margin-right: 64px;
        display: grid;
        grid-template-columns: 160px 1fr;
        grid-template-rows: 192px;
        gap: 0px 16px;
        grid-auto-flow: row;
        grid-template-areas:
        "grid-profile grid-intro";

        justify-content: stretch;
        align-items: stretch;

        height: 192px;
    }

    .grid-profile {
        grid-area: grid-profile;
        box-sizing: border-box;
    }

    .grid-intro {
        grid-area: grid-intro;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .grid-intro span p:last-child {
        margin-bottom: 0 !important;
    }

    #profile-container-inner {
        max-width: 100%;
    }
}

</style>

<div class="grid-super-container">
<div class="grid-container">
    <div class="grid-profile">
        <div id="profile-container-inner">
            <div class="profile-circle">
                <img src="arie-profile-2.jpeg" />
            </div>
    <!-- <a href="{{< relref resume >}}"> -->
        <!-- <strong>continue to résumé -></strong> -->
    <!-- </a> -->
        </div>
    </div>
    <div class="grid-intro"><span>

Hi, I'm Arie.

I'm a software engineer at [Deputy](https://deputy.com), simplifying shift work
for businesses and employees around the world.

I like running, [taking photos](https://unsplash.com/@arizard), and [modal text editors](https://github.com/neovim/neovim).

Welcome to my website!
</span></div>
</div>
</div>

### Links

[**My GitHub**](https://github.com/arizard)<br>
[**My LinkedIn**](https://www.linkedin.com/in/arieoldman/)<br>
