import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPhoneNumberDetailsPathParams extends SpeakeasyBase {
    numberId: string;
}
export declare class GetPhoneNumberDetailsSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare enum GetPhoneNumberDetails200ApplicationJsonAssigneeTypeEnum {
    User = "user",
    CallQueue = "callQueue",
    AutoReceptionist = "autoReceptionist",
    CommonAreaPhone = "commonAreaPhone"
}
export declare class GetPhoneNumberDetails200ApplicationJsonAssignee extends SpeakeasyBase {
    extensionNumber?: number;
    id?: string;
    name?: string;
    type?: GetPhoneNumberDetails200ApplicationJsonAssigneeTypeEnum;
}
export declare enum GetPhoneNumberDetails200ApplicationJsonNumberTypeEnum {
    Toll = "toll",
    Tollfree = "tollfree"
}
export declare class GetPhoneNumberDetails200ApplicationJsonSite extends SpeakeasyBase {
    id?: string;
    name?: string;
}
export declare enum GetPhoneNumberDetails200ApplicationJsonSourceEnum {
    Internal = "internal",
    External = "external"
}
export declare enum GetPhoneNumberDetails200ApplicationJsonStatusEnum {
    Pending = "pending",
    Available = "available"
}
export declare class GetPhoneNumberDetails200ApplicationJson extends SpeakeasyBase {
    assignee?: GetPhoneNumberDetails200ApplicationJsonAssignee;
    capability?: string[];
    displayName?: string;
    id?: string;
    location?: string;
    number?: string;
    numberType?: GetPhoneNumberDetails200ApplicationJsonNumberTypeEnum;
    site?: GetPhoneNumberDetails200ApplicationJsonSite;
    source?: GetPhoneNumberDetails200ApplicationJsonSourceEnum;
    status?: GetPhoneNumberDetails200ApplicationJsonStatusEnum;
}
export declare class GetPhoneNumberDetailsRequest extends SpeakeasyBase {
    pathParams: GetPhoneNumberDetailsPathParams;
    security: GetPhoneNumberDetailsSecurity;
}
export declare class GetPhoneNumberDetailsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    getPhoneNumberDetails200ApplicationJSONObject?: GetPhoneNumberDetails200ApplicationJson;
}
