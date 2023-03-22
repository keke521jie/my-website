<template>
    <header>
        <div class="header-container">
            <div class="left"><router-link to="/">yuanjie</router-link></div>
            <ul class="right">
                <li><router-link active-class="active" to="/blog">博客</router-link></li>
                <li><router-link active-class="active" to="/article">文章</router-link></li>
                <li><router-link active-class="active" to="/music">音乐</router-link></li>
                <li><router-link active-class="active" class="iconfont icon-github" style="font-size: 20px;" to=""></router-link>
                </li>
            </ul>
        </div>
    </header>
</template>

<script setup>
</script>

<style lang="scss">
header {
    height: 50px;
    color: #7c7e80;
    margin-top: 10px;

    .header-container {
        font-family: 'bachelorette_personal_use_oRg';
        width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .left {
            display: flex;
            height: 50px;
            align-items: center;
            font-size: 30px;
            font-weight: 700;

            a {
                color: #7c7e80;
                transition: color .4s;
            }

            &:hover a {
                color: #fff;
            }
        }

        .right {
            display: flex;
            height: 50px;
            align-items: center;
            font-size: 20px;
            font-weight: 600;

            li {
                margin: 0 10px;

                a {
                    text-decoration: none;
                    color: #7c7e80;
                    transition: color .4s;

                }

                a.active {
                    color: #fff;
                }

                &:hover a {
                    color: #fff;
                }
            }


        }
    }
}
</style>