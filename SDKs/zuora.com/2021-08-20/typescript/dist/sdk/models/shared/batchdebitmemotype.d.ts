import { SpeakeasyBase } from "../../../internal/utils";
export declare class BatchDebitMemoType extends SpeakeasyBase {
    /**
     * The date by which the payment for the debit memo is due, in `yyyy-mm-dd` format.
     *
     * @remarks
     *
     */
    dueDate?: Date;
    /**
     * The ID of the debit memo to be updated.
     *
     * @remarks
     *
     */
    id?: string;
}
