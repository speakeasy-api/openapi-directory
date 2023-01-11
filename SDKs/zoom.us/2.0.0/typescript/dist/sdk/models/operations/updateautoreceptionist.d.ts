import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateAutoReceptionistPathParams extends SpeakeasyBase {
    autoReceptionistId: string;
}
export declare class UpdateAutoReceptionistApplicationJson extends SpeakeasyBase {
    extensionNumber?: number;
    name?: string;
}
export declare class UpdateAutoReceptionistMultipartFormData extends SpeakeasyBase {
    extensionNumber?: number;
    name?: string;
}
export declare class UpdateAutoReceptionistRequests extends SpeakeasyBase {
    object?: UpdateAutoReceptionistApplicationJson;
    object1?: UpdateAutoReceptionistMultipartFormData;
}
export declare class UpdateAutoReceptionistSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class UpdateAutoReceptionistRequest extends SpeakeasyBase {
    pathParams: UpdateAutoReceptionistPathParams;
    request?: UpdateAutoReceptionistRequests;
    security: UpdateAutoReceptionistSecurity;
}
export declare class UpdateAutoReceptionistResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    updateAutoReceptionist204ApplicationJSONAny?: any;
}
