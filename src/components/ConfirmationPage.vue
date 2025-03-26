<!-- src/components/Confirmation.vue -->
<template>
    <div class="container">
      <h1>Thank you for voting!</h1>
      <div v-if="results">
        <p><strong>Sunny:</strong> {{ results.sunnyVotes }} votes ({{ results.sunnyPercentage }}%)</p>
        <p><strong>Raining:</strong> {{ results.rainingVotes }} votes ({{ results.rainingPercentage }}%)</p>
      </div>
      <button @click="goBack">Vote Again</button>
    </div>
  </template>
  
  <script>
  import { db, collection, getDocs } from '../firebase';  // Updated import
  
  export default {
    data() {
      return {
        results: null,
      };
    },
    created() {
      this.fetchResults();
    },
    methods: {
      async fetchResults() {
        try {
          const votesCollection = collection(db, 'votes');  // Reference to the 'votes' collection
          const querySnapshot = await getDocs(votesCollection);  // Get all documents in the 'votes' collection
          
          const totalVotes = querySnapshot.size;
          let sunnyVotes = 0;
          let rainingVotes = 0;
  
          querySnapshot.forEach((doc) => {
            if (doc.data().vote === 'Sunny') {
              sunnyVotes++;
            } else if (doc.data().vote === 'Raining') {
              rainingVotes++;
            }
          });
  
          const sunnyPercentage = ((sunnyVotes / totalVotes) * 100).toFixed(0);
          const rainingPercentage = ((rainingVotes / totalVotes) * 100).toFixed(0);
  
          this.results = {
            sunnyVotes,
            rainingVotes,
            sunnyPercentage,
            rainingPercentage,
          };
        } catch (error) {
          console.error("Error fetching votes: ", error);
        }
      },
      goBack() {
        this.$router.push('/');
      },
    },
  };
  </script>
  
  <!-- <style scoped>
  /* Your styles here (same as previous) */
  /* </style> */ -->

  <!-- <template>
    <div class="container">
      <h1>Thank you for your submission!</h1>
      <p>Your vote has been recorded.</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ConfirmationPage',
  };
  </script> -->
  
  <style scoped>
  /* Add any styles for your confirmation page here */
  </style>