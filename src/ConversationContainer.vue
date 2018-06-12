<template>
<div>
<div id="frame">
	<div id="sidepanel">
		<div id="contacts">
			<ul>
				<li class="contact active">
					<div class="wrap">
						<span class="contact-status busy"></span>
						<img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
						<div class="meta">
							<p class="name">{{ id }}</p>
							<p class="preview">Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty six other things.</p>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
	<div class="content">
  <div class="messages">
    <ul>
     <Message 
        v-for="message in conversation.messages" 
        :message="message" 
        :key="message.created" 
      />    
    </ul>
		</div>
		<div class="message-input">
			<div class="wrap">
      <input v-model="newMessageText" @keyup.enter="send" placeholder="Type something..." />
			<i class="fa fa-paperclip attachment" aria-hidden="true"></i>
			<button class="submit"><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
			</div>
		</div>
	</div>
</div> 

</div>
</template>


<script>

  import Message from './Message.vue'
  import { mapState } from 'vuex'

  export default {
    name: 'ConversationContainer',
    data () {
      return {
        newMessageText: ''
      }
    },
    props: {
      conversation: {
        type: Object,
        required: true
      },
      id: {
        type: String,
        required: true
      }
    },
    created () {
      this.$store.state.db.collection('conversations').doc(this.id).onSnapshot(convo => {
          //In Firestore, you can listen to a document using the onSnapshot() method
          let source = convo.metadata.hasPendingWrites ? 'Local' : 'Server'
          console.log(`Source ${source}`)
          // TODO: add messages to store
          if (convo && convo.data()) {
            convo.data().messages.forEach(message => this.$store.commit('conversations/ADD_MESSAGE', { 
                conversationId: this.id, message })
            )
          }
      })
    },
    methods: {
      send () {
        this.$store.dispatch('conversations/sendMessage', { 
          text: this.newMessageText, 
          created: Date.now(),
          conversationId: this.id,
          sender: this.$store.state.users.currentUser
        })  
      }
    },
    components: {
      Message
    }
  }


</script>


<style>

</style>