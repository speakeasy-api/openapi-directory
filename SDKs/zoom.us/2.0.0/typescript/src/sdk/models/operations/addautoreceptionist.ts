import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AddAutoReceptionistApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=site_id" })
  siteId?: string;
}


export class AddAutoReceptionistMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=site_id" })
  siteId?: string;
}


export class AddAutoReceptionistRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: AddAutoReceptionistApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: AddAutoReceptionistMultipartFormData;
}


export class AddAutoReceptionist201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=extension_number" })
  extensionNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class AddAutoReceptionistRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: AddAutoReceptionistRequests;
}


export class AddAutoReceptionistResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  addAutoReceptionist201ApplicationJSONObject?: AddAutoReceptionist201ApplicationJson;
}
