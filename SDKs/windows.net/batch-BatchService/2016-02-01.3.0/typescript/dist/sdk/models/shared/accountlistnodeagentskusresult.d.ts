import { SpeakeasyBase } from "../../../internal/utils";
import { NodeAgentSku } from "./nodeagentsku";
/**
 * Response to an AccountOperation.ListNodeAgentSkus request.
 */
export declare class AccountListNodeAgentSkusResult extends SpeakeasyBase {
    /**
     * The URL to get the next set of results.
     */
    odataNextLink?: string;
    /**
     * The list of supported node agent SKUs.
     */
    value?: NodeAgentSku[];
}
