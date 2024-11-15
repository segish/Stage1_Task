
const getDream = async (req, res) => {
    try {
        res.status(200).send("My dream is to become a successful software developer who creates meaningful and innovative solutions. I know it will not always be easy, but I am committed to learning, growing, and overcoming any challenges that come my way. This journey is important to me, and I am determined to make it happen.");
    } catch (err) {
        res.status(500).json("somthing went wrong!");
    }
}
module.exports = {getDream}