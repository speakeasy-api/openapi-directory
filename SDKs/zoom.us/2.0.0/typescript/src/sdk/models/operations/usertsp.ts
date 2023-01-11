import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum UserTspTspIdEnum {
    One = "1",
    Two = "2"
}


export class UserTspPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tspId" })
  tspId: UserTspTspIdEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}

export enum UserTspTspAccountDialInNumbersTypeEnum {
    Toll = "toll",
    Tollfree = "tollfree",
    MediaLink = "media_link"
}


export class UserTspTspAccountDialInNumbers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=country_label" })
  countryLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: UserTspTspAccountDialInNumbersTypeEnum;
}

export enum UserTspTspAccountTspBridgeEnum {
    UsTspTb = "US_TSP_TB",
    EuTspTb = "EU_TSP_TB"
}


// UserTspTspAccount
/** 
 * TSP account of the user.
**/
export class UserTspTspAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conference_code" })
  conferenceCode: string;

  @SpeakeasyMetadata({ data: "json, name=dial_in_numbers", elemType: UserTspTspAccountDialInNumbers })
  dialInNumbers?: UserTspTspAccountDialInNumbers[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=leader_pin" })
  leaderPin: string;

  @SpeakeasyMetadata({ data: "json, name=tsp_bridge" })
  tspBridge?: UserTspTspAccountTspBridgeEnum;
}


export class UserTspRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UserTspPathParams;
}


export class UserTspResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tspAccount?: UserTspTspAccount;
}
