import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Application list operation result.
**/
export declare class ApplicationListResult extends SpeakeasyBase {
    odataNextLink?: string;
    value?: Record<string, Record<string, any>>[];
}
