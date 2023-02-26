import app from './../../router/uilities/sharp';
import sharp from 'sharp';
import path from 'path'
import supertest from 'supertest';
const requests = supertest(app)

console.log();
// test imge  processing
describe("img processing", () => {
    it("should work وه ه و",async()=>{
        const lolo = await sharp(path.join(__dirname,"../../../src/router/imgs/feeder.jpg"))
          .resize(200)
          .toBuffer()  
            const repo= sharp(lolo) ;
            const lala= await repo.metadata();
         expect(lala.width).toBe(200)
    })
})
