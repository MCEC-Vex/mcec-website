<template>
    <div class="container-inner mx-auto py-16 pb-8 text-center textl-xl">
        <h2 class="text-2xl font-bold mb-8">Join our Newsletter</h2>

        <div class="w-4/5 mx-auto mb-8">
            <p class="mb-8 text-lg sm:text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Corporis, voluptatum. Quam, deleniti nulla.</p>

            <form action="#" @submit.prevent="formSubmission" ref="form">
                <div class="flex flex-col sm:flex-row">
                    <input type="email" name="email" placeholder="Your email address" aria-label="email"
                           class="flex-1 bg-background-form rounded sm:rounded-r-none px-4 py-4 leading-normal border border-border-color-primary sm:border-r-0 shadow outline-none focus:border-green-700 z-10"
                           required>
                    <button data-element="submit"
                            class="flex-2 w-40 uppercase bg-blue-700 text-white rounded sm:rounded-l-none
                                    text-lg py-3 px-8 tracking-wide shadow focus:outline-none hover:bg-blue-800
                                    focus:bg-blue-800 z-10 w-full sm:w-auto mt-4 sm:mt-0">
                        <span>Subscribe</span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'NewsletterSubscribe',
        methods: {
            formSubmission()
            {
                const data = new FormData(this.$refs.form);
                data.append('form-name', 'newsletter');
                fetch('/', {
                    method: 'POST',
                    body: data,
                }).then(() =>
                {
                    this.$refs.form.innerHTML = `<div>Good to go</div>`;
                }).catch(error =>
                {
                    this.$refs.form.innerHTML = `<div>Error: ${error}</div>`;
                });
            }
        }
    };
</script>

<style scoped>

</style>
