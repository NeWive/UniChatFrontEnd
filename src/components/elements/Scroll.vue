<template>
    <div
            class="scroll"
            :style="{
                height: `${windowHeight}px`
            }"
            @mousemove="mouseMoveHandler"
            @mouseleave.stop="mouseLeaveHandler"
            @mouseup="mouseUpHandler"
            :class="isMoving ? 'isMoving' : 'notMoving'">
        <div
                class="slide_block"
                :style="{
                    height: `${scrollBlockHeight}px`,
                    top: `${top}px`
                }"
                @mousedown="mouseDownHandler"
                @mouseup="mouseUpHandler">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Scroll',
        methods: {
            mouseDownHandler () {
                this.setMouseLock(true);
            },
            mouseUpHandler () {
                this.setMouseLock(false);
            },
            mouseLeaveHandler () {
                this.setMouseLock(false);
            },
            mouseMoveHandler (e) {
                if (this.lastY && this.mouseMoveLock) {
                    let currentY = this.top;
                    let y = e.screenY - this.lastY;
                    if (currentY + y >= 0 && currentY + y <= this.windowHeight - this.scrollBlockHeight) {
                        this.setTop(this.top + y);
                        this.setUlMarginTop(-(this.top + y) * this.containerHeight / this.windowHeight);
                    }
                }
                this.lastY = e.screenY;
            }
        },
        props: {
            containerHeight: {
                type: Number,
                required: true
            },
            windowHeight: {
                type: Number,
                required: true
            },
            listLength: {
                type: Number,
                required: true
            },
            selHeight: {
                type: Number,
                required: true
            },
            top: {
                type: Number,
                required: true
            },
            mouseMoveLock: {
                type: Boolean,
                required: true
            },
            setMouseLock: {
                type: Function,
                required: true
            },
            setTop: {
                type: Function,
                required: true
            },
            ulMarginTop: {
                type: Number,
                required: true
            },
            setUlMarginTop: {
                type: Function,
                required: true
            },
            scrollBlockHeight: {
                type: Number,
                required: true
            },
            isMoving: {
                type: Boolean,
                required: true
            }
        },
        data: function () {
            return {
                lastY: null
            };
        }
    };
</script>

<style lang="scss">
    .scroll {
        width: 7px;
        position: relative;
        padding: 0 10px;
        transition: opacity 0.5s ease;
        &:hover {
            opacity: 0.8;
        }
        .slide_block {
            top: 0;
            position: absolute;
            width: 7px;
            height: 12px;
            background: #5C555C;
            cursor: pointer;
            border-radius: 4px;
        }
    }
    .isMoving {
        opacity: 0.8;
    }
    .notMoving {
        opacity: 0;
    }
</style>
