import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserPicturePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class UserPictureRequestBodyPicFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=pic_file" })
  picFile: string;
}


export class UserPictureRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  picFile: UserPictureRequestBodyPicFile;
}


export class UserPictureRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UserPicturePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: UserPictureRequestBody;
}


export class UserPictureResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
