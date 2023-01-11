import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetZrLocationStructureSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class GetZrLocationStructure200ApplicationJson extends SpeakeasyBase {
    structures?: string[];
}
export declare class GetZrLocationStructureRequest extends SpeakeasyBase {
    security: GetZrLocationStructureSecurity;
}
export declare class GetZrLocationStructureResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    getZRLocationStructure200ApplicationJSONObject?: GetZrLocationStructure200ApplicationJson;
}
