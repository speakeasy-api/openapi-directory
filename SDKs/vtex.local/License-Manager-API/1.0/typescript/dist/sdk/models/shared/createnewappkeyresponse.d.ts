import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response body of sucessful call to /api/vlm/appkeys
 */
export declare class CreatenewappkeyResponse extends SpeakeasyBase {
    /**
     * AppKey (Access Key in the license manager UI)
     */
    appKey: string;
    /**
     * Secret of application key
     */
    appToken: string;
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
