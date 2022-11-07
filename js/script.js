const {createApp} = Vue;
const dt = luxon.DateTime;
createApp({
    data() {
        return{
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            clicked: false,
                            date: '10/01/2020',
                            hour:'15:30',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            clicked: false,
                            date: '10/01/2020',
                            hour:'15:50',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            clicked: false,
                            date: '10/01/2020',
                            hour:'16:15',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            clicked: false,
                            date: '20/03/2020',
                            hour:'16:30',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            clicked: false,
                            date: '20/03/2020',
                            hour:'16:30',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            clicked: false,
                            date: '20/03/2020',
                            hour:'16:35',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            clicked: false,
                            date: '28/03/2020',
                            hour:'10:10',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            clicked: false,
                            date: '28/03/2020',
                            hour:'10:20',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            clicked: false,
                            date: '28/03/2020',
                            hour:'16:15',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            clicked: false,
                            date: '10/01/2020',
                            hour:'15:30',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            clicked: false,
                            date: '10/01/2020',
                            hour:'15:50',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            clicked: false,
                            date: '10/01/2020',
                            hour:'15:30',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            clicked: false,
                            date: '10/01/2020',
                            hour:'15:50',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            clicked: false,
                            date: '10/01/2020',
                            hour:'15:30',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            clicked: false,
                            date: '10/01/2020',
                            hour:'15:50',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            clicked: false,
                            date: '10/01/2020',
                            hour:'15:51',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            clicked: false,
                            date: '10/01/2020',
                            hour:'15:30',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            clicked: false,
                            date: '10/01/2020',
                            hour:'15:50',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            clicked: false,
                            date: '10/01/2020',
                            hour:'15:30',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            clicked: false,
                            date: '10/01/2020',
                            hour:'15:50',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            clicked: false,
                            date: '10/01/2020',
                            hour:'15:51',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ]

                }
            ],
            image: "",
            activePosition: 0,
            myMessage: "",
            contactSearched: "",
            receivedMessage: "ok",
            nowHour: null,
            nowDate: null
        }
    },
    methods:{
        generateImage(position){
            let element = this.contacts[position]
            this.image = `img/avatar${element.avatar}.jpg`;
            return(this.image);
            console.log(this.image);
        },
        activeCurrentContact(position){
            //la posizione viene settata all'indice dell'elemento corrente
           this.activePosition = position;
        },
        createNewMessage(position){
            let newMessage = null;
            this.getDateAndHour();
            //viene creato un nuovo oggetto con lo status 'sent'
            newMessage = {
                            clicked: false,
                            date: `${this.nowDate}`,
                            hour: `${this.nowHour}`,
                            message: `${this.myMessage}`,
                            status: "sent"
                            };
            //l'oggetto viene pusciato nell'array dei messaggi del contatto corrente
            this.contacts[position].messages.push(newMessage);
            //ripuliamo l'input di testo
            this.myMessage = "";
            console.log(this.contacts);
        },
        createMessageReceived(){
            let newReceivedMessage = null;
            this.getDateAndHour();
            //viene creato un nuovo oggetto con lo status 'received'
            newReceivedMessage = {
                                clicked: false,
                                date: `${this.nowDate}`,
                                hour: `${this.nowHour}`,
                                message: `${this.receivedMessage}`,
                                status: "received"
                                };
             //l'oggetto viene pusciato nell'array dei messaggi del contatto corrente
            this.contacts[this.activePosition].messages.push(newReceivedMessage);
            console.log(this.contacts);
        },
        addReceivedMessage(){
            //dopo 1 secondo dalla pressione di enter viene eseguito la funzione precedente
            setTimeout(this.createMessageReceived, 1000);
        },
        getDateAndHour(){
        this.nowHour = dt.now().setLocale('it').toLocaleString(dt.TIME_SIMPLE);
        this.nowDate = dt.now().setLocale('it').toLocaleString(dt.DATE_SHORT);
        console.log(this.nowHour);
        console.log(this.nowDate);
        return this.now;  
        },
        // transformWord(word){
        //     let correctWord = word.toLowerCase();
        //     correctWord = correctWord[0].toUpperCase() + correctWord.slice(1);
        //     console.log(correctWord);
        //     word = correctWord;
        // },
        searchContacts(array){
            // this.transformWord(this.contactSearched);

            //trasformiamo l'input in minuscolo
            let correctWord = this.contactSearched.toLowerCase();
            //trasformiamo la prima lettera dell'input in maiuscolo e lo concateniamo al resto della parola
            correctWord = correctWord[0].toUpperCase() + correctWord.slice(1);
            console.log(correctWord);
            this.contactSearched = correctWord;
            console.log(this.contactSearched);
            array.forEach(element => {
                //Se l'elemento corrente inizia con la parola in input
                if(element.name.startsWith(this.contactSearched)){
                element.visible = true;
               }else{
                element.visible = false;
               } 
               console.log(element.visible);
            });
            //resettiamo l'input
            this.contactSearched = "";
        },
        popUpVisibility(position,index){
            //se clicked dell'attuale messaggio è true
            if(this.contacts[position].messages[index].clicked === true){
                //lo setto a false
                this.contacts[position].messages[index].clicked = false;
            }else{
                //altrimenti lo setto a true
                this.contacts[position].messages[index].clicked = true;
            }
            console.log(this.contacts[position].messages[index].clicked);
        },
        deleteMessage: function(position, messageIndex){
            this.contacts[position].messages.splice(messageIndex, 1);
        }

    }
    
}).mount("#app");