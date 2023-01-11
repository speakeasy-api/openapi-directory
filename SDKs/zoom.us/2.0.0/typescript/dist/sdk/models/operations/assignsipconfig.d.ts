import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AssignSipConfigPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class AssignSipConfigApplicationJson extends SpeakeasyBase {
    enable?: boolean;
    showCalloutInternalNumber?: boolean;
    showZoomProvidedCalloutCountries?: number;
    showZoomProvidedNumbers?: number;
}
export declare class AssignSipConfigMultipartFormData extends SpeakeasyBase {
    enable?: boolean;
    showCalloutInternalNumber?: boolean;
    showZoomProvidedCalloutCountries?: number;
    showZoomProvidedNumbers?: number;
}
export declare class AssignSipConfigRequests extends SpeakeasyBase {
    object?: AssignSipConfigApplicationJson;
    object1?: AssignSipConfigMultipartFormData;
}
export declare class AssignSipConfigSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class AssignSipConfigRequest extends SpeakeasyBase {
    pathParams: AssignSipConfigPathParams;
    request?: AssignSipConfigRequests;
    security: AssignSipConfigSecurity;
}
export declare class AssignSipConfigResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    assignSIPConfig204ApplicationJSONAny?: any;
}
