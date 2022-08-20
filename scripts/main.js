import {getJournalEntries} from './entries.js'

// for (const entry of entries) {
//     console.log (`Date: ${entry.date}, That days concepts: ${entry.concepts} My Experience: ${entry.content} How I felt: ${entry.mood}`)
// }

// for (const entry of entries) {
//     console.log (`The titles of my journal entries are: ${entry.concepts}.`)
// }

// for (let entryOdd of entries) {
//     if (entryOdd.id % 2 !== 0) {
//     console.log (entryOdd)
//     }
// }

const displayEntries = () => {
    const entries = getJournalEntries ()
    //loop through array to display quotes
    let html = ""
    for (let i = 0; i< entries.length; i++) {
        html += `
        <div class = "entry"><b>
        <p>${entries[i].date}</p><b>
        <p>${entries[i].concepts}</p><b>
        <p>${entries[i].content}</p><b>
        <p>${entries[i].mood}</p><b>
        </div>`
    }
    document.getElementById('entries').innerHTML = html
}

displayEntries()