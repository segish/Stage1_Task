
const getName = async (req, res) => {
    try {
        res.status(200).send("My Name Is Tsega Tigneh Yifru");
    } catch (err) {
        res.status(500).json("somthing went wrong!");
    }
}
module.exports = { getName }