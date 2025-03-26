<template>
    <div class="container">
      <h1>What will the weather be like in Manchester tomorrow?</h1>
      <form @submit.prevent="submitVote">
        <div>
          <input type="radio" id="sunny" value="Sunny" v-model="vote" required />
          <label for="sunny">Sunny</label>
        </div>
        <div>
          <input type="radio" id="raining" value="Raining" v-model="vote" required />
          <label for="raining">Raining</label>
        </div>
        <div>
          <input type="text" v-model="name" placeholder="Enter your name" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  // Import the necessary functions from firebase.js
  import { db, collection, addDoc, serverTimestamp } from '../firebase';
  
  export default {
    data() {
      return {
        name: '',
        vote: '',
      };
    },
    methods: {
      submitVote() {
        if (this.vote && this.name) {
          console.log("Submitting vote", this.vote, this.name);
  
          // Add the vote to Firestore
          addDoc(collection(db, 'votes'), {
            name: this.name,
            vote: this.vote,
            timestamp: serverTimestamp(),  // Use serverTimestamp for the timestamp
          })
          .then(() => {
            console.log("Vote submitted successfully!");
  
            // Navigate to the confirmation page after successful submission
            this.$router.push('/confirmation');
          })
          .catch((error) => {
            console.error("Error saving vote:", error);
          });
        } else {
          console.log("Please fill in all fields before submitting.");
        }
      },
    },
  };
  </script>

  <style scoped>
  /* Your styles here (same as previous) */
  </style>