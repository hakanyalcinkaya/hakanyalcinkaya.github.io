<template>
    <div v-if="$page.frontmatter.trainings">
        <ul style="list-style-type: none;">
            <template v-for="item in $page.frontmatter.trainings">
                <li style="margin-bottom:30px;">
                    <a v-bind:href="item.link" target="_blank">
                    <div class="">
                        <img v-bind:src="item.img" alt="" width="100%">
                    </div>
                    <h3 style="margin-top:5px;">{{ item.title }}</h3>
                    </a>
                </li>
            </template>
        </ul>
    </div>
</template>
