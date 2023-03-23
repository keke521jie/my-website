<template>
    <div v-highlight class="content">
        <h1>我是文章标题</h1>
        <section>
            本人热情随和，活波开朗，具有进取精神和团队精神<a href="#">我爱你</a>，有较强的动手能力。良好协调沟通能力，适应力强，反应快、积极、细心、灵活， 具有一定的社会交往能力。

            所以我需要找一份与自身知识结构相关的工作来展<a href="#">我爱你</a>示自己的能力，在学习中，我注重理论与实践的结合，己具备了相当的实践操作能力。
            很强的事业心和责任感使我能够面对任何<a href="#">我爱你</a>困难和挑战。
        </section>
        <pre>
            import { build } from 'vite'
            async function buildSSREntry() {
                await build({
                    ssr: true,
                    // config for Vite
                })
            }
        </pre>
    </div>
</template>

<script setup>

</script>

<style lang="scss">
.content {
    color: #dddddd;
    section{
        margin: 20px 0;
        color: #bbb;
        a{
            color: #fff;
            border-bottom: 1px solid rgba(125,125,125,.3);
            transition: border .4s;
            margin: 0 3px;
            &:hover{
                border-bottom: 1px solid #fff;
            }
        }
    }
    pre,
    code {
        font-family: '阿里巴巴普惠体 2.0 45 Light';
        display: block;
        background-color: #0e0e0e;
        border-radius: 10px;
        margin: 30px 0;
        font-size: 18px;
        padding: 20px;
    }

    code {
        padding: 20px 60px;
    }
}


@media screen and (max-width: 1000px) {
    .content{
        h1{
            font-size: 22px;
        }
        pre,
        code{
            padding: 10px;
            overflow: auto;
        }
    }
}
</style>