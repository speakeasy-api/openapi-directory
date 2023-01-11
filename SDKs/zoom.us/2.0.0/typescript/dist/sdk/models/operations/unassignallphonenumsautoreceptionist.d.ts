import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UnassignAllPhoneNumsAutoReceptionistPathParams extends SpeakeasyBase {
    autoReceptionistId: string;
}
export declare class UnassignAllPhoneNumsAutoReceptionistSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class UnassignAllPhoneNumsAutoReceptionistRequest extends SpeakeasyBase {
    pathParams: UnassignAllPhoneNumsAutoReceptionistPathParams;
    security: UnassignAllPhoneNumsAutoReceptionistSecurity;
}
export declare class UnassignAllPhoneNumsAutoReceptionistResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    unassignAllPhoneNumsAutoReceptionist204ApplicationJSONAny?: any;
}
