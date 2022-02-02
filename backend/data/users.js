import bcrypt from 'bcryptjs'
const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 15),
        isAdmin: true
        
    },
    {
        name: 'John Doe',
        email: 'john@example.com',
        password: bcrypt.hashSync('123456', 10)
        
    },
    {
        name: 'Jane Doe',
        email: 'jane@example.com',
        password: bcrypt.hashSync('123456', 10),
        molp: {
            n: 'john',
            data: {
                mortar: "import",
                hash: "likels",
                koel : {
                    jatro: "no",
                    torea: true,
                    eret: 5
                }
            }    
        }
    },

]

export default users