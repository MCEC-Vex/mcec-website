<template>
    <div class="container-inner mx-auto text-xl border-t border-gray-500 border-b py-16 mb-16 relative">
        <h2 class="font-bold mb-6" id="leadership">Club Leadership:</h2>
        <ul class="text-lg sm:text-xl space-y-6">
            <li v-for="leader of leadership" :key="leader.name">
                <div>{{leader.name}} - {{leader.position}}</div>
                <div class="text-lg text-gray-600">
                    {{leader.bio}}
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
                    bio: 'Hey guys! I am a third year Mechanical Engineering major. I\'m a local here in Moorpark and found this club as a great opportunity to engage hands-on and explore VEX Robotics, my newfound passion. I hope to inspire you as well. I look forward to seeing you this year!'
                },
                {
                    name: 'Luke Barrella',
                    position: 'Secretary',
                    bio: 'Hello everyone! My name is Luke Barrella and I am a third year Civil Engineering Major here at Moorpark College! Engineering has always been a passion of mine because of the amount of possibilities that come with it. I joined Engineering Club because I’m able to explore the different disciplines, as well as my interest in VEX Robotics! Hope to meet you guys soon!'
                }
            ]
        })
    };
</script>

<style scoped>
    .checkmark
    {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg%20width%3D%2229%22%20height%3D%2229%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M4.427%2024.93A14.5%2014.5%200%201%201%2024.93%204.427c5.495%205.69%205.416%2014.733-.177%2020.326s-14.637%205.672-20.326.177z%22%20fill%3D%22%232E855A%22/%3E%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M10.234%2012.803l3.67%203.253L20.766%2010%2023%2012l-9.096%208L8%2014.789l2.234-2z%22/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        @apply pl-10;
    }
</style>
