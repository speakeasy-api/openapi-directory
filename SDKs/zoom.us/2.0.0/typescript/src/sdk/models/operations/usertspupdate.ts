import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum UserTspUpdateTspIdEnum {
    One = "1",
    Two = "2"
}


export class UserTspUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tspId" })
  tspId: UserTspUpdateTspIdEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}

export enum UserTspUpdateTspAccountDialInNumbersTypeEnum {
    Toll = "toll",
    Tollfree = "tollfree",
    MediaLink = "media_link"
}


export class UserTspUpdateTspAccountDialInNumbers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=country_label" })
  countryLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: UserTspUpdateTspAccountDialInNumbersTypeEnum;
}

export enum UserTspUpdateTspAccountTspBridgeEnum {
    UsTspTb = "US_TSP_TB",
    EuTspTb = "EU_TSP_TB"
}


// UserTspUpdateTspAccount
/** 
 * TSP account.
**/
export class UserTspUpdateTspAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conference_code, multipart_form, name=conference_code" })
  conferenceCode: string;

  @SpeakeasyMetadata({ data: "json, name=dial_in_numbers, multipart_form, name=dial_in_numbers;json=true", elemType: UserTspUpdateTspAccountDialInNumbers })
  dialInNumbers?: UserTspUpdateTspAccountDialInNumbers[];

  @SpeakeasyMetadata({ data: "json, name=leader_pin, multipart_form, name=leader_pin" })
  leaderPin: string;

  @SpeakeasyMetadata({ data: "json, name=tsp_bridge, multipart_form, name=tsp_bridge" })
  tspBridge?: UserTspUpdateTspAccountTspBridgeEnum;
}


export class UserTspUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  tspAccount?: UserTspUpdateTspAccount;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  tspAccount1?: UserTspUpdateTspAccount;
}


export class UserTspUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UserTspUpdatePathParams;

  @SpeakeasyMetadata()
  request: UserTspUpdateRequests;
}


export class UserTspUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
