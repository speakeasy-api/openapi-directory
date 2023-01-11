import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UserSchedulerDeletePathParams extends SpeakeasyBase {
    schedulerId: string;
    userId: string;
}
export declare class UserSchedulerDeleteSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class UserSchedulerDeleteRequest extends SpeakeasyBase {
    pathParams: UserSchedulerDeletePathParams;
    security: UserSchedulerDeleteSecurity;
}
export declare class UserSchedulerDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
