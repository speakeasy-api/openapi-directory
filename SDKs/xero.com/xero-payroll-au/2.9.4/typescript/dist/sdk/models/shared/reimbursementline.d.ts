import { SpeakeasyBase } from "../../../internal/utils";
export declare class ReimbursementLine extends SpeakeasyBase {
    /**
     * Reimbursement type amount
     */
    amount?: number;
    /**
     * Reimbursement lines description (max length 50)
     */
    description?: string;
    /**
     * Reimbursement expense account. For posted pay run you should be able to see expense account code.
     */
    expenseAccount?: string;
    /**
     * Xero reimbursement type identifier
     */
    reimbursementTypeID?: string;
}
