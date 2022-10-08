import { addNewEntry } from "./dataAccess.js";

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", (event) => {
    if (event.target.id === "recordEntry") {
        const entriesDate = document.querySelector("input[name=entryDate]")?.value
        const conceptsCovered = document.getElementById('conceptsCovered').value 
        const journalEntries = document.getElementById('journalEntry').value
        const dailyMood = document.querySelector("select[name=moodSelect]")?.value

        const newEntryToAPI = {
            date: entriesDate,
            concepts: conceptsCovered,
            content: journalEntries,
            mood: dailyMood
        }

        addNewEntry(newEntryToAPI)
    }
})

export const journalForm = () => {
    let html = 
    `<form class="entryForm">
        <div class="field">
            <label for="entryDate">Date</label>
            <input type="date" name="entryDate" class="entryForm__date">
         </div>
        <div class="field">
            <label for="conceptsCovered">Concepts Covered</label>
            <input id="conceptsCovered" type="text" name="conceptsCovered" class="conceptsCovered">
         </div>
        <div class="field">
            <label for="journalEntry">Journal Entry</label>
            <input id="journalEntry" type="text" name="journalEntry" class="journalEntry">
        </div>
         <div class="field>
             <label for="mood">Mood of the Day</label>
                <select name="moodSelect" id="moodSelect">
                    <option value="nervous">Nervous</option>
                    <option value="confused">Confused</option>
                    <option value="excited">Excited</option>
                    <option value="cantCode">Cant code to save my life</option>
                    <option value="why">Why</option>
                 </select>
         </div>
    
        <button type="button" id="recordEntry">Record Journal Entry</button>
    
    </form>
`

return html

}