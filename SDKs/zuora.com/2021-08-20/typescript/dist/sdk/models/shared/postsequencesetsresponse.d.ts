import { SpeakeasyBase } from "../../../internal/utils";
import { GETSequenceSetResponse } from "./getsequencesetresponse";
export declare class POSTSequenceSetsResponse extends SpeakeasyBase {
    /**
     * Array of sequence sets configured for billing documents, payments, and refunds.
     *
     * @remarks
     *
     */
    sequenceSets?: GETSequenceSetResponse[];
    /**
     * Indicates whether the call succeeded.
     *
     * @remarks
     *
     */
    success?: boolean;
}
