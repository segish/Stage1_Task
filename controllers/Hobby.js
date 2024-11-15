
const getHobby = async (req, res) => {
    try {
        res.status(200).json({ hobby1: 'Software development',
            hobby2: 'Watching movies',
            hobby3: 'then coding',
            hobby4: 'Hiking',
            hobby5: 'Cycling',
            hobby5: 'Solving Puzzles (crosswords, Sudoku)',
            hobby5: 'Exploring Philosophy or Science Topics',
            hobby5: 'and so on 😁😁😁',
        });
    } catch (err) {
        res.status(500).json("somthing went wrong!");
    }
}
module.exports = {getHobby}