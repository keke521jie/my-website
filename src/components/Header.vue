<template>
    <header>
        <div class="header-container">
            <div class="left"><a href="">yuanjie</a></div>
            <ul class="right">
                <li class="active"><a href="">博客</a></li>
                <li><a href="">文章</a></li>
                <li><a href="">音乐</a></li>
                <li><a class="iconfont icon-github" style="font-size: 20px;" href=""></a></li>
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

                &:hover a {
                    color: #fff;
                }
            }

            li.active a {
                color: #fff;
            }
        }
    }
}
</style>