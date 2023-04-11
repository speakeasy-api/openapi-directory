import { SpeakeasyBase } from "../../../internal/utils";
import { BatchDebitMemoType } from "./batchdebitmemotype";
export declare class PUTBatchDebitMemosRequest extends SpeakeasyBase {
    /**
     * Container for debit memo update details.
     *
     * @remarks
     *
     */
    debitMemos?: BatchDebitMemoType[];
}
