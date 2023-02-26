# Image Processing API

## technology:
1. node.js
2. express
3. typescript
4. jasmine
5. javascript
6. sharp lib

## Needed script
1. nodemon .\src\server.ts || npm run start > to start the server 
2. npm run test > to build and test the server
3. npm run build > to complie ts to js 
4. npm run jasmine > to use the jasmine test 
5. npm run prettier > to use the prettier

##  to start 
 npm i   

## author script
 youseef sadec


## health endpoint
Route.add(‘/api/api?name=panthon&width=2122&height=12123’, Method=’GET’) {
    If (user.connect() == “Successful”) {
        headers={‘http_status’:200, ‘cache-control’:  ‘no-cache’}
        body={‘status’: ‘available’}
        }
    Else {
        headers={‘http_status’:500, ‘cache-control’:  ‘no-cache’}
        body={‘status’: ‘unavailable’}
        }
}