import { SpeakeasyBase } from "../../../internal/utils";
import { OdataError } from "./odataerror";
/**
 * Active Directory error information.
 */
export declare class GraphError extends SpeakeasyBase {
    /**
     * Active Directory OData error information.
     */
    odataError?: OdataError;
}
