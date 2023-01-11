import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdatePhoneSipTrunkPathParams extends SpeakeasyBase {
    accountId: string;
    sipTrunkId: string;
}
export declare class UpdatePhoneSipTrunkApplicationJson extends SpeakeasyBase {
    carrierAccount?: string;
    name?: string;
}
export declare class UpdatePhoneSipTrunkMultipartFormData extends SpeakeasyBase {
    carrierAccount?: string;
    name?: string;
}
export declare class UpdatePhoneSipTrunkRequests extends SpeakeasyBase {
    object?: UpdatePhoneSipTrunkApplicationJson;
    object1?: UpdatePhoneSipTrunkMultipartFormData;
}
export declare class UpdatePhoneSipTrunkSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class UpdatePhoneSipTrunkRequest extends SpeakeasyBase {
    pathParams: UpdatePhoneSipTrunkPathParams;
    request?: UpdatePhoneSipTrunkRequests;
    security: UpdatePhoneSipTrunkSecurity;
}
export declare class UpdatePhoneSipTrunkResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    updatePhoneSIPTrunk204ApplicationJSONAny?: any;
}
