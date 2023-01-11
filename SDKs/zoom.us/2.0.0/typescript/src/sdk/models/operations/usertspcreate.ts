import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserTspCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}

export enum UserTspCreateTspAccountsListDialInNumbersTypeEnum {
    Toll = "toll",
    Tollfree = "tollfree",
    MediaLink = "media_link"
}


export class UserTspCreateTspAccountsListDialInNumbers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=country_label" })
  countryLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: UserTspCreateTspAccountsListDialInNumbersTypeEnum;
}

export enum UserTspCreateTspAccountsListTspBridgeEnum {
    UsTspTb = "US_TSP_TB",
    EuTspTb = "EU_TSP_TB"
}


// UserTspCreateTspAccountsList
/** 
 * List of TSP accounts.
**/
export class UserTspCreateTspAccountsList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conference_code, multipart_form, name=conference_code" })
  conferenceCode: string;

  @SpeakeasyMetadata({ data: "json, name=dial_in_numbers, multipart_form, name=dial_in_numbers;json=true", elemType: UserTspCreateTspAccountsListDialInNumbers })
  dialInNumbers?: UserTspCreateTspAccountsListDialInNumbers[];

  @SpeakeasyMetadata({ data: "json, name=leader_pin, multipart_form, name=leader_pin" })
  leaderPin: string;

  @SpeakeasyMetadata({ data: "json, name=tsp_bridge, multipart_form, name=tsp_bridge" })
  tspBridge?: UserTspCreateTspAccountsListTspBridgeEnum;
}


export class UserTspCreateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  tspAccountsList?: UserTspCreateTspAccountsList;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  tspAccountsList1?: UserTspCreateTspAccountsList;
}


export class UserTspCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UserTspCreatePathParams;

  @SpeakeasyMetadata()
  request: UserTspCreateRequests;
}


export class UserTspCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tspAccountsList?: UserTspCreateTspAccountsList;
}
