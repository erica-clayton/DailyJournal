import { journalForm } from "./journalForm.js";
import { getJournalEntries } from "./dataAccess.js"


export const dailyJournal = () => {
    return `
    <h1>Erica Clayton Journal</h1>
    <section class="journalForm">
        ${journalForm()}
    </section>

     <section class="pastJournalEntries">
     <h2>Past Entries</h2>
         ${getJournalEntries()}
    </section>
    `
}