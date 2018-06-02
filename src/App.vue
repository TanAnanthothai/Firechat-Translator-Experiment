<template>
  <div>
    <Initialize />
    <ConversationContainer 
      v-for="id in convoIds"
      :conversation="conversations[id]"
      :id="id"
      :key="id"
    />
  </div>  
    <!-- 
    We loop allIds, and pass each conversation as a prop to the ConversationContainer.vue
    We can use the id from Firestore as a :key for the v-for loop as a bonus. 
    -->
</template>

<script>
import Initialize from './Initialize.vue'
import ConversationContainer from './ConversationContainer.vue'
import { mapState } from 'vuex'

export default {
name: 'app',
  created () {
    console.log(this.$store.state.db)
  },
  components: {
    Initialize,
    ConversationContainer
  },
    computed: {
    ...mapState({
      conversations: state => state.conversations.all,
      convoIds: state => state.conversations.allIds
    })
    //The Vuex mapState helper function makes it easy to access the state.
  },
}
</script>

<style>
/* @import '//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css';
@import 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700,300';
@import 'https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css';
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.2/css/font-awesome.min.css'; */
</style>