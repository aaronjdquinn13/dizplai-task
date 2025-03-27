
<template>
  <div class="container">   
    <h1>Thank you for voting!</h1>   
    <div v-if="results" class="results-container">
      <div class="result-box sunny-box">
        <strong>Sunny:</strong> 
        <div class="percentage">{{ results.sunnyPercentage }}%</div>
      </div>
      <div class="result-box raining-box">
        <strong>Raining:</strong> 
        <div class="percentage">{{ results.rainingPercentage }}%</div>
      </div>
    </div>
  </div>
  <head>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./style.css">
  </head>
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
  
          querySnapshot.forEach((doc) => {   // Added votes for each submission 
            if (doc.data().vote === 'Sunny') {
              sunnyVotes++;
            } else if (doc.data().vote === 'Raining') {
              rainingVotes++;
            }
          });
  
          const sunnyPercentage = ((sunnyVotes / totalVotes) * 100).toFixed(0);  // Gets the percantages for the votes with no decimal places 
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
