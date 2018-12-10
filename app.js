     //http://pokeapi.salestock.net/api/v2/
    //https://pokeapi.co/api/v2/pokemon/?limit=20&offset=1
    //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png
    //https://github.com/lets-learn/pokemon-code-along


    function searchPoke() {
        var pokeObjNumber = document.getElementById("valuePoke").value;
       // var pokeObjName = document.getElementById("valuePoke").value;
        fetch("https://pokeapi.co/api/v2/pokemon/" + pokeObjNumber + "/")
            .then(response => response.json())
            .then(pokeApi => {
            const namePokemon = document.querySelector('#pokeName');
            const typePokemon = document.querySelector('#pokeType');
            const abilityPokemon = document.querySelector('#pokeAbility');
            const weightPokemon = document.querySelector('#pokeWeight');
            
            document.getElementById("pokeSprite").src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + pokeObjNumber +'.png';
          
          pokeName.innerText = JSON.stringify(pokeApi.name);
          
          pokeType.innerText = null;
          for (var i = 0; i <pokeApi.types.length; i++) {
          pokeType.innerText += JSON.stringify(pokeApi.types[i].type['name']);
          }
          
          pokeAbility.innerText = null;
          for (var i = 0; i <pokeApi.abilities.length; i++) {
          pokeAbility.innerText += JSON.stringify(pokeApi.abilities[i].ability['name']);
          }
          
          pokeWeight.innerText = JSON.stringify(pokeApi.weight);
          
          })
      }
    
    
    
    
    