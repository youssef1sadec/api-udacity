// import Express from 'express';
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
const read = promisify(fs.readdir);
import { Router } from 'express';
const Routers: Router = Router();
Routers.get('/', async (req, res) => {
  try {
    const plo: string = path.resolve(`./client/imags`);
    const checkDel=async () => {
        let data :string[]=await read(plo);
        console.log(data+"here inside");
    }
  } catch (err: unknown) {
    throw err;
  }
});
console.log(`${__dirname}/../../../client/imags`);
export default Routers;
