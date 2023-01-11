import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UploadVBuserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class UploadVBuserRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=file" })
  file?: string;
}


export class UploadVBuser201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=is_default" })
  isDefault?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class UploadVBuserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UploadVBuserPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: UploadVBuserRequestBody;
}


export class UploadVBuserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  uploadVBuser201ApplicationJSONObject?: UploadVBuser201ApplicationJson;
}
