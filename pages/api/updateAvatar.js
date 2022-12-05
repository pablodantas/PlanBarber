import connectDB from "../../lib/connectDB";
import Users from "../../lib/userSchema";

export default async (req, res) => {
 
    const { profileId, avatar } = req.body;

    await connectDB();

    try {
        await Users.findOneAndUpdate({ profileId: profileId }, { avatar: avatar });
        res.status(200).json({avatar});
    } catch (error) {
        res.status(400).json({ error });
        console.error(error);
    }

};