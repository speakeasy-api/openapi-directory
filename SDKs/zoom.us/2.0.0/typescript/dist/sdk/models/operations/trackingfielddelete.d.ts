import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TrackingfieldDeletePathParams extends SpeakeasyBase {
    fieldId: string;
}
export declare class TrackingfieldDeleteSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class TrackingfieldDeleteRequest extends SpeakeasyBase {
    pathParams: TrackingfieldDeletePathParams;
    security: TrackingfieldDeleteSecurity;
}
export declare class TrackingfieldDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
