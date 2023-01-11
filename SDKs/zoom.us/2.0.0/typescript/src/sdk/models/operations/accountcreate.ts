import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AccountCreateApplicationJsonOptionsPayModeEnum {
    Master = "master",
    Sub = "sub"
}


// AccountCreateApplicationJsonOptions
/** 
 * Account options object.
**/
export class AccountCreateApplicationJsonOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billing_auto_renew" })
  billingAutoRenew?: boolean;

  @SpeakeasyMetadata({ data: "json, name=meeting_connector_list" })
  meetingConnectorList?: string[];

  @SpeakeasyMetadata({ data: "json, name=pay_mode" })
  payMode?: AccountCreateApplicationJsonOptionsPayModeEnum;

  @SpeakeasyMetadata({ data: "json, name=room_connector_list" })
  roomConnectorList?: string[];

  @SpeakeasyMetadata({ data: "json, name=share_mc" })
  shareMc?: boolean;

  @SpeakeasyMetadata({ data: "json, name=share_rc" })
  shareRc?: boolean;
}


// AccountCreateApplicationJson
/** 
 * The account object represents an account on Zoom. The account owner is the user who created the account or had an account created for them. You can read more about the Zoom account structure <a href='https://medium.com/zoom-developer-blog/a-brief-look-at-zoom-account-structures-1d19c745bf8a' target='_blank'>here</a>.
**/
export class AccountCreateApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_name" })
  accountName?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName: string;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName: string;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: AccountCreateApplicationJsonOptions;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;
}

export enum AccountCreateMultipartFormDataOptionsPayModeEnum {
    Master = "master",
    Sub = "sub"
}


// AccountCreateMultipartFormDataOptions
/** 
 * Account options object.
**/
export class AccountCreateMultipartFormDataOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billing_auto_renew" })
  billingAutoRenew?: boolean;

  @SpeakeasyMetadata({ data: "json, name=meeting_connector_list" })
  meetingConnectorList?: string[];

  @SpeakeasyMetadata({ data: "json, name=pay_mode" })
  payMode?: AccountCreateMultipartFormDataOptionsPayModeEnum;

  @SpeakeasyMetadata({ data: "json, name=room_connector_list" })
  roomConnectorList?: string[];

  @SpeakeasyMetadata({ data: "json, name=share_mc" })
  shareMc?: boolean;

  @SpeakeasyMetadata({ data: "json, name=share_rc" })
  shareRc?: boolean;
}


// AccountCreateMultipartFormData
/** 
 * The account object represents an account on Zoom. The account owner is the user who created the account or had an account created for them. You can read more about the Zoom account structure <a href='https://medium.com/zoom-developer-blog/a-brief-look-at-zoom-account-structures-1d19c745bf8a' target='_blank'>here</a>.
**/
export class AccountCreateMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=account_name" })
  accountName?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=first_name" })
  firstName: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=last_name" })
  lastName: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=options;json=true" })
  options?: AccountCreateMultipartFormDataOptions;

  @SpeakeasyMetadata({ data: "multipart_form, name=password" })
  password: string;
}


export class AccountCreateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: AccountCreateApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: AccountCreateMultipartFormData;
}


export class AccountCreate201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=owner_email" })
  ownerEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=owner_id" })
  ownerId?: string;
}


export class AccountCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: AccountCreateRequests;
}


export class AccountCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  accountCreate201ApplicationJSONObject?: AccountCreate201ApplicationJson;
}
