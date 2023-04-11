import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UserSchedulerDeleteSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class UserSchedulerDeleteRequest extends SpeakeasyBase {
    /**
     * Scheduler's ID.
     */
    schedulerId: string;
    /**
     * The user ID or email address of the user. For user-level apps, pass `me` as the value for userId.
     */
    userId: string;
}
export declare class UserSchedulerDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
