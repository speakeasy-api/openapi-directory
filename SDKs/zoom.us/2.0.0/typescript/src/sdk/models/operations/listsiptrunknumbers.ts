import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListSipTrunkNumbersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class ListSipTrunkNumbers200ApplicationJsonPhoneNumbers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;
}


export class ListSipTrunkNumbers200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=phone_numbers", elemType: ListSipTrunkNumbers200ApplicationJsonPhoneNumbers })
  phoneNumbers?: ListSipTrunkNumbers200ApplicationJsonPhoneNumbers[];

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords?: number;
}


export class ListSipTrunkNumbersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: ListSipTrunkNumbersSecurity;
}


export class ListSipTrunkNumbersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listSipTrunkNumbers200ApplicationJSONObject?: ListSipTrunkNumbers200ApplicationJson;
}
