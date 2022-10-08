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

