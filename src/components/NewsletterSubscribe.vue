<template>
    <div class="container-inner mx-auto py-16 pb-8 text-center textl-xl">
        <h2 class="text-2xl font-bold mb-8">Join our Newsletter</h2>

        <div class="w-4/5 mx-auto mb-8">
            <p class="mb-8 text-lg sm:text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Corporis, voluptatum. Quam, deleniti nulla.</p>

            <form action="#"
                  @submit.prevent="formSubmission"
                  name="newsletter"
                  ref="form"
                  method="post"
                  data-netlify="true"
                  netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="newsletter"/>
                <div v-if="!submitted" class="flex flex-col sm:flex-row">
                    <div hidden aria-hidden="true">
                        <label>
                            Don’t fill this out if you're human
                            <input name="bot-field" />
                        </label>
                    </div>
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
                <div v-if="submitted && !error" class="text-xl font-bold rounded px-4 py-4 bg-background-success text-copy-primary">
                    Thanks for signing up!
                </div>
                <div v-if="error" class="text-xl font-bold rounded px-4 py-4 bg-background-error text-copy-primary mt-5">
                    Error: {{error}}
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'NewsletterSubscribe',
        data: () => ({
            submitted: false,
            error: ''
        }),
        methods: {
            formSubmission()
            {
                const data = new FormData(this.$refs.form);
                data.append('form-name', 'newsletter');
                fetch('/', {
                    method: 'POST',
                    body: data,
                }).then(response =>
                {
                    if(response.ok)
                    {
                        this.submitted = true;
                        this.error = '';
                    }
                    else
                    {
                        this.error = response.statusText;
                    }
                }).catch(error =>
                {
                    this.error = error;
                });
            }
        }
    };
</script>

<style scoped>

</style>
