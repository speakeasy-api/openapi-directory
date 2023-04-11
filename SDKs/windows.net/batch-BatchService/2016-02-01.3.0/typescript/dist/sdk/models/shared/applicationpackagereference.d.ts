import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A reference to an application package to be installed on compute nodes in a pool.
 */
export declare class ApplicationPackageReference extends SpeakeasyBase {
    /**
     * The id of the application to install.
     */
    applicationId: string;
    /**
     * The version of the application to install. If omitted, the default version is installed.
     */
    version?: string;
}
