const fastify = require('fastify')({
    logger: true
})
const fastifySession = require('fastify-session');
const fastifyCookie = require('fastify-cookie');
const fs = require('fs');

function jsonReader(filePath, cb) {
    let a;
    fs.readFile(filePath, (err, fileData) => {
        if (err) {
            return cb && cb(err)
        }
        try {
            const object = JSON.parse(fileData)
            a = cb(null, object);
            return cb(null, object)
        } catch (err) {
            return cb && cb(err)
        }
    })
}

fastify.register(fastifyCookie);
fastify.register(fastifySession, {
    cookieName: 'sessionId',
    secret: '977fc3e9-132b-488c-9d56-e313c62bc4f1',
    cookie: { secure: false },
    expires: 1800000,
});

fastify.register(require('fastify-cors'), {
     origin: 'http://localhost:3000',
     credentials: 'true',
     allowMethods:
        'PROPFIND, PROPPATCH, COPY, MOVE, DELETE, MKCOL, LOCK, UNLOCK, PUT, GETLIB, VERSION-CONTROL, CHECKIN, CHECKOUT, UNCHECKOUT, REPORT, UPDATE, CANCELUPLOAD, HEAD, OPTIONS, GET, POST',
    allowedHeaders: [
        'Content-Type',
        'Authorization',
        'Cache-Control',
        'X-Custom-Header',
        'X-Requested-With',
        'Cookie',
    ], 
});

let on_server = []
fastify.post('/login', async (request, reply) => {
    const { email, password } = request.body

    jsonReader('./mock_db.json', (err, db) => {
        if (err) {
            console.log('Error reading file:', err)
            return
        }
        let user = db.users.find(u => u.email == email);

        if (typeof user !== undefined) {
            if (password === user.password) {
                on_server.push(email)
                request.session.authenticated = true
                request.session.user = { name: email };
                success=true;
            } else {
                request.session.authenticated = false;
            }

        } else{
            request.session.authenticated = false;
            success=false;
        }
    });
    reply.redirect('/')
});

fastify.post('/register', async (request, reply) => {
    const { email, password, full_name, group, variant, phone_number } = request.body
    jsonReader('./mock_db.json', (err, db) => {
        if (err) {
            console.log('Error reading file:', err)
            return
        }
        let user = db.users.find(u => u.email == email);
        if (user == undefined && /\S+@\S+\.\S+/.test(email)) {
            request.session.authenticated = true
            request.session.user = { name: email };
            let new_user = {
                "email": email,
                "password": password,

                "full_name": full_name,
                "group": group,
                "variant": variant,
                "phone_number": phone_number,
                "photo":'',
                "status":"user"
            };
            db.users.push(new_user)

            fs.writeFile('./mock_db.json', JSON.stringify(db), (err) => {
                if (err) console.log('Error writing file:', err)
            })
        }
    });
    reply.send({"user":{"name":email}})
    reply.redirect('/')
});

fastify.get('/profile', async (request, reply) => {
    let db = JSON.parse(fs.readFileSync('./mock_db.json'));
    let user = db.users.find(u => u.email == request.session.user.name)
    return user;
});

fastify.post('/change', async (request, reply) => {
    const {
        email,
        password,
        full_name,
        group,
        variant,
        phone_number,
        status
    } = request.body

    jsonReader('./mock_db.json', (err, db) => {
        if (err) {
            console.log('Error reading file:', err)
            return
        }
        
        let user = db.users.find(u => u.email == email);
        const index = db.users.indexOf(user);
        if (index > -1) {
            db.users.splice(index, 1);
        }

        request.session.authenticated = true
        request.session.user = { name: email };

        user = {
            "email": email,
            "password": password,
            "full_name": full_name,
            "group": group,
            "variant": variant,
            "phone_number": phone_number,
            "photo": user.photo,
            "status": status
        };
        db.users.push(user)

        fs.writeFile('./mock_db.json', JSON.stringify(db), (err) => {
            if (err) console.log('Error writing file:', err)
        })
    });
    reply.redirect('/')
    

});

fastify.get('/', async (request, reply) => {
    if (request.session.authenticated){
        return { "user": request.session.user }
    }
    
    return { "user": { name: false } }
})

fastify.get('/delete', (request, reply) => {
    if (request.session.authenticated){
        jsonReader('./mock_db.json', (err, db) => {
            if (err) {
                console.log('Error reading file:', err)
                return
            }
            
            let user = db.users.find(u => u.email == request.session.user.name);
            const index = db.users.indexOf(user);
            if (index > -1) {
                db.users.splice(index, 1);
            }

            fs.writeFile('./mock_db.json', JSON.stringify(db), (err) => {
                if (err) console.log('Error writing file:', err)
            })
        });
    }
    reply.redirect('/logout')
})

fastify.get('/logout', (request, reply) => {
    if (request.session.authenticated) {
        request.destroySession((err) => {
            if (err) {
                reply.status(500)
                return "Server error"
            }

            return { "logout": true }
        })

        return { "logout": true }
    }

    return { "logout": false }
});
  
fastify.listen({ port: 3001 }, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }})

const express = require('express')
const app = express()
const port = 3001
const cors = require('cors')
app.use(cors({'origin':'http://localhost:3000', "credentials":'true'}))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})