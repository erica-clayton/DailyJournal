
const entries = [
    {
        id: 1,
        date: "7/11/22",
        concepts: "Coffee House Project",
        content: "Today we have been practicing our flex boxes with an exercise of naming local coffee shops in Nashville.",
        mood: "Confused"

    },

    {
        id: 2,
        date: "7/12/22",
        concepts: "Terminal Commands",
        content: "Today we went through different commands in our terminal and learned how to create files and folders as well as change directories.",
        mood: "Excited"
    },

    {
        id: 3,
        date: "7/16/22",
        concepts: "Github Basics",
        content: "Today we learned about my new enemy github with pushing and pulling and merging concepts. I hope with practice we can become friends",
        mood: "Why"
    },

    {
        id: 4,
        date: "7/18/22",
        concepts: "Git and Github Team exercises",
        content: "Thanks to my awesome team I think I am starting to understand git and github.",
        mood: "Confused"
    },

    {
        id: 5,
        date: "7/19/22",
        concepts: "Cloning and Branches",
        content: "LOL I take that back, me and github will surly be the death of me",
        mood: "Why"
    },

    {
        id: 6,
        date: "7/23/22",
        concepts: "Yin & Yang",
        content: "Today we re working on our first group project as a team. We are creating and HTML and CSS website for travel!",
        mood: "Excited"
    },

    {
        id: 7,
        date: "7/25/22",
        concepts: "Yin & Yang 2",
        content: "Now we get to do something fun and mess up our website pages ",
        mood: "Excited"
    }
]

export const getJournalEntries = () => {
    const copyOfEntries = entries.map(entry => ({...entry}))
    return copyOfEntries
  }

