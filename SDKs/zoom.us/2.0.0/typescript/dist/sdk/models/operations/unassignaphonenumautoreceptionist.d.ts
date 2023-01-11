import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UnassignAPhoneNumAutoReceptionistPathParams extends SpeakeasyBase {
    autoReceptionistId: string;
    phoneNumberId: string;
}
export declare class UnassignAPhoneNumAutoReceptionistSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class UnassignAPhoneNumAutoReceptionistRequest extends SpeakeasyBase {
    pathParams: UnassignAPhoneNumAutoReceptionistPathParams;
    security: UnassignAPhoneNumAutoReceptionistSecurity;
}
export declare class UnassignAPhoneNumAutoReceptionistResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    unassignAPhoneNumAutoReceptionist204ApplicationJSONAny?: any;
}
