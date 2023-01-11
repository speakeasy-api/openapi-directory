import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AccountPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}

export enum Account200ApplicationJsonOptionsPayModeEnum {
    Master = "master",
    Sub = "sub"
}


// Account200ApplicationJsonOptions
/** 
 * Account options object.
**/
export class Account200ApplicationJsonOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billing_auto_renew" })
  billingAutoRenew?: boolean;

  @SpeakeasyMetadata({ data: "json, name=meeting_connector_list" })
  meetingConnectorList?: string[];

  @SpeakeasyMetadata({ data: "json, name=pay_mode" })
  payMode?: Account200ApplicationJsonOptionsPayModeEnum;

  @SpeakeasyMetadata({ data: "json, name=room_connector_list" })
  roomConnectorList?: string[];

  @SpeakeasyMetadata({ data: "json, name=share_mc" })
  shareMc?: boolean;

  @SpeakeasyMetadata({ data: "json, name=share_rc" })
  shareRc?: boolean;
}


export class Account200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: Account200ApplicationJsonOptions;

  @SpeakeasyMetadata({ data: "json, name=owner_email" })
  ownerEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=owner_id" })
  ownerId?: string;

  @SpeakeasyMetadata({ data: "json, name=vanity_url" })
  vanityUrl?: string;
}


export class AccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AccountPathParams;
}


export class AccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  account200ApplicationJSONObject?: Account200ApplicationJson;
}
