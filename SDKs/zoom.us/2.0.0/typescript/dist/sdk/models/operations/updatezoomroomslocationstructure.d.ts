import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateZoomRoomsLocationStructureSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class UpdateZoomRoomsLocationStructureApplicationJSON extends SpeakeasyBase {
    /**
     * Location Structure. The value can be either one or a combination of the following strings separated by comma:
     *
     * @remarks
     * `country`, `state`, `city`, `campus`, `building`, `floor`
     */
    structures?: string[];
}
export declare class UpdateZoomRoomsLocationStructureResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `204` **No Content**<br>
     *
     * @remarks
     * Location Structure updated successfully.
     */
    updateZoomRoomsLocationStructure204ApplicationJSONAny?: any;
}
