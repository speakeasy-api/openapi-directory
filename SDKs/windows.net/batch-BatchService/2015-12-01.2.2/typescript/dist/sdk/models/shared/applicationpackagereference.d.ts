import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A reference to an application package to be installed on compute nodes in a pool.
 */
export declare class ApplicationPackageReference extends SpeakeasyBase {
    /**
     * Gets or sets the application package id.
     */
    applicationId: string;
    /**
     * Gets or sets the application package version. If not specified, the default is used.
     */
    version?: string;
}
