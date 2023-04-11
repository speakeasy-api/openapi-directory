import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteVoicemailRequest extends SpeakeasyBase {
    /**
     * Unique identifier of the voicemail. Retrieve the value for this field by calling the [Get voicemails](https://marketplace.zoom.us/docs/api-reference/zoom-api/phone/phoneuservoicemails) API.
     */
    voicemailId: string;
}
export declare class DeleteVoicemailResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `204` **No Content**
     *
     * @remarks
     *
     * Voicemail deleted.
     */
    deleteVoicemail204ApplicationJSONAny?: any;
}
