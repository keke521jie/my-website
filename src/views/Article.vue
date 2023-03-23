<template>
    <ul class="blog">
        <li>
            <router-link to="/content">
                <p class="title">螃蟹在剥我的壳，笔记本在写我</p>
                <p class="date">2000,09,05</p>
            </router-link>
        </li>
        <li>
            <router-link to="">
                <p class="title">螃蟹在剥我的壳，笔记本在写我</p>
                <p class="date">2000,09,05</p>
            </router-link>
        </li>
        <li>
            <router-link to="">
                <p class="title">螃蟹在剥我的壳，笔记本在写我</p>
                <p class="date">2000,09,05</p>
            </router-link>
        </li>
        <li>
            <router-link to="">
                <p class="title">螃蟹在剥我的壳，笔记本在写我</p>
                <p class="date">2000,09,05</p>
            </router-link>
        </li>
        <li>
            <router-link to="">
                <p class="title">螃蟹在剥我的壳，笔记本在写我</p>
                <p class="date">2000,09,05</p>
            </router-link>
        </li>
        <li>
            <router-link to="">
                <p class="title">螃蟹在剥我的壳，笔记本在写我</p>
                <p class="date">2000,09,05</p>
            </router-link>
        </li>
        <li>
            <router-link to="">
                <p class="title">螃蟹在剥我的壳，笔记本在写我</p>
                <p class="date">2000,09,05</p>
            </router-link>
        </li>
    </ul>
</template>

<script setup>
</script>

<style lang="scss">
.blog {
    li {
        margin-bottom: 30px;

        a {
            color: #939393;
            font-weight: 600;

            .title {
                font-size: 25px;
                margin-bottom: 5px;
                transition: all .4s;
            }

            .date {
                font-size: 15px;
                color: #3f3f3f;
                transition: all .4s;
            }

            &:hover {
                .title {
                    color: #fefefe;
                }

                .date {
                    color: #7c7c7c;
                }
            }
        }
    }
}

@media screen and (max-width: 375px) {
    .blog {
        li {
            a {
                .title {
                    font-size: 20px;
                }
            }
        }
    }
}
</style>