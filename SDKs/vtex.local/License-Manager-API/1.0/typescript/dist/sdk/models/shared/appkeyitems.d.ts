import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Object representing application keys
 */
export declare class AppKeyItems extends SpeakeasyBase {
    /**
     * AppKey (Access Key in the license manager UI)
     */
    appKey?: string;
    /**
     * AppToken. For security reasons, should always be null.
     */
    appToken?: string;
    /**
     * Creation date of the application key
     */
    createdIn?: Date;
    /**
     * ID of the application key
     */
    id?: string;
    /**
     * If the application key is active
     */
    isActive?: boolean;
    /**
     * If the application key is blocked
     */
    isBlocked?: boolean;
    /**
     * Label of the application key
     */
    label?: string;
}
