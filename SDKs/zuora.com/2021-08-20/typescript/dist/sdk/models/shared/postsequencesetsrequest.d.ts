import { SpeakeasyBase } from "../../../internal/utils";
import { POSTSequenceSetRequest } from "./postsequencesetrequest";
export declare class POSTSequenceSetsRequest extends SpeakeasyBase {
    /**
     * Array of sequence sets configured for billing documents, payments, and refunds.
     *
     * @remarks
     *
     */
    sequenceSets?: POSTSequenceSetRequest[];
}
