// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
 function getAllDirectors(movies) {
        const directors = movies.map(movie => movie.director);
        
        return directors;
    }


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies, directorName) {
        
        const stevenSpielbergMovies = movies.filter(movie => movie.director === directorName);
        const dramaMovies = stevenSpielbergMovies.filter(movie => movie.genre.includes('Drama'));
         return dramaMovies.length;
      }
      function howManyMovies(movies) {
        
        if (movies.length === 0) {
          return 0;
        }
        const stevenSpielbergDramaMovies = movies.filter(movie => {
          return (
            movie.director === 'Steven Spielberg' &&
            movie.genre.includes('Drama')
          );
        });
      
        
        return stevenSpielbergDramaMovies.length;
      }

     
    

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
     
        
        if (movies.length === 0) {
          return 0.00;
        }
      
        
        const { sumOfScores, numberOfValidScores } = movies.reduce(
          (accumulator, movie) => {
            if (typeof movie.score === 'number' && !isNaN(movie.score)) {
              accumulator.sumOfScores += movie.score;
              accumulator.numberOfValidScores ++;
            }
            return accumulator;
          },
          { sumOfScores: 0, numberOfValidScores: 0 }
        );
      
        
        if (numberOfValidScores === 0) {
          return 0.00; 
        }
      
        const averageScore = sumOfScores / numberOfValidScores;
      
        
        return parseFloat(averageScore.toFixed(2));
      }


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
    
    const dramaMoviesWithRatings = movies.filter(movie => 
          movie.genre.includes('Drama') && typeof movie.score === 'number' && !isNaN(movie.score)
        );
      
        
        if (dramaMoviesWithRatings.length === 0) {
          return 0.00;
        }
      
        
        const sumOfScores = dramaMoviesWithRatings.reduce((accumulator, movie) => accumulator + movie.score, 0);
      
        
        const averageScore = sumOfScores / dramaMoviesWithRatings.length;
      
        
        return parseFloat(averageScore.toFixed(2));
        const averageDramaScore = dramaMoviesScore(movies);
console.log(`The average score of drama movies is ${averageDramaScore}`);







}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
        const sortedMovies = [...movies];
        sortedMovies.sort((a, b) => {
          if (a.year === b.year) {
            
            return a.title.localeCompare(b.title);
          }
           return a.year - b.year;
        });
      
        return sortedMovies;
      }




// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

         const sortedMovies = [...moviesArray];
           sortedMovies.sort((a, b) => a.title.localeCompare(b.title));
             const top20Titles = sortedMovies.slice(0, 20).map(movie => movie.title);
      
        return top20Titles;
      }
      


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
          return moviesArray.map(movie => {
          const hoursMatch = movie.duration.match(/(\d+)h/);
          const minutesMatch = movie.duration.match(/(\d+)min/);
      
          const hours = hoursMatch ? parseInt(hoursMatch[1], 10) : 0;
          const minutes = minutesMatch ? parseInt(minutesMatch[1], 10) : 0;
      
          const totalMinutes = hours * 60 + minutes;
      
          return { ...movie, duration: totalMinutes };
        });
      }


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
 if (moviesArray.length === 0) {
          return null; 
        }
      
        const yearScores = {}; 
      
        moviesArray.forEach(movie => {
          const year = movie.year;
          const score = movie.score;
      
          if (!yearScores[year]) {
            yearScores[year] = { total: 0, count: 0 };
          }
      
          yearScores[year].total += score;
          yearScores[year].count++;
        });
      
        let bestYear = null;
        let bestAvg = -Infinity;
      
        for (const year in yearScores) {
          const avg = yearScores[year].total / yearScores[year].count;
      
          if (avg > bestAvg || (avg === bestAvg && year < bestYear)) {
            bestYear = year;
            bestAvg = avg;
          }
        }
      
        return `The best year was ${bestYear} with an average score of ${bestAvg}`;
      }


