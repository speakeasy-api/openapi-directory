import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListInternalCalloutCountriesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


export class ListInternalCalloutCountries200ApplicationJsonCalloutCountries extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class ListInternalCalloutCountries200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=callout_countries", elemType: ListInternalCalloutCountries200ApplicationJsonCalloutCountries })
  calloutCountries?: ListInternalCalloutCountries200ApplicationJsonCalloutCountries[];

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords?: number;
}


export class ListInternalCalloutCountriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListInternalCalloutCountriesPathParams;
}


export class ListInternalCalloutCountriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listInternalCalloutCountries200ApplicationJSONObject?: ListInternalCalloutCountries200ApplicationJson;
}
