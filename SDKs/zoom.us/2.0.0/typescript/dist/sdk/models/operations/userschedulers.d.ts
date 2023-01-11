import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UserSchedulersPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class UserSchedulersSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class UserSchedulersUserSchedulersListSchedulers extends SpeakeasyBase {
    email?: string;
    id?: string;
    pmi?: number;
}
/**
 * List of user's schedulers.
**/
export declare class UserSchedulersUserSchedulersList extends SpeakeasyBase {
    schedulers?: UserSchedulersUserSchedulersListSchedulers[];
}
export declare class UserSchedulersRequest extends SpeakeasyBase {
    pathParams: UserSchedulersPathParams;
    security: UserSchedulersSecurity;
}
export declare class UserSchedulersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    userSchedulersList?: UserSchedulersUserSchedulersList;
}
