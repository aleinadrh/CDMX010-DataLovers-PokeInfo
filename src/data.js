window.pokemones = {
  
    pokeFilter: (data, condition) => {
      const pokeData= data
      const result = pokeData.filter(element => {
        return element.type.indexOf(condition) !== -1;
      })
      return result
    },
  
  
    orderAZ: (data, sortBy, sortOrder) => {
        const dataPoke = data
        if (sortBy === "name" && sortOrder === "az") {
          const resultOrden=dataPoke.sort((a, b) => {
              if (a.name > b.name) {
                return 1;
              } if (a.name < b.name) {
                return -1;
              }
            });
            return resultOrden
          }
        },
  
        orderZA: (data, sortBy, sortOrder) => {
          const dataPoke2 = data
          if (sortBy === "name" && sortOrder === "za") {
            const resultOrden=dataPoke2.sort((a, b) => {
                if (a.name < b.name) {
                  return 1;
                } if (a.name > b.name) {
                  return -1;
                } 
              });
              return resultOrden
            }
          },
  
  
    computePokemon: (data, condition) => {
      let totalCondition = 0;
      data.forEach(element => {
  
        if (element.type.indexOf(condition) !== -1) {
          totalCondition++
        }
  
      })
      return Math.round(totalCondition * 100 / 151)
    },
  
    pokeSearch: (data, condition) => {
      const dataSerch= data
      const result = dataSerch.filter(element => {
        return element.name.toLowerCase().indexOf(condition.toLowerCase()) !== -1
        
      })
      return result
    },
  
    pokemonWeaknesses: (data, condition) => {
      let totalCondition = 0;
      data.forEach(element => {
  
        if (element.weaknesses.indexOf(condition) !== -1) {
          totalCondition++
        }
  
      })
      return totalCondition
    },
  
  
  
  
  
  }