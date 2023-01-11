import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteMembersOfSlgPathParams extends SpeakeasyBase {
    sharedLineGroupId: string;
}
export declare class DeleteMembersOfSlgRequest extends SpeakeasyBase {
    pathParams: DeleteMembersOfSlgPathParams;
}
export declare class DeleteMembersOfSlgResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    deleteMembersOfSLG204ApplicationJSONAny?: any;
}
