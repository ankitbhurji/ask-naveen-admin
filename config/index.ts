import * as dotenv from 'dotenv';
dotenv.config();
const prfix="nj_";
const config = {
    jwt: {
        // The secret is used to sign and validate signatures.
        secret: process.env.JWT_SECRET || '111',
        // The audience and issuer are used for validation purposes.
        //audience: process.env.JWT_AUDIENCE,
        //issuer: process.env.JWT_ISSUER
    },
    port: process.env.PORT || 9721,
    dbDetail:{
        dev:{
            DB_HOST : "localhost",
            DB_USER : "root",
            DB_PWD : "root",
            DB_NAME : "liclic_licdb"
        },
        prod:{
            DB_HOST : "10.250.0.18",
            DB_USER : "liclicl",
            DB_PWD : "gererou^5%gfGFt8",
            DB_NAME : "liclic_licdb"
        },
        local:{
            DB_HOST:'localhost',
            DB_USER:'root',
            DB_PWD:'',
            DB_NAME:'asknaveen'
        }
    },
    tablenames:{
        channel:prfix+"channel",
        channelHistory:prfix+"channel_history",
        user : prfix+"users"
    }
};

// Make our confirmation object available to the rest of our code.
export default config;