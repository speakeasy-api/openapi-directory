import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteVoicemailPathParams extends SpeakeasyBase {
    voicemailId: string;
}
export declare class DeleteVoicemailRequest extends SpeakeasyBase {
    pathParams: DeleteVoicemailPathParams;
}
export declare class DeleteVoicemailResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    deleteVoicemail204ApplicationJSONAny?: any;
}
