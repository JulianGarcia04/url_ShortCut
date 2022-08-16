import {Router} from 'express';
import UploadImage from '../middlewares/uploadImage';
import ServicesUploadImages from '../services/services.uploadImages';

class RoutesUploadImage extends ServicesUploadImages{
  private _router:Router = Router();
  private _multerUpload = new UploadImage().uploadImage;

  constructor() {
    super();
    this._router.post('/user/upload-image', this._multerUpload(), this.uploadImageRequest);
  }

  public get router(){
    return this._router;
  }
}

export default RoutesUploadImage;
