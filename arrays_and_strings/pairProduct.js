const pairProduct = (numbers, targetProduct) => {

    //create a hashmap for all visited numbers
    const visited = {};
    
    for (let i = 0; i < numbers.length; i++) {
      let num = numbers[i];

      //comp number as the target divided by the current iteration
      const comp = targetProduct / num;
      
      //check if the comp number is in our hashmap
      if (comp in visited) {

        //if it is, then we have our 2 numbers that give us our targetProduct
        return [i, visited[comp]]
      }

      //if it does not hit our conditional, we add the current iteration into our hashmap.
      visited[num] = i
      console.log(visited)
    }
  };

  console.log(pairProduct([3, 2, 5, 4, 1], 8)); // -> [1, 3]