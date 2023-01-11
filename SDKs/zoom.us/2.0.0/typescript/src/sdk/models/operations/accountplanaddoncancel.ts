import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AccountPlanAddonCancelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}

export enum AccountPlanAddonCancelApplicationJsonActionEnum {
    Cancel = "cancel"
}


// AccountPlanAddonCancelApplicationJson
/** 
 * Account plan object
**/
export class AccountPlanAddonCancelApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: AccountPlanAddonCancelApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}

export enum AccountPlanAddonCancelMultipartFormDataActionEnum {
    Cancel = "cancel"
}


// AccountPlanAddonCancelMultipartFormData
/** 
 * Account plan object
**/
export class AccountPlanAddonCancelMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=action" })
  action?: AccountPlanAddonCancelMultipartFormDataActionEnum;

  @SpeakeasyMetadata({ data: "multipart_form, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=reason" })
  reason?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=type" })
  type?: string;
}


export class AccountPlanAddonCancelRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: AccountPlanAddonCancelApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: AccountPlanAddonCancelMultipartFormData;
}


export class AccountPlanAddonCancelSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class AccountPlanAddonCancelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AccountPlanAddonCancelPathParams;

  @SpeakeasyMetadata()
  request?: AccountPlanAddonCancelRequests;

  @SpeakeasyMetadata()
  security: AccountPlanAddonCancelSecurity;
}


export class AccountPlanAddonCancelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  accountPlanAddonCancel204ApplicationJSONAny?: any;
}
