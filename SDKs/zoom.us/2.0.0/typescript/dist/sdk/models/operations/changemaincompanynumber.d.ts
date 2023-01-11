import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChangeMainCompanyNumberApplicationJson extends SpeakeasyBase {
    phoneNumber?: string;
}
export declare class ChangeMainCompanyNumberMultipartFormData extends SpeakeasyBase {
    phoneNumber?: string;
}
export declare class ChangeMainCompanyNumberRequests extends SpeakeasyBase {
    object?: ChangeMainCompanyNumberApplicationJson;
    object1?: ChangeMainCompanyNumberMultipartFormData;
}
export declare class ChangeMainCompanyNumberSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class ChangeMainCompanyNumberRequest extends SpeakeasyBase {
    request?: ChangeMainCompanyNumberRequests;
    security: ChangeMainCompanyNumberSecurity;
}
export declare class ChangeMainCompanyNumberResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    changeMainCompanyNumber204ApplicationJSONAny?: any;
}
