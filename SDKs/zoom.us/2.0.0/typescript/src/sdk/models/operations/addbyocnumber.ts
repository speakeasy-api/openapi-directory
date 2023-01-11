import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AddByocNumberApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=carrier" })
  carrier: string;

  @SpeakeasyMetadata({ data: "json, name=phone_numbers" })
  phoneNumbers: string[];

  @SpeakeasyMetadata({ data: "json, name=site_id" })
  siteId?: string;
}


export class AddByocNumberMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=carrier" })
  carrier: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=phone_numbers;json=true" })
  phoneNumbers: string[];

  @SpeakeasyMetadata({ data: "multipart_form, name=site_id" })
  siteId?: string;
}


export class AddByocNumberRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: AddByocNumberApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: AddByocNumberMultipartFormData;
}


export class AddByocNumber201ApplicationJsonPhoneNumbers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;
}


export class AddByocNumber201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=phone_numbers", elemType: AddByocNumber201ApplicationJsonPhoneNumbers })
  phoneNumbers?: AddByocNumber201ApplicationJsonPhoneNumbers[];
}


export class AddByocNumberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: AddByocNumberRequests;
}


export class AddByocNumberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  addBYOCNumber201ApplicationJSONObject?: AddByocNumber201ApplicationJson;
}
