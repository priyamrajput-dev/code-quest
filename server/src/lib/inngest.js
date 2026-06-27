import {Inngest} from "inngest"
import { connnectDB } from './db.js';
import User from '../models/User.js';


// Create a client to send and receive events
export const inngest = new Inngest({ id: "code-quest" });

const syncUser = inngest.createFunction(
    {id:"hello-world", triggers: [{event : "clerk/user.created"}]},
    async({event})=>{
        await connnectDB();

        const {id, email_addresses, first_name, last_name, image_url} = event.data;

        const newUser = {
            clerkId: id,
            name: `${first_name || ""} ${last_name || ""}`,
            email: email_addresses,
            profileImage: image_url
        }
        await User.create(newUser);
    }

)

const deleteUserFromDB = inngest.createFunction(
    {id:"delete-user-from-db", triggers: [{event: "clerk/user.delete"}]},
    async({event})=>{
        await connnectDB();

        const {id} = event.data;
        await User.deleteOne({clerkId: id});
    }
)

// Add the function to the exported array:
export const functions = [
    syncUser,
    deleteUserFromDB
];