import { SpeakeasyBase } from "../../../internal/utils";
import { Contact } from "./contact";
import { UserExtension } from "./userextension";
export declare class User extends SpeakeasyBase {
    /**
     * Collection of contact objects
     */
    contactNumbers?: Contact[];
    /**
     * Email address of the user
     */
    email?: string;
    /**
     * Collection of extension objects
     */
    extensions?: UserExtension[];
    /**
     * First name of the user
     */
    firstName?: string;
    /**
     * Unique identifier of the user
     */
    id?: number;
    /**
     * Last name of the user
     */
    lastName?: string;
    /**
     * Login name of the user
     */
    loginName?: string;
}
