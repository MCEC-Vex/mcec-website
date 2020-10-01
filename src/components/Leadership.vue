<template>
    <div class="container-inner mx-auto text-xl border-t border-gray-500 border-b py-16 mb-16 relative">
        <h2 class="font-bold mb-6" id="leadership">Club Leadership:</h2>
        <ul class="text-lg sm:text-xl space-y-6">
            <li v-for="leader of leadership" :key="leader.name" class="flex">
                <div class="leadership-image inline-block mr-4 mt-2">
                    <g-image
                        v-if="leader.image"
                        :alt="leader.name"
                        class="rounded-full shadow-solid"
                        :src="require(`!!assets-loader!@leadership/${leader.image}`)"
                    />
                </div>
                <div class="flex-1">
                    <div>{{leader.name}} - {{leader.position}}</div>
                    <div class="text-lg text-gray-600" v-for="line of leader.bio.split('\n')" :key="line">
                        {{line}}
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Leadership',
        data: () => ({
            leadership: [
                {
                    name: 'Khoi Le',
                    position: 'President',
                    bio: 'Hey guys! I am a third year Mechanical Engineering major. I\'m a local here in Moorpark and found this club as a great opportunity to engage hands-on and explore VEX Robotics, my newfound passion. I hope to inspire you as well. I look forward to seeing you this year!',
                    image: 'khoi_le.png'
                },
                {
                    name: 'Wesley Karkiewicz',
                    position: 'Vice President',
                    bio: 'Pursuing a degree in Electrical engineering \n' +
                        'Second year attending moorpark community college\n' +
                        'Competed in a highschool robotics program called FIRST\n' +
                        'Participated in our clubs first year back into vex by building the second robot and driving it at competitions.\n' +
                        'Working a internship at Skurka aerospace \n' +
                        'Currently in the Marine Corps Officer candidate program with plans on becoming commissioned in the service as a second lieutenant after graduating college and attending flight school.'
                },
                {
                    name: 'Luke Barrella',
                    position: 'Secretary',
                    bio: 'Hello everyone! My name is Luke Barrella and I am a third year Civil Engineering Major here at Moorpark College! Engineering has always been a passion of mine because of the amount of possibilities that come with it. I joined Engineering Club because I’m able to explore the different disciplines, as well as my interest in VEX Robotics! Hope to meet you guys soon!',
                    image: 'luke_barrella.png'
                },
                {
                    name: 'Jon Puno',
                    position: 'Treasurer',
                    bio: 'Hey everyone! I’m a second year at Moorpark College, and I’m a Biology Major. I joined the club looking to broaden my perspective across multiple fields. I was always interested in engineering and helping with VEX Robotics has given me ideas for the future in medicine. Besides engineering, I enjoy relaxing and talking with people about anything; feel free to ask me for help, questions, or to just sit and chat!',
                    image: 'jon_puno.png'
                }
            ]
        })
    };
</script>

<style scoped>
    .leadership-image
    {
        height: 4rem;
        width: 4rem;
    }
</style>
