import multer from 'multer';
import path from 'path';
import {v4} from 'uuid';
import boom from '@hapi/boom';

class UploadImage{
    uploadImage(){
      let storage = multer.diskStorage({
        destination: (req, file, cb)=>{
          cb(null, path.join(__dirname, '../public/images'));
        },
        filename: (req, file, cb)=>{
          cb(null, v4() + path.extname(file.originalname));
        }
      })

      let upload = multer({
        storage,
        fileFilter: (req, file, cb)=>{
          const extFile = /jpg|jpeg|png|gif|svg/
          const mimeFile:boolean = extFile.test(file.mimetype);
          const extFiles:boolean = extFile.test(path.extname(file.originalname));
          if (mimeFile && extFiles) {
            cb(null, true);
          }else{
            cb(boom.notFound("Error, solo imagenes o extenciones jpg, jpeg, png, gif, svg"));
          }
        },
        limits: {
          fileSize: 2000000
        }
      }).single('avatar');
      return upload;
    }
}

export default UploadImage;
