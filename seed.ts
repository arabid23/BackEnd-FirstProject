
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient;
/////////////////////////////////////////              >>>>create many users /////////
async function mycreatemanyuser(){
    const mycreatemany = await prisma.user.createMany({
        data:[
            {
                firstName:"Ahmad",
                lastName: "Hassan",
                email:    "ahmad@gmail.com",
                age:       55   
            },
            {
                firstName:"Sarfraz",
                lastName: "Arshad",
                email:    "sarfraz@gmail.com",
                age:      40   
            },
            {
                firstName:"Abdullah",
                lastName: "Ch",
                email:    "abdullah@gmail.com",
                age:       25  
            },
            {
                firstName:"Faraz",
                lastName: "Khan",
                email:    "Faraz@gmail.com",
                age:       25   
            },
            {
                firstName:"Ahsan",
                lastName: "Ahmad",
                email:    "ahsan@gmail.com",
                age:       25   
            },
            {
                firstName:"Abdullah",
                lastName: "Khan",
                email:    "abdullah1@gmail.com",
                age:       24   
            },
            {
                firstName:"Usama",
                lastName: "Hassan",
                email:    "usama@gmail.com",
                age:       27   
            },
            {
                firstName:"Nabil",
                lastName: "Sb",
                email:    "nabil@gmail.com",
                age:       50   
            },
            {
                firstName:"Mohsin",
                lastName: "khan",
                email:    "mohsin@gmail.com",
                age:       35   
            },
            {
                firstName:"Abdul",
                lastName: "Ghani",
                email:    "aghani@gmail.com",
                age:       34 
            },
            {
                firstName:"Shah",
                lastName: "Zaman",
                email:    "szaman@gmail.com",
                age:       37   
            },
            {
                firstName:"Bilal",
                lastName: "Liaqat",
                email:    "bilal@gmail.com",
                age:       38   
            },
            {
                firstName:"Bilal",
                lastName: "Ahmad",
                email:    "bilala@gmail.com",
                age:       26   
            },
            {
                firstName:"Mubarik",
                lastName: "Ali",
                email:    "mubarik@gmail.com",
                age:       26   
            },
            {
                firstName:"Mehmood",
                lastName: "Mehsood",
                email:    "mehmood@gmail.com",
                age:       28   
            },
            {
                firstName:"Arslan",
                lastName: "Khalid",
                email:    "arslam@gmail.com",
                age:       29   
            },
            {
                firstName:"Daniyal",
                lastName: "Altaf",
                email:    "daniyal@gmail.com",
                age:       41   
            },
            {
                firstName:"Ali",
                lastName: "Hassan",
                email:    "ali@gmail.com",
                age:       28   
            },
            {
                firstName:"Usman",
                lastName: "Rajpoot",
                email:    "usman@gmail.com",
                age:       28   
            },
            {
                firstName:"Omair",
                lastName: "Ch",
                email:    "omair@gmail.com",
                age:       27   
            },
            {
                firstName:"Abdul Rehman",
                lastName: "Abid",
                email:    "arabid@gmail.com",
                age:       49   
            },
        
        ]
    })
    console.log(mycreatemany);
} 
async function main(){
await mycreatemanyuser();
    
}
main();



