import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UserSchedulersSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class UserSchedulersRequest extends SpeakeasyBase {
    /**
     * The user ID or email address of the user. For user-level apps, pass `me` as the value for userId.
     */
    userId: string;
}
export declare class UserSchedulersUserSchedulersListSchedulers extends SpeakeasyBase {
    /**
     * Email address of the scheduler.
     */
    email?: string;
    /**
     * Unique Identifier (User ID) of the Scheduler.
     */
    id?: string;
    /**
     * PMI of the meeting host in long (int64) format.
     */
    pmi?: number;
}
/**
 * List of user's schedulers.
 */
export declare class UserSchedulersUserSchedulersList extends SpeakeasyBase {
    /**
     * List of users for whom the current user can schedule meetings.
     */
    schedulers?: UserSchedulersUserSchedulersListSchedulers[];
}
export declare class UserSchedulersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>Successfully listed all schedulers of the user.
     */
    userSchedulersList?: UserSchedulersUserSchedulersList;
}
