<template>
    <div class="music">
        <h1>最近在听</h1>
        <ul class="music-list">
            <li @click="playMusic" class="music-item">
                <div class="left">
                    <span class="music-name">嘉宾</span>
                    <span class="singer">路文飞</span>
                </div>
                <div class="right">
                    <i class="iconfont icon-bofang"></i>
                </div>
            </li>
            <li @click="playMusic" class="music-item">
                <div class="left">
                    <span class="music-name">嘉宾</span>
                    <span class="singer">路文飞</span>
                </div>
                <div class="right">
                    <i class="iconfont icon-bofang"></i>
                </div>
            </li>
            <li @click="playMusic" class="music-item">
                <div class="left">
                    <span class="music-name">嘉宾</span>
                    <span class="singer">路文飞</span>
                </div>
                <div class="right">
                    <i class="iconfont icon-bofang"></i>
                </div>
            </li>
            <li @click="playMusic" class="music-item">
                <div class="left">
                    <span class="music-name">嘉宾</span>
                    <span class="singer">路文飞</span>
                </div>
                <div class="right">
                    <i class="iconfont icon-bofang"></i>
                </div>
            </li>
            <li @click="playMusic" class="music-item">
                <div class="left">
                    <span class="music-name">嘉宾</span>
                    <span class="singer">路文飞</span>
                </div>
                <div class="right">
                    <i class="iconfont icon-bofang"></i>
                </div>
            </li>


        </ul>
    </div>
</template>

<script setup>
import { useMusicStore } from '../stores/music';
const musicStore = useMusicStore()
const playMusic = () => {
    musicStore.changeIsPlay()
}
</script>

<style lang="scss">
.music {
    color: #bbbbbb;

    h1 {
        margin-bottom: 30px;
        color: #fff;
    }

    .music-list {
        margin-left: 30px;

        .music-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-weight: 600;
            margin-bottom: 30px;
            cursor: pointer;
            transition: color .4s;

            .music-name {
                font-size: 25px;
                margin-right: 10px;
                margin-bottom: 5px;
            }

            .singer {
                font-size: 15px;
                margin-left: 3px;
            }

            .right {
                i {
                    font-size: 35px;
                }
            }

            &:hover {
                color: #fff;
            }
        }
    }
}

@media screen and (max-width: 1000px) {
    .music {
        .music-list {
            .music-item {
                .music-name {
                    font-size: 22px;
                }

                .singer {
                    font-size: 13px;
                    margin-left: 3px;
                }

                .right {
                    i {
                        font-size: 25px;
                    }
                }
            }
        }
    }
}
</style>