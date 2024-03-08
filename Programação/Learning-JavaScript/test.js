const newUser = {
    name: 'Rafael Oliveira',
    email:  'contaparajogos20182018@gmail.com',
    pass: '202219'
}

const newUser2 = {
    name: 'Rafael ',
    email:  'stormx2023@gmail.com',
    pass: '2323123'
}

class Users{
    constructor(){
        this.users = new Array(199);
        this.currentIndex = 0;
    }
    
    hash(key){
        let index = 0;
        let fold = '';

        for(let i = 0; i < key.length; i++){
            fold = (fold * 10) + key.charCodeAt(i);

            if(fold >= 199){
                index += parseInt(fold % this.users.length);
                fold = '0';
            }
        }

        index += parseInt(fold % this.users.length);
        this.currentIndex = index % this.users.length;
        return this.currentIndex
    }

    insert(user){
        const index = this.hash(user.email);

        if(this.users[index] === undefined){
            this.users[index] = user;
        }else {
            while(this.users[index] !== undefined){
                index = (index + 1) % this.users.length;
            }

            this.users[index] = user;
        }
    }

    value(){
        for(let i = 0; i < this.users.length; i++){
            if(this.users[i] !== undefined){
                console.log(`Index: ${i}`);
                console.log(`Name: ${this.users[i].name}`);
                console.log(`Email: ${this.users[i].email}`);
                console.log(`Password: ${this.users[i].pass}`);
                console.log('----------------------');
            }
        }
    }
}

const users = new Users();
users.insert(newUser);
users.insert(newUser2);
users.value();







































/*function exemple4(f){
    let meio = Math.floor(f.length / 2);
    let esquerda = f.slice(0, meio);
    let direita = f.slice(meio);
    let result = [];
    let i = 0;
    let j = 0;

    while(i < esquerda.length && j < direita.length){
        if(esquerda[i] > direita[j]){
            result.push(direita[j]);
            i++
        } else {
            result.push(esquerda[i]);
            j++
        }
    }

    return result;
}

console.log(exemple4([1, 2, 3, 4, 5, 6, 7, 25, 8, 1, 30, 10, 8, 9, 10]));*/

