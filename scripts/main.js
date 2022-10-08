import { dailyJournal } from './dailyJournal.js';
import { fetchEntries } from './dataAccess.js'


const mainContainer = document.querySelector("#container")

const render = async () => {
    await fetchEntries();
    mainContainer.innerHTML = dailyJournal()
}

render();

document.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

// const displayEntries = () => {
//     const entries = getJournalEntries ()
//     let html = ""
//     for (let i = 0; i< entries.length; i++) {
//         html += `
//         <div class = "entry"><b>
//         <p>${entries[i].date}</p><b>
//         <p>${entries[i].concepts}</p><b>
//         <p>${entries[i].content}</p><b>
//         <p>${entries[i].mood}</p><b>
//         </div>`
//     }
//     document.getElementById('entries').innerHTML = html
// }

// displayEntries()


// document.addEventListener("statesChanged", event => {
//     displayEntries()
//   })
  