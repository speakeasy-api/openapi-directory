import { SpeakeasyBase } from "../../../internal/utils";
import { Payee } from "./payee";
export declare class PayeesResponseData extends SpeakeasyBase {
    payees: Payee[];
    /**
     * The knowledge of the server
     */
    serverKnowledge: number;
}
/**
 * The requested list of payees
 */
export declare class PayeesResponse extends SpeakeasyBase {
    data: PayeesResponseData;
}
