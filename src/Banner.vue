<template>
    <div id='id'>
        <div class="container">
            <div class="main-text-overlay">
                <h1 class="text-blue is-large picture-text title">Find Your Employer Match</h1>
                <!-- <br> -->
                <button class="button is-danger is-medium is-hoverable" id="get-started" @click="toggleModal">Get Started</button>
            </div>
        </div>
        <div class="banner-img container p-0">
            <img src="./assets/main_img.png" alt="Multicultural workforce" id="main-image" class=" img-fluid">
        </div>

        <!-- <button id="show-modal" @click="showModal = true">Show Modal</button> -->
        <!-- use the modal component, pass in the prop -->
        <modal :show="modal" @cancel-modal="modalClose">
            <!-- you can use custom content here to overwrite default content  -->
            <p slot="title" class="title is-info has-text-centered">Let's Get Started</p>
            <p slot="yes-action">Signup</p>
            <div slot='body'>

                <div class="field">
                    <p class="control has-icons-left">
                        <input class="input" type="text" placeholder="Name">
                        <span class="icon is-small is-left">
                         <icon name="user"></icon>
                        </span>
                    </p>
                    </div>
                <div class="field">
                    <p class="control has-icons-left">
                        <input class="input" type="email" placeholder="Email">
                        <span class="icon is-small is-left">
                         <icon name="envelope"></icon>
                        </span>
                    </p>
                    </div>
                    <div class="field">
                    <p class="control has-icons-left">
                        <input class="input" type="password" placeholder="Password">
                        <span class="icon is-small is-left">
                        <icon name="lock"></icon>
                        </span>
                    </p>
                    </div>

            </div>
            <h3 slot="header">Signup</h3>
        </modal>

    </div>
</template>

<script>
    export default {
        name: 'banner-img',
        data() {
            return active = 'true'
        },
        data() {
            return {
                modal: "modal"
            }
        },
        methods: {
            toggleModal() {
                return this.modal = "modal is-active"
            },
            modalClose() {
                return this.modal = "modal"
            }
        }
    }
</script>

<style scoped>
    #main-image {
        background-size: contain;
        background-origin: content-box;
        width: 150%;
        max-width: 100%;
        height: auto;
        top: -2em;
        bottom: 0px;
        position: relative;
    }

    .banner-img {
        overflow: hidden;
        height: 25em;
    }

    .main-text-overlay {
        display: block;
        position: absolute;
        margin: 15em auto auto 2em;
        z-index: 1;
    }

    h1.picture-text {

        color: #FFF;
        -webkit-text-shadow: 4px 4px 5px rgba(0, 0, 0, .7);
        -moz-text-shadow: 4px 4px 5px rgba(0, 0, 0, .7);
        text-shadow: 4px 4px 5px rgba(0, 0, 0, .7);
        font-size: 3em;
        font-weight: bold;
    }
</style>
