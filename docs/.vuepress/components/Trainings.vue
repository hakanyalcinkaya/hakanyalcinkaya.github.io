<template>
    <div v-if="$page.frontmatter.trainings">
        <ul style="list-style-type: none;">
            <template v-for="item in $page.frontmatter.trainings">
                <li style="
                    padding:10px;
                    border-radius:4px;
                    position: relative;
                    margin-bottom:30px; 
                    border-bottom:1px solid #2ecc71;
                    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
                    "
                >
                    <a v-bind:href="item.link" target="_blank">
                    <div class="">
                        <img v-bind:src="item.img" alt="" width="100%"
                        style="
                        border-radius:8px;
                        "
                        >
                    </div>
                    <h3 style="margin-top:5px;">{{ item.title }}</h3>
                    </a>
                </li>
                
            </template>
        </ul>
    </div>
</template>
