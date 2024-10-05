//FRONT END SYSTEM DESIGN

//open ended style interviews


//ex
//news feed 
//messaging or a chat applciation
//ecommerce marketplaces
//photo sharing

//designing components
//autocomplete component
//droddownmenu ciomponent
//imge carousel
//modal 
//datepicker
//multiselect


//RADIO

//R=> REQUIREMENTS
//A => ARCHITECTURAL / HIGH LEVEL DESIGN
//DATA MODEL
//I=> INTERFACE API
//O => OPTIMIZATIONS

//DESIGN A FACEBOOK

//R=> REQUIREMENTS
//fucntional requirements, non func requirements

//what devices/ platforms it needs to be supported
//is offfline support necessary
//what are the peroformance requirments


//A => ARCHITECTURAL / HIGH LEVEL DESIGN
//focus on client side architecture
//draw diagrams

//examples of components/modules that are present in HLD frontend

//server
//view => this represents what user sees and it can contain more sub views. can contain client side state only
//controller=> module that responds to user interactions and processes
//the data from store/model in a particular format that view expects.
//model/client store => Actually the data lives. it will store the data which will be presented to the user via views
//you can have multiple stores or stores within stores

//separation of concerns



//DATA MODEL 
//(coming from server)
//ENITY POST FEED POST => id, created_at, content, author, reactions
//Feed => Feed Ui => posts (list od POST's), pgination(pagination metadata)
//User => Client Store -> id, name , profiel_photo_url

//client data
//user input => New Post  Feed Composer UI => message, image


//Interface API

//news fedd
//http method GET
//path /feed
//desc => fetches the feed results for a user

//parameters
// {
//     "size":10,
//     "cursor":'dasdsan'
// }

//response

// {
//     "pagination":{
//         "size": 10,
//          "next_cursor":'=dWdsjdjksw'
//     },
//     "results":[
//         {
//             "id", 123,
//             "author":{
//                 "id":'456',
//                 "name":"John"
//             },
//             "content":"hello world",
//             "image": 'https://',
//             "reactions":{
//                 "likes":10,
//                 "haha":15
//             },
//             "created_at": 1033453
//         }
//         //more posts
//     ]
// }


//Optimizations
//Performance
//user experience
//network
//accessibility
//multi lingual support
//multi-device support
//security




//Mistakes in design

//direclty jumping answering the uestion without asking uestions and gathering requirements
//approaching the question in unstructured manner
//insisting on only one solution, each solution tradeoff
//remaining silent entire time only thinking in head
//spending imp time on unumportatnt areas
//using buzzwords without being able to explain them