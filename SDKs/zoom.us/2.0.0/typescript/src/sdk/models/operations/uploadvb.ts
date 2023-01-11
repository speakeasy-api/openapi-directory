import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UploadVbPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


export class UploadVbRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=file" })
  file?: string;
}


export class UploadVb201ApplicationJson extends SpeakeasyBase {
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


export class UploadVbRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UploadVbPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: UploadVbRequestBody;
}


export class UploadVbResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  uploadVB201ApplicationJSONObject?: UploadVb201ApplicationJson;
}
