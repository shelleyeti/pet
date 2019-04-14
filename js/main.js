myPet = {
    name: "Cavy",
    species: "dog",
    color: "tri-colored",
    nickname: [
        "Cavy Baby", 
        "Big Dog", 
        "Caviidae"],
    age: 6,
    sleep: function (location) {
        console.log(`Cavy sleeps on his ${location}`)
    }
}

myPet.sleep("bed")