import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteCommonAreaPhonePathParams extends SpeakeasyBase {
    commonAreaPhoneId: string;
}
export declare class DeleteCommonAreaPhoneSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class DeleteCommonAreaPhoneRequest extends SpeakeasyBase {
    pathParams: DeleteCommonAreaPhonePathParams;
    security: DeleteCommonAreaPhoneSecurity;
}
export declare class DeleteCommonAreaPhoneResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    deleteCommonAreaPhone204ApplicationJSONAny?: any;
}
