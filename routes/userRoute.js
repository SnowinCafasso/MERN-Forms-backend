import { User } from '../models/userModel.js'
import express from 'express'

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const users = await User.find({})
        if (users.length <= 0){
            return res.json({message:"Collection is empty"});
        }
        return res.json({
            count: users.length,
            data: users
        })
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: error.message });
    }
})

router.post('/add', async (req, res) => {
    try {
        if (!req.body.username || !req.body.password) {
            return res.status(400).json({ message: 'Provide all the input fields' });
        }
        const newUser = {
            username: req.body.username,
            password: req.body.password
        }
        const user = await User.create(newUser);
        return res.status(200).json({ message: 'Data Added Successfully', data: user });
    } catch (error) {
        console.log(error.message);
        res.send(500).json({ message: error.message });
    }
});


export default router;