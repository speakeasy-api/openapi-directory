import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AddCalloutCountriesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


export class AddCalloutCountriesApplicationJsonCalloutCountries extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}


export class AddCalloutCountriesApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=callout_countries", elemType: AddCalloutCountriesApplicationJsonCalloutCountries })
  calloutCountries: AddCalloutCountriesApplicationJsonCalloutCountries[];
}


export class AddCalloutCountriesMultipartFormDataCalloutCountries extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}


export class AddCalloutCountriesMultipartFormData1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=callout_countries;json=true", elemType: AddCalloutCountriesMultipartFormDataCalloutCountries })
  calloutCountries: AddCalloutCountriesMultipartFormDataCalloutCountries[];
}


export class AddCalloutCountriesRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: AddCalloutCountriesApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: AddCalloutCountriesMultipartFormData1;
}


export class AddCalloutCountries201ApplicationJsonCalloutCountries extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class AddCalloutCountries201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=callout_countries", elemType: AddCalloutCountries201ApplicationJsonCalloutCountries })
  calloutCountries?: AddCalloutCountries201ApplicationJsonCalloutCountries[];
}


export class AddCalloutCountriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddCalloutCountriesPathParams;

  @SpeakeasyMetadata()
  request?: AddCalloutCountriesRequests;
}


export class AddCalloutCountriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  addCalloutCountries201ApplicationJSONObject?: AddCalloutCountries201ApplicationJson;
}
