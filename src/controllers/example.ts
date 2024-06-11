export class exampleController {
    private message:string;
    
    constructor(defaultMessage=""){
        this.message = defaultMessage;
    };
    sendMessage(newMessage:string){
        this.message = newMessage;
        return this.message;
    };
};