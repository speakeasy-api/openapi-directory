import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteSipTrunkPathParams extends SpeakeasyBase {
    accountId: string;
    trunkId: string;
}
export declare class DeleteSipTrunkRequest extends SpeakeasyBase {
    pathParams: DeleteSipTrunkPathParams;
}
export declare class DeleteSipTrunkResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    deleteSIPTrunk204ApplicationJSONObject?: Record<string, any>;
}
