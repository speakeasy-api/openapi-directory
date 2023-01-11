import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetACommonAreaPhonePathParams extends SpeakeasyBase {
    commonAreaPhoneId: string;
}
export declare class GetACommonAreaPhoneSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class GetACommonAreaPhone200ApplicationJsonProvisionSipAccounts extends SpeakeasyBase {
    authorizationId?: string;
    outboundProxy?: string;
    password?: string;
    sipDomain?: string;
    userName?: string;
}
export declare enum GetACommonAreaPhone200ApplicationJsonProvisionTypeEnum {
    Assisted = "assisted",
    Ztp = "ztp",
    Manual = "manual"
}
/**
 * Provisioning information of the common area phone.
**/
export declare class GetACommonAreaPhone200ApplicationJsonProvision extends SpeakeasyBase {
    sipAccounts?: GetACommonAreaPhone200ApplicationJsonProvisionSipAccounts[];
    type?: GetACommonAreaPhone200ApplicationJsonProvisionTypeEnum;
    url?: string;
}
export declare class GetACommonAreaPhone200ApplicationJsonSite extends SpeakeasyBase {
    id?: string;
    name?: string;
}
export declare class GetACommonAreaPhone200ApplicationJson extends SpeakeasyBase {
    deviceType?: string;
    id?: string;
    macAddress?: string;
    name?: string;
    provision?: GetACommonAreaPhone200ApplicationJsonProvision;
    site?: GetACommonAreaPhone200ApplicationJsonSite;
    status?: string;
}
export declare class GetACommonAreaPhoneRequest extends SpeakeasyBase {
    pathParams: GetACommonAreaPhonePathParams;
    security: GetACommonAreaPhoneSecurity;
}
export declare class GetACommonAreaPhoneResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    getACommonAreaPhone200ApplicationJSONObject?: GetACommonAreaPhone200ApplicationJson;
}
