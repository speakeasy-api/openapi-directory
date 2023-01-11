import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostPhoneSipTrunkPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class PostPhoneSipTrunkApplicationJsonSipTrunks extends SpeakeasyBase {
    carrierAccount?: string;
    id?: string;
    name?: string;
}
export declare class PostPhoneSipTrunkApplicationJson extends SpeakeasyBase {
    sipTrunks?: PostPhoneSipTrunkApplicationJsonSipTrunks[];
}
export declare class PostPhoneSipTrunkMultipartFormDataSipTrunks extends SpeakeasyBase {
    carrierAccount?: string;
    id?: string;
    name?: string;
}
export declare class PostPhoneSipTrunkMultipartFormData1 extends SpeakeasyBase {
    sipTrunks?: PostPhoneSipTrunkMultipartFormDataSipTrunks[];
}
export declare class PostPhoneSipTrunkRequests extends SpeakeasyBase {
    object?: PostPhoneSipTrunkApplicationJson;
    object1?: PostPhoneSipTrunkMultipartFormData1;
}
export declare class PostPhoneSipTrunkSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class PostPhoneSipTrunk201ApplicationJsonSipTrunks extends SpeakeasyBase {
    carrierAccount?: string;
    id?: string;
    name?: string;
}
export declare class PostPhoneSipTrunk201ApplicationJson extends SpeakeasyBase {
    sipTrunks?: PostPhoneSipTrunk201ApplicationJsonSipTrunks[];
}
export declare class PostPhoneSipTrunkRequest extends SpeakeasyBase {
    pathParams: PostPhoneSipTrunkPathParams;
    request?: PostPhoneSipTrunkRequests;
    security: PostPhoneSipTrunkSecurity;
}
export declare class PostPhoneSipTrunkResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    postPhoneSIPTrunk201ApplicationJSONObject?: PostPhoneSipTrunk201ApplicationJson;
}
