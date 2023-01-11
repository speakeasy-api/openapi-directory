import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AccountOptionsUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}

export enum AccountOptionsUpdateApplicationJsonPayModeEnum {
    Master = "master",
    Sub = "sub"
}


// AccountOptionsUpdateApplicationJson
/** 
 * Account options object.
**/
export class AccountOptionsUpdateApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billing_auto_renew" })
  billingAutoRenew?: boolean;

  @SpeakeasyMetadata({ data: "json, name=meeting_connector_list" })
  meetingConnectorList?: string[];

  @SpeakeasyMetadata({ data: "json, name=pay_mode" })
  payMode?: AccountOptionsUpdateApplicationJsonPayModeEnum;

  @SpeakeasyMetadata({ data: "json, name=room_connector_list" })
  roomConnectorList?: string[];

  @SpeakeasyMetadata({ data: "json, name=share_mc" })
  shareMc?: boolean;

  @SpeakeasyMetadata({ data: "json, name=share_rc" })
  shareRc?: boolean;
}

export enum AccountOptionsUpdateMultipartFormDataPayModeEnum {
    Master = "master",
    Sub = "sub"
}


// AccountOptionsUpdateMultipartFormData
/** 
 * Account options object.
**/
export class AccountOptionsUpdateMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=billing_auto_renew" })
  billingAutoRenew?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=meeting_connector_list;json=true" })
  meetingConnectorList?: string[];

  @SpeakeasyMetadata({ data: "multipart_form, name=pay_mode" })
  payMode?: AccountOptionsUpdateMultipartFormDataPayModeEnum;

  @SpeakeasyMetadata({ data: "multipart_form, name=room_connector_list;json=true" })
  roomConnectorList?: string[];

  @SpeakeasyMetadata({ data: "multipart_form, name=share_mc" })
  shareMc?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=share_rc" })
  shareRc?: boolean;
}


export class AccountOptionsUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: AccountOptionsUpdateApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: AccountOptionsUpdateMultipartFormData;
}


export class AccountOptionsUpdateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class AccountOptionsUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AccountOptionsUpdatePathParams;

  @SpeakeasyMetadata()
  request: AccountOptionsUpdateRequests;

  @SpeakeasyMetadata()
  security: AccountOptionsUpdateSecurity;
}


export class AccountOptionsUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
