import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetADevicePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deviceId" })
  deviceId: string;
}


export class GetADeviceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


// GetADevice200ApplicationJsonAssignee
/** 
 * User to whom the device has been assigned.
**/
export class GetADevice200ApplicationJsonAssignee extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=extension_number" })
  extensionNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// GetADevice200ApplicationJsonProvisionSipAccountsSharedLineLineSubscription
/** 
 * Line subscription.
**/
export class GetADevice200ApplicationJsonProvisionSipAccountsSharedLineLineSubscription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=extension_number" })
  extensionNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=phone_number" })
  phoneNumber?: string;
}


// GetADevice200ApplicationJsonProvisionSipAccountsSharedLine
/** 
 * Return additional provisioning information with generic device SIP credentials.
**/
export class GetADevice200ApplicationJsonProvisionSipAccountsSharedLine extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alias" })
  alias?: string;

  @SpeakeasyMetadata({ data: "json, name=line_subscription" })
  lineSubscription?: GetADevice200ApplicationJsonProvisionSipAccountsSharedLineLineSubscription;

  @SpeakeasyMetadata({ data: "json, name=outbound_caller_id" })
  outboundCallerId?: string;
}


export class GetADevice200ApplicationJsonProvisionSipAccounts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorization_id" })
  authorizationId?: string;

  @SpeakeasyMetadata({ data: "json, name=outbound_proxy" })
  outboundProxy?: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=shared_line" })
  sharedLine?: GetADevice200ApplicationJsonProvisionSipAccountsSharedLine;

  @SpeakeasyMetadata({ data: "json, name=sip_domain" })
  sipDomain?: string;

  @SpeakeasyMetadata({ data: "json, name=user_name" })
  userName?: string;
}

export enum GetADevice200ApplicationJsonProvisionTypeEnum {
    Assisted = "assisted",
    Ztp = "ztp",
    Manual = "manual"
}


// GetADevice200ApplicationJsonProvision
/** 
 * Provisioning information of a device.
**/
export class GetADevice200ApplicationJsonProvision extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sip_accounts", elemType: GetADevice200ApplicationJsonProvisionSipAccounts })
  sipAccounts?: GetADevice200ApplicationJsonProvisionSipAccounts[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GetADevice200ApplicationJsonProvisionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class GetADevice200ApplicationJsonSite extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export enum GetADevice200ApplicationJsonStatusEnum {
    Online = "online",
    Offline = "offline"
}


export class GetADevice200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assignee" })
  assignee?: GetADevice200ApplicationJsonAssignee;

  @SpeakeasyMetadata({ data: "json, name=device_type" })
  deviceType?: string;

  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=mac_address" })
  macAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=provision" })
  provision?: GetADevice200ApplicationJsonProvision;

  @SpeakeasyMetadata({ data: "json, name=site" })
  site?: GetADevice200ApplicationJsonSite;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GetADevice200ApplicationJsonStatusEnum;
}


export class GetADeviceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetADevicePathParams;

  @SpeakeasyMetadata()
  security: GetADeviceSecurity;
}


export class GetADeviceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getADevice200ApplicationJSONObject?: GetADevice200ApplicationJson;
}
