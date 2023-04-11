import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UnfollowUserAlt1Security extends SpeakeasyBase {
    oauth2: string;
}
export declare class UnfollowUserAlt1Request extends SpeakeasyBase {
    /**
     * The ID of the following user.
     */
    followUserId: number;
}
export declare class UnfollowUserAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
