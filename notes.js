const notes = [
    {
        id: 1,
        subject: "Daily Note 1",
        date: "April 16, 2021",
        feeling: "So far i am feeling okay with javaScript, ot is a lot to wrap my head around, but it becomes more clear when we have live coding sessions",
        timeSpent: 3 /*hours*/,

        
    },
    
    
    
]

const note2 = {
    id: 2,
    subject: "Daily note 2",
    date: "April 19, 2021",
    feeling: "My mind is somewhat blown with javaScript. I feel like I'm taking forever to learn things, but I would rather take forever and learn it than fly through it and grasp nothing",
    timeSpent: "unknown, but a lot",

    
}
notes.push(note2)
// console.log(notes)
for (const note of notes) {
    console.log(` Note ${note.id}
 ${note.date}
 ${note.feeling}
---------
`)
}