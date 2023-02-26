import fs from 'fs'

export type readtype= {
    (path: fs.PathLike, options?: BufferEncoding | {
        encoding: BufferEncoding | null;
        withFileTypes?: false | undefined;
    } | null | undefined): Promise<any>;
    (path: fs.PathLike, options: "buffer" |any): Promise<any>;
    (path: fs.PathLike, options?: BufferEncoding | any  | undefined): Promise<any>;
    (path: fs.PathLike, options: fs.ObjectEncodingOptions & any): Promise<any>;
  }


  