import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteASharedLineGroupPathParams extends SpeakeasyBase {
    sharedLineGroupId: string;
}
export declare class DeleteASharedLineGroupRequest extends SpeakeasyBase {
    pathParams: DeleteASharedLineGroupPathParams;
}
export declare class DeleteASharedLineGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    deleteASharedLineGroup204ApplicationJSONAny?: any;
}
