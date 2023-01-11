import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AddInternalNumbersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}

export enum AddInternalNumbersApplicationJsonInternalNumbersLanguagesEnum {
    EnGb = "en-GB",
    EnUs = "en-US",
    DeDe = "de-DE"
}


export class AddInternalNumbersApplicationJsonInternalNumbers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_for_external_meetings" })
  allowForExternalMeetings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allow_join" })
  allowJoin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country: string;

  @SpeakeasyMetadata({ data: "json, name=display_number" })
  displayNumber: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels: string;

  @SpeakeasyMetadata({ data: "json, name=languages" })
  languages: AddInternalNumbersApplicationJsonInternalNumbersLanguagesEnum;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: number;

  @SpeakeasyMetadata({ data: "json, name=visible" })
  visible?: boolean;
}


export class AddInternalNumbersApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=internal_numbers", elemType: AddInternalNumbersApplicationJsonInternalNumbers })
  internalNumbers?: AddInternalNumbersApplicationJsonInternalNumbers[];
}

export enum AddInternalNumbersMultipartFormDataInternalNumbersLanguagesEnum {
    EnGb = "en-GB",
    EnUs = "en-US",
    DeDe = "de-DE"
}


export class AddInternalNumbersMultipartFormDataInternalNumbers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_for_external_meetings" })
  allowForExternalMeetings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allow_join" })
  allowJoin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country: string;

  @SpeakeasyMetadata({ data: "json, name=display_number" })
  displayNumber: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels: string;

  @SpeakeasyMetadata({ data: "json, name=languages" })
  languages: AddInternalNumbersMultipartFormDataInternalNumbersLanguagesEnum;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: number;

  @SpeakeasyMetadata({ data: "json, name=visible" })
  visible?: boolean;
}


export class AddInternalNumbersMultipartFormData1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=internal_numbers;json=true", elemType: AddInternalNumbersMultipartFormDataInternalNumbers })
  internalNumbers?: AddInternalNumbersMultipartFormDataInternalNumbers[];
}


export class AddInternalNumbersRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: AddInternalNumbersApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: AddInternalNumbersMultipartFormData1;
}

export enum AddInternalNumbers201ApplicationJsonInternalNumbersLanguagesEnum {
    EnGb = "en-GB",
    EnUs = "en-US",
    DeDe = "de-DE"
}


export class AddInternalNumbers201ApplicationJsonInternalNumbers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_for_external_meetings" })
  allowForExternalMeetings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allow_join" })
  allowJoin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country: string;

  @SpeakeasyMetadata({ data: "json, name=display_number" })
  displayNumber: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels: string;

  @SpeakeasyMetadata({ data: "json, name=languages" })
  languages: AddInternalNumbers201ApplicationJsonInternalNumbersLanguagesEnum;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: number;

  @SpeakeasyMetadata({ data: "json, name=visible" })
  visible?: boolean;
}


export class AddInternalNumbers201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=internal_numbers", elemType: AddInternalNumbers201ApplicationJsonInternalNumbers })
  internalNumbers?: AddInternalNumbers201ApplicationJsonInternalNumbers[];
}


export class AddInternalNumbersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddInternalNumbersPathParams;

  @SpeakeasyMetadata()
  request?: AddInternalNumbersRequests;
}


export class AddInternalNumbersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  addInternalNumbers201ApplicationJSONObject?: AddInternalNumbers201ApplicationJson;
}
