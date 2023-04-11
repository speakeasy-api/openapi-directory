import { SpeakeasyBase } from "../../../internal/utils";
import { PreAuthorizedApplicationExtension } from "./preauthorizedapplicationextension";
import { PreAuthorizedApplicationPermission } from "./preauthorizedapplicationpermission";
/**
 * Contains information about pre authorized client application.
 */
export declare class PreAuthorizedApplication extends SpeakeasyBase {
    /**
     * Represents the application id.
     */
    appId?: string;
    /**
     * Collection of extensions from the resource application.
     */
    extensions?: PreAuthorizedApplicationExtension[];
    /**
     * Collection of required app permissions/entitlements from the resource application.
     */
    permissions?: PreAuthorizedApplicationPermission[];
}
