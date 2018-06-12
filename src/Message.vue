<template>
    <li :class="getPosition">
      <img src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
      <p>
        {{ message.text }}
      </p>
    </li>
</template>

<script>
  export default {
    name: 'Message',
    props: {
      message: {
        type: Object,
        required: true
      }
    },
    computed: {
      getPosition () {
        if (this.message.sender === this.$store.state.users.currentUser) {
          return 'sent' 
        } else {
          return 'replies' 
        }
      }//A simple check to decide if the message was sent by the current user and to position it accordingly.
    }
  }
</script>

<style scoped>
.sent img {
  margin: 6px 8px 0 0;
}
.sent p {
  background: #435f7a;
  color: black;
}
.replies img {
  float: right;
  margin: 6px 0 0 8px;
}
.replies p {
  background: #f5f5f5;
  float: right;
}
</style>