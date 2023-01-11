import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateZoomRoomsLocationStructureApplicationJson extends SpeakeasyBase {
    structures?: string[];
}
export declare class UpdateZoomRoomsLocationStructureMultipartFormData extends SpeakeasyBase {
    structures?: string[];
}
export declare class UpdateZoomRoomsLocationStructureRequests extends SpeakeasyBase {
    object?: UpdateZoomRoomsLocationStructureApplicationJson;
    object1?: UpdateZoomRoomsLocationStructureMultipartFormData;
}
export declare class UpdateZoomRoomsLocationStructureSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class UpdateZoomRoomsLocationStructureRequest extends SpeakeasyBase {
    request?: UpdateZoomRoomsLocationStructureRequests;
    security: UpdateZoomRoomsLocationStructureSecurity;
}
export declare class UpdateZoomRoomsLocationStructureResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    updateZoomRoomsLocationStructure204ApplicationJSONAny?: any;
}
