import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetACommonAreaPhonePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=commonAreaPhoneId" })
  commonAreaPhoneId: string;
}


export class GetACommonAreaPhoneSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class GetACommonAreaPhone200ApplicationJsonProvisionSipAccounts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorization_id" })
  authorizationId?: string;

  @SpeakeasyMetadata({ data: "json, name=outbound_proxy" })
  outboundProxy?: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=sip_domain" })
  sipDomain?: string;

  @SpeakeasyMetadata({ data: "json, name=user_name" })
  userName?: string;
}

export enum GetACommonAreaPhone200ApplicationJsonProvisionTypeEnum {
    Assisted = "assisted",
    Ztp = "ztp",
    Manual = "manual"
}


// GetACommonAreaPhone200ApplicationJsonProvision
/** 
 * Provisioning information of the common area phone.
**/
export class GetACommonAreaPhone200ApplicationJsonProvision extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sip_accounts", elemType: GetACommonAreaPhone200ApplicationJsonProvisionSipAccounts })
  sipAccounts?: GetACommonAreaPhone200ApplicationJsonProvisionSipAccounts[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GetACommonAreaPhone200ApplicationJsonProvisionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class GetACommonAreaPhone200ApplicationJsonSite extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class GetACommonAreaPhone200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=device_type" })
  deviceType?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=mac_address" })
  macAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=provision" })
  provision?: GetACommonAreaPhone200ApplicationJsonProvision;

  @SpeakeasyMetadata({ data: "json, name=site" })
  site?: GetACommonAreaPhone200ApplicationJsonSite;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


export class GetACommonAreaPhoneRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetACommonAreaPhonePathParams;

  @SpeakeasyMetadata()
  security: GetACommonAreaPhoneSecurity;
}


export class GetACommonAreaPhoneResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getACommonAreaPhone200ApplicationJSONObject?: GetACommonAreaPhone200ApplicationJson;
}
