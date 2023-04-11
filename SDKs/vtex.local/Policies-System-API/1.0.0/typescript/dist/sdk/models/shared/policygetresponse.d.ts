import { SpeakeasyBase } from "../../../internal/utils";
import { StatementGetResponse } from "./statementgetresponse";
export declare class PolicyGetResponse extends SpeakeasyBase {
    /**
     * Policy description. This description is only for internal use of identification
     */
    description?: string;
    /**
     * Policy ID
     */
    id?: string;
    /**
     * Policy Name
     */
    name?: string;
    /**
     * Requirements to the Policy be applied
     */
    statements?: StatementGetResponse[];
}
