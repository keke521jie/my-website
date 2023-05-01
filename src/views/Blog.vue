<template>
    <ul class="blog">
        <li v-for="blog in blogList" :key="blog.id">
            <router-link to="">
                <p class="title">{{ blog.title }}</p>
                <p class="date">{{blog.date}}</p>
            </router-link>
        </li>
    </ul>
</template>

<script setup>
import { onMounted, reactive } from 'vue';
import API from '@/api'
let blogList = reactive([])
const getBlogList = async () => {
    let result = await API.getBlogList()
    if (result.status === 0) {
        blogList = result.data
        blogList.forEach(item => {
            const dateArr = item.date.slice(0, 10).split('-')
            item.date = `${dateArr[0]},${dateArr[1]},${dateArr[2]}`
        })
    }
    console.log(blogList);
}
onMounted(() => {
    getBlogList()
})
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

@media screen and (max-width: 1000px) {
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