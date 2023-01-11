import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteSipPhonePathParams extends SpeakeasyBase {
    phoneId: string;
}
export declare class DeleteSipPhoneSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class DeleteSipPhoneRequest extends SpeakeasyBase {
    pathParams: DeleteSipPhonePathParams;
    security: DeleteSipPhoneSecurity;
}
export declare class DeleteSipPhoneResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    deleteSIPPhone204ApplicationJSONObject?: Record<string, any>;
}
