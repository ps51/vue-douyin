<template>
<div>
  <tip ref="tip"></tip>
  <my-list Title="粉丝" @scrollToEnd="scrollToEnd">
    <li v-for="item in list" :key="item.id" class="list-item">
      <span v-if="!item.isRead" class="point"></span>
      <img :src="`${baseURL}${item.userAvatar}`" width="45" height="45" alt="" class="avatar">
      <div class="main">
        <p class="name">{{item.userNickname}}</p>
        <p class="name">关注了你</p>
        <p class="desc">{{formatTime(item.createdAt)}}</p>
      </div>
      <div class="btn" :class="{'btn-inactive': item.bothStatus}" @click="triggerFollow(item)" v-html="item.bothStatus? '互相关注': '关注'"></div>
    </li>
    <div v-if="!list.length" class="tip-wrap">
      <p>您还没有粉丝哦</p>
      <p class="desc">快去拍摄精彩视频吸引粉丝吧！</p>
    </div>
    <loading v-show="isLoading"></loading>
  </my-list>
</div>
</template>

<script>
import MyList from 'base/myList/myList'
import { baseURL } from 'common/js/config'
import { formatTime } from 'common/js/util'
import { mapGetters, mapActions } from 'vuex'
import Loading from 'base/loading/loading'
const PER_PAGE_LIMIT_NUM = 21
export default {
  data () {
    return {
      list: [],
      isLoading: false,
      page: 0,
      isEnd: false,
      baseURL,
      timer: null
    }
  },
  created () {
    this.fetchFansList()
  },
  beforeDestroy () {
    const userId = this.loginInfo.userId
    this.$axios.get(`/api/user/${userId}/readAllFanMsg`).then(() => {
      this.getFanUnreadNum(userId)
    })
  },
  methods: {
    fetchFansList () {
      if (this.isEnd) return
      let userId = this.loginInfo.userId
      this.isLoading = true
      this.page++
      this.$axios.get(`/api/user/${userId}/Fans/page/${this.page}/${this.loginInfo.userId}`).then((r) => {
        this.isLoading = false
        if (r.data.data.length < PER_PAGE_LIMIT_NUM) {
          this.isEnd = true
        }
        this.list = this.list.concat(r.data.data)
      })
    },
    triggerFollow (item) {
      if (this.timer) return
      this.timer = setTimeout(() => {
        this.$axios.get(`/api/user/${this.loginInfo.userId}/triggerFollow/${item.userId}`).then(res => {
          item.bothStatus = !item.bothStatus
          item.bothStatus ? this.$refs.tip.show('关注成功') : this.$refs.tip.show('取关成功')
          this.timer = null
          this.$socket.emit('sendTriggerFollow', {
            fromUserId: this.loginInfo.userId,
            toUserId: item.userId
          })
        }).catch(e => {
          this.$refs.tip.show('网络错误')
          this.timer = null
        })
      }, 300)
    },
    scrollToEnd () {
      this.fetchFansList()
    },
    formatTime,
    ...mapActions([
      'getFanUnreadNum'
    ])
  },
  computed: {
    ...mapGetters([
      'loginInfo'
    ])
  },
  components: {
    MyList,
    Loading
  }
}
</script>

<style scoped lang='stylus'>
@import '~@/common/stylus/variable'
.tip-wrap
  position absolute
  left 50%
  transform translateX(-50%)
  margin-top 130px
  text-align center
  .desc
    margin-top 10px
    font-size $font-size-small
    color $color-desc
.list-item
  position relative
  padding 10px 10px
  display flex
  align-items center
  background rgb(28, 31, 42)
  .point
    position absolute
    left -2px
    top 50%
    transform translateY(-50%)
    border-radius 50%
    height 8px
    width 8px
    background #face15
  .avatar
    margin-right 10px
    border-radius 50%
  .main
    flex 1
    .name
      color $color-text
      margin-top 5px
      font-size $font-size-medium
    .desc
      margin-top 10px
      font-size $font-size-small
      color $color-desc
  .btn
    text-align center
    line-height 25px
    font-size $font-size-small
    margin-right 5px
    width 70px
    height 25px
    background rgb(248, 53, 95)
  .btn-inactive
    background rgb(56, 59, 68)
</style>
