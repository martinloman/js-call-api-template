let searchText = document.getElementById("txtSearch")

searchText.onkeydown = async function (event) {
  console.log(event.key)
  if (event.key === "Enter") {
    event.preventDefault()

    // TODO: skriv kod som hämtar värdet i sökfältet (searchText) och lägger det i
    // variabeln searchTerm
    let searchTerm = ""

    // Det här anropas funktionen för att hämta info från ett API.
    // Vi väntar på svaret med await
    let results = await search(searchTerm)

    // Här anropas funktionen som ansvarar för att "rendera" (alltså rita ut) resultatet
    renderResults(results)

    // Skriv kod för att tömma sökfältet igen
  }
}

// Detta är en asynkron funktion som anropar ett API och returnerar svaret som ett JSON-objekt.
async function search(searchString) {
  // Använd funktionen fetch för att anropa ett API med rätt parametrar.
  /* 
    Om ni vill använder ni The Movie Database API.
    Det finns dokumentation här https://developers.themoviedb.org/3/getting-started/introduction
    Ni kan i så fall låna min API-nyckel. Den kommer postas i Classroom.
    */

  //Här bygger vi upp den URL som vi ska använda i vårat anrop till APIet.
  let apiKey = "" //TODO: Lägg in API-nyckeln från Classroom här.
  var url = `https://api.themoviedb.org/3/search/movie?query=${searchString}&api_key=${apiKey}`
  console.log("Den URL vi kommer anropa: ", url)

  //Här används URLen för att göra anrop med den inbyggda funktionen fetch()
  let response = await fetch(url)

  // Använd console.log() för att skriva ut resultatet till konsollen och titta på det.
  // Det är ofta bra att titta på hur resultatet ser ut för att få en förståelse för
  // hur man kan skriva koden för att använda resultatet.
  console.log(response)

  // Detta gör om resultatet från APIet till ett JSON-objekt.
  let json = await response.json()
  return json
}

/*
  Den här funktionen går igenom sökresultatet som är parametern "results"
  och skriver ut det i en lista i DOMen.
*/
function renderResults(res) {
  let resultDiv = document.getElementById("searchresults") //Hämtar ut diven med id="searchresults" för att lägga in resultatet där
  //Använd console.log för att se ur objektet res ser ut.
  console.log(res)

  // TODO: Hämta ut attributet av variablen res som innehåller listan med resultat
  // och tilldela variablen allObjects det värdet.
  let allObjects = []
  allObjects.forEach((object) => {
    // TODO: lägg in en div i resultDiv för varje objekt
    // du kan använda t.ex. resultDiv.insertAdjacentHTML("beforeend", "en sträng med html")
  })
}
