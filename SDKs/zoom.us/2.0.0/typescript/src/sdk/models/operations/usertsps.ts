import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserTsPsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}

export enum UserTsPs200ApplicationJsonTspAccountsListDialInNumbersTypeEnum {
    Toll = "toll",
    Tollfree = "tollfree",
    MediaLink = "media_link"
}


export class UserTsPs200ApplicationJsonTspAccountsListDialInNumbers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=country_label" })
  countryLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: UserTsPs200ApplicationJsonTspAccountsListDialInNumbersTypeEnum;
}

export enum UserTsPs200ApplicationJsonTspAccountsListTspBridgeEnum {
    UsTspTb = "US_TSP_TB",
    EuTspTb = "EU_TSP_TB"
}


// UserTsPs200ApplicationJsonTspAccountsList
/** 
 * List of TSP accounts.
**/
export class UserTsPs200ApplicationJsonTspAccountsList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conference_code" })
  conferenceCode: string;

  @SpeakeasyMetadata({ data: "json, name=dial_in_numbers", elemType: UserTsPs200ApplicationJsonTspAccountsListDialInNumbers })
  dialInNumbers?: UserTsPs200ApplicationJsonTspAccountsListDialInNumbers[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=leader_pin" })
  leaderPin: string;

  @SpeakeasyMetadata({ data: "json, name=tsp_bridge" })
  tspBridge?: UserTsPs200ApplicationJsonTspAccountsListTspBridgeEnum;
}


export class UserTsPs200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tsp_accounts", elemType: UserTsPs200ApplicationJsonTspAccountsList })
  tspAccounts?: UserTsPs200ApplicationJsonTspAccountsList[];
}


export class UserTsPsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UserTsPsPathParams;
}


export class UserTsPsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userTSPs200ApplicationJSONObject?: UserTsPs200ApplicationJson;
}
