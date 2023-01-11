import { SpeakeasyBase } from "../../../internal/utils";
export declare class AssignSipTrunksPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class AssignSipTrunksApplicationJsonSipTrunks extends SpeakeasyBase {
    dnis?: string;
    id?: string;
    outboundCallerId?: string;
}
export declare class AssignSipTrunksApplicationJson extends SpeakeasyBase {
    sipTrunks?: AssignSipTrunksApplicationJsonSipTrunks[];
}
export declare class AssignSipTrunksMultipartFormDataSipTrunks extends SpeakeasyBase {
    dnis?: string;
    id?: string;
    outboundCallerId?: string;
}
export declare class AssignSipTrunksMultipartFormData1 extends SpeakeasyBase {
    sipTrunks?: AssignSipTrunksMultipartFormDataSipTrunks[];
}
export declare class AssignSipTrunksRequests extends SpeakeasyBase {
    object?: AssignSipTrunksApplicationJson;
    object1?: AssignSipTrunksMultipartFormData1;
}
export declare class AssignSipTrunks201ApplicationJsonSipTrunks extends SpeakeasyBase {
    dnis?: string;
    id?: string;
    name?: string;
    numberPrefix?: string;
    sipServerAddress?: string;
}
export declare class AssignSipTrunks201ApplicationJson extends SpeakeasyBase {
    sipTrunks?: AssignSipTrunks201ApplicationJsonSipTrunks[];
}
export declare class AssignSipTrunksRequest extends SpeakeasyBase {
    pathParams: AssignSipTrunksPathParams;
    request?: AssignSipTrunksRequests;
}
export declare class AssignSipTrunksResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    assignSIPTrunks201ApplicationJSONObject?: AssignSipTrunks201ApplicationJson;
}
