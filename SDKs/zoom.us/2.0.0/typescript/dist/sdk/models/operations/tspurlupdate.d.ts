import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TspUrlUpdatePathParams extends SpeakeasyBase {
    userId: string;
}
export declare class TspUrlUpdateTspGlobalDialInUrlSetting extends SpeakeasyBase {
    audioUrl?: string;
}
export declare class TspUrlUpdateRequests extends SpeakeasyBase {
    tspGlobalDialInURLSetting?: TspUrlUpdateTspGlobalDialInUrlSetting;
    tspGlobalDialInURLSetting1?: TspUrlUpdateTspGlobalDialInUrlSetting;
}
export declare class TspUrlUpdateSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class TspUrlUpdateRequest extends SpeakeasyBase {
    pathParams: TspUrlUpdatePathParams;
    request?: TspUrlUpdateRequests;
    security: TspUrlUpdateSecurity;
}
export declare class TspUrlUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
