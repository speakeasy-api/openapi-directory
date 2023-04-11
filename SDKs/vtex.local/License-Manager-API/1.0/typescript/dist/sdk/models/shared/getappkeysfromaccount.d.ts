import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response body for getting all application keys from the account
 */
export declare class Getappkeysfromaccount extends SpeakeasyBase {
    /**
     * AppKey (Access Key in the license manager UI)
     */
    appKey: string;
    /**
     * Date of creation of application key
     */
    createdIn: Date;
    /**
     * ID of application key
     */
    id: string;
    /**
     * If the application key is active
     */
    isActive: boolean;
    /**
     * Label for application key
     */
    label: string;
}
