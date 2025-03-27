<template>
  <div class="container">
    <h1>What will the weather be like in Manchester tomorrow?</h1>
    <form @submit.prevent="submitVote">
      <!-- Sunny Option -->
      <div class="radio-option">
        <input type="radio" id="sunny" value="Sunny" v-model="vote" required />
        <label for="sunny" class="sunny">Sunny</label>
      </div>

      <!-- Raining Option -->
      <div class="radio-option">
        <input type="radio" id="raining" value="Raining" v-model="vote" required />
        <label for="raining" class="raining">Raining</label>
      </div>

      <!-- Name Input -->
      <div>
        <input type="text" v-model="name" placeholder="Enter your name" required />
      </div>

      <!-- Error message display -->
      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
// Import the functions from firebase.js
import { db, collection, addDoc, serverTimestamp } from '../firebase';

export default {
  data() {
    return {
      name: '',
      vote: '',
      errorMessage: '', 
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
          timestamp: serverTimestamp(),  // This data is saved to the firebase database 
        })
        .then(() => {
          console.log("Vote submitted successfully!");

          // Takes the user to the confirmation page after successful submission
          this.$router.push('/confirmation');
        })
        .catch((error) => {
          console.error("Error saving vote:", error);
        });
      } else {
        this.errorMessage = 'Please fill in all fields before submitting.'; // Set error message
        console.log(this.errorMessage);
      }
    },
  },
};
</script>
