import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateASharedLineGroupPathParams extends SpeakeasyBase {
    sharedLineGroupId: string;
}
/**
 * If you have multiple direct phone numbers assigned to the shared line group, select a number from those numbers as the primary number. The primary number shares the same line as the extension number. This means if a caller is routed to the shared line group through an auto receptionist, the line associated with the primary number will be used. A pending number cannot be used as a Primary Number.
**/
export declare class UpdateASharedLineGroupApplicationJsonPrimaryNumber extends SpeakeasyBase {
    id?: string;
    number?: string;
}
export declare enum UpdateASharedLineGroupApplicationJsonStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
export declare class UpdateASharedLineGroupApplicationJson extends SpeakeasyBase {
    displayName?: string;
    extensionNumber?: number;
    primaryNumber?: UpdateASharedLineGroupApplicationJsonPrimaryNumber;
    status?: UpdateASharedLineGroupApplicationJsonStatusEnum;
    timezone?: string;
}
/**
 * If you have multiple direct phone numbers assigned to the shared line group, select a number from those numbers as the primary number. The primary number shares the same line as the extension number. This means if a caller is routed to the shared line group through an auto receptionist, the line associated with the primary number will be used. A pending number cannot be used as a Primary Number.
**/
export declare class UpdateASharedLineGroupMultipartFormDataPrimaryNumber extends SpeakeasyBase {
    id?: string;
    number?: string;
}
export declare enum UpdateASharedLineGroupMultipartFormDataStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
export declare class UpdateASharedLineGroupMultipartFormData extends SpeakeasyBase {
    displayName?: string;
    extensionNumber?: number;
    primaryNumber?: UpdateASharedLineGroupMultipartFormDataPrimaryNumber;
    status?: UpdateASharedLineGroupMultipartFormDataStatusEnum;
    timezone?: string;
}
export declare class UpdateASharedLineGroupRequests extends SpeakeasyBase {
    object?: UpdateASharedLineGroupApplicationJson;
    object1?: UpdateASharedLineGroupMultipartFormData;
}
export declare class UpdateASharedLineGroupRequest extends SpeakeasyBase {
    pathParams: UpdateASharedLineGroupPathParams;
    request?: UpdateASharedLineGroupRequests;
}
export declare class UpdateASharedLineGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    updateASharedLineGroup204ApplicationJSONAny?: any;
}
