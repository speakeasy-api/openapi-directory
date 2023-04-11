import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Server response for Get tenant users API call.
 */
export declare class UserListResult extends SpeakeasyBase {
    /**
     * The URL to get the next set of results.
     */
    odataNextLink?: string;
    /**
     * the list of users.
     */
    value?: Record<string, Record<string, any>>[];
}
