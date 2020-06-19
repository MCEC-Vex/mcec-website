<template>
    <div class="contact-me bg-background-secondary pt-16">
        <div class="container-inner mx-auto text-xl pb-4 relative">
            <h2 class="font-bold mb-6" id="contact">Contact Us:</h2>

            <div class="text-lg sm:text-lg mb-16">
                <form v-if="!submitted" @submit.prevent="formSubmission" ref="form" name="contact-form" action="#"
                      class="mb-12" method="post" data-netlify="true" netlify-honeypot="bot-field">
                    <div hidden aria-hidden="true">
                        <label>
                            Don’t fill this out if you're human
                            <input name="bot-field"/>
                        </label>
                    </div>
                    <div class="flex flex-wrap mb-6 -mx-4">
                        <div class="w-full md:w-1/2 mb-6 md:mb-0 px-4">
                            <label class="block mb-2 text-copy-primary" for="name">
                                Name
                            </label>

                            <input type="text" name="name" id="name" placeholder="Jon Snow"
                                   class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4"
                                   required>
                        </div>

                        <div class="w-full px-4 md:w-1/2">
                            <label class="block text-copy-primary mb-2" for="email">
                                Email Address
                            </label>

                            <input type="email" name="email" id="email" placeholder="email@example.com"
                                   class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4"
                                   required>
                        </div>
                    </div>

                    <div class="w-full mb-12">
                        <label class="block text-copy-primary mb-2" for="message">
                            Message
                        </label>

                        <textarea id="message" rows="5" name="message"
                                  class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none appearance-none focus:border-green-700 mb-2 px-4 py-4"
                                  placeholder="Enter your message here." required></textarea>
                    </div>

                    <div class="flex justify-end w-full">
                        <input type="submit" value="Submit"
                               class="block bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold tracking-wide uppercase shadow rounded cursor-pointer px-6 py-3">
                    </div>
                </form>
                <div v-if="submitted && !error" class="text-xl font-bold rounded px-4 py-4 bg-background-success text-copy-primary">
                    Thanks for signing up!
                </div>
                <div v-if="error" class="text-xl font-bold rounded px-4 py-4 bg-background-error text-copy-primary mt-5">
                    Error: {{error}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ContactUs',
        data: () => ({
            submitted: false,
            error: ''
        }),
        methods: {
            formSubmission()
            {
                const data = new FormData(this.$refs.form);
                data.append('form-name', 'contact');
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
