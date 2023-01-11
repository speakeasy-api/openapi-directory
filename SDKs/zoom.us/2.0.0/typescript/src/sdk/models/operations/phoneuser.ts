import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PhoneUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class PhoneUserSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class PhoneUser200ApplicationJsonCallingPlan extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;
}


export class PhoneUser200ApplicationJsonPhoneNumbers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;
}

export enum PhoneUser200ApplicationJsonStatusEnum {
    Activate = "activate",
    Deactivate = "deactivate"
}


// PhoneUser200ApplicationJson
/** 
 * Zoom User Profile
**/
export class PhoneUser200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=calling_plan", elemType: PhoneUser200ApplicationJsonCallingPlan })
  callingPlan?: PhoneUser200ApplicationJsonCallingPlan[];

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=extension_number" })
  extensionNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=phone_numbers", elemType: PhoneUser200ApplicationJsonPhoneNumbers })
  phoneNumbers?: PhoneUser200ApplicationJsonPhoneNumbers[];

  @SpeakeasyMetadata({ data: "json, name=phone_user_id" })
  phoneUserId?: string;

  @SpeakeasyMetadata({ data: "json, name=site_admin" })
  siteAdmin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=site_id" })
  siteId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: PhoneUser200ApplicationJsonStatusEnum;
}


export class PhoneUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PhoneUserPathParams;

  @SpeakeasyMetadata()
  security: PhoneUserSecurity;
}


export class PhoneUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  phoneUser200ApplicationJSONObject?: PhoneUser200ApplicationJson;
}
