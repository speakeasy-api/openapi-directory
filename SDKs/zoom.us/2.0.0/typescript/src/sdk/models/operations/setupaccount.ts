import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SetUpAccountPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


// SetUpAccountApplicationJsonEmergencyAddress
/** 
 * Specify emergency address for the account.
**/
export class SetUpAccountApplicationJsonEmergencyAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address_line1" })
  addressLine1: string;

  @SpeakeasyMetadata({ data: "json, name=address_line2" })
  addressLine2?: string;

  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country: string;

  @SpeakeasyMetadata({ data: "json, name=state_code" })
  stateCode?: string;

  @SpeakeasyMetadata({ data: "json, name=zip" })
  zip?: string;
}


export class SetUpAccountApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=emergency_address" })
  emergencyAddress: SetUpAccountApplicationJsonEmergencyAddress;

  @SpeakeasyMetadata({ data: "json, name=extension_number" })
  extensionNumber: string;
}


// SetUpAccountMultipartFormDataEmergencyAddress
/** 
 * Specify emergency address for the account.
**/
export class SetUpAccountMultipartFormDataEmergencyAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address_line1" })
  addressLine1: string;

  @SpeakeasyMetadata({ data: "json, name=address_line2" })
  addressLine2?: string;

  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country: string;

  @SpeakeasyMetadata({ data: "json, name=state_code" })
  stateCode?: string;

  @SpeakeasyMetadata({ data: "json, name=zip" })
  zip?: string;
}


export class SetUpAccountMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=emergency_address;json=true" })
  emergencyAddress: SetUpAccountMultipartFormDataEmergencyAddress;

  @SpeakeasyMetadata({ data: "multipart_form, name=extension_number" })
  extensionNumber: string;
}


export class SetUpAccountRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: SetUpAccountApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: SetUpAccountMultipartFormData;
}


export class SetUpAccountSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class SetUpAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SetUpAccountPathParams;

  @SpeakeasyMetadata()
  request?: SetUpAccountRequests;

  @SpeakeasyMetadata()
  security: SetUpAccountSecurity;
}


export class SetUpAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
