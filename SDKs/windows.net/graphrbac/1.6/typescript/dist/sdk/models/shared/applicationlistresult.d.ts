import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Application list operation result.
 */
export declare class ApplicationListResult extends SpeakeasyBase {
    /**
     * The URL to get the next set of results.
     */
    odataNextLink?: string;
    /**
     * A collection of applications.
     */
    value?: Record<string, Record<string, any>>[];
}
