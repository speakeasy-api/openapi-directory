import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UploadGroupVbPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: string;
}


export class UploadGroupVbQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=file_ids" })
  fileIds?: string;
}


export class UploadGroupVbRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=file" })
  file?: string;
}


export class UploadGroupVb201ApplicationJson extends SpeakeasyBase {
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


export class UploadGroupVbRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UploadGroupVbPathParams;

  @SpeakeasyMetadata()
  queryParams: UploadGroupVbQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: UploadGroupVbRequestBody;
}


export class UploadGroupVbResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  uploadGroupVB201ApplicationJSONObject?: UploadGroupVb201ApplicationJson;
}
