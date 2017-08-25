<template>
    <div id='id'>
        <div v-if="toggleActive" :class="show">
            <div class="modal-background"></div>
            <div class="modal-card">
                <div class="form-icon has-text-centered" >
                    <icon name="user" scale="8"></icon>
                </div>
                <header class="modal-card-head">
                    <p class="modal-card-title"><slot name='title'>Title</slot></p>
                    <button class="delete" @click="$emit('cancel-modal')"></button>
                </header>
                <section class="modal-card-body" >
                    <!-- Content ... -->
                    <slot name='body'></slot>
                </section>
                <footer class="modal-card-foot">
                    <a class="button is-success"><slot name='yes-action'>Save</slot></a>
                    <a class="button" @click="$emit('cancel-modal')">Cancel</a>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'modal',
        props: ['show', 'class'],
        data() {
            return {
                showModal: this.show,
                active: 'modal',
                test: true
            }
        },
        methods: {
            toggleActive() {
                if (this.test) {
                    return this.active = 'modal is-active'
                    
                }

            }
        }

    }
</script>

<style scoped>
    .form-icon {
        position: relative;
        top: 1em;
        overflow: visible;
        z-index: 3;
        color: #F4F4F4;
    }
</style>