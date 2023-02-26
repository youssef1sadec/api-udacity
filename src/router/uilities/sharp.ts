import path from 'path'; // import path module to get the image paths
import sharp from 'sharp'; // import sharp lib to resize the images
import { Router } from 'express'; //importing express
import fs from 'fs';
import { promisify } from 'util';
import type { Request, Response } from 'express';
import { readtype } from '../../types';
const Arouters: Router = Router();
const read: readtype = promisify(fs.readdir);

Arouters.get(
  '/',
  async (req: Request, res: Response): Promise<Response | void> => {
    // the name of the img & width & higth
    const exchange = req.query.name as string;
    const height = req.query.height as string;
    const width = req.query.width as string;
    // the new imgs path & sorce of the img dir
    const sendPath: string = `${exchange}-${width}x${height}size.jpg`;
    const newPath: string = path.join(
      `${__dirname}/../../../client/imags/`,
      sendPath
    );
    const oldImgPath: string = path.join(
      `${__dirname}/../imgs`,
      `${exchange}.jpg`
    );

    try {
      const plo: string = path.resolve(`./client/imags`);
      // use sharp lib
      /// use the caching
      console.log(plo);
      const coco = async (): Promise<undefined | string> => {
        var resolve: undefined | string;
        try {
          var data: string[] = await read(plo);
          data.filter((item: string) => {
            if (sendPath === item) {
              resolve = item;
            }
          });
          return resolve;
        } catch (err: unknown) {
          throw err;
        }
      };
      if (await coco()) {
        const lal: undefined | string = await coco();
        // console.log("not sharp");
        return res.sendFile(`${plo}/${lal}`);
      } else {
        // console.log("sharp")
        await sharp(oldImgPath)
          .resize(Number(height), Number(width))
          .toFile(newPath);
      }
    } catch (err: unknown) {
      //err at server
      return res.send('server errorS' + err);
    } // return api
    return res.status(200).sendFile(newPath);
  }
);

export default Arouters;
