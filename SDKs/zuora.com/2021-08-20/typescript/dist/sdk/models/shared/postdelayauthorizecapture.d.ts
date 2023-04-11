import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Payment transaction source used to differentiate the transaction source in Stored Credential Transaction framework.
 *
 * @remarks
 *   - `C_Unscheduled`: Cardholder-initiated transaction (CIT) that does not occur on scheduled or regularly occurring dates.
 *   - `M_Recurring`: Merchant-initiated transaction (MIT) that occurs at regular intervals.
 *   - `M_Unscheduled`: Merchant-initiated transaction (MIT) that does not occur on scheduled or regularly occurring dates.
 *
 */
export declare enum POSTDelayAuthorizeCaptureMitTransactionSourceEnum {
    CUnscheduled = "C_Unscheduled",
    MRecurring = "M_Recurring",
    MUnscheduled = "M_Unscheduled"
}
export declare class POSTDelayAuthorizeCapture extends SpeakeasyBase {
    /**
     * The ID of the customer account.
     */
    accountId: string;
    /**
     * The number of the customer account.
     */
    accountNumber: string;
    /**
     * The amount of the trasaction.
     */
    amount: number;
    /**
     * The order ID for the specific gateway.
     */
    gatewayOrderId: string;
    /**
     * Payment transaction source used to differentiate the transaction source in Stored Credential Transaction framework.
     *
     * @remarks
     *   - `C_Unscheduled`: Cardholder-initiated transaction (CIT) that does not occur on scheduled or regularly occurring dates.
     *   - `M_Recurring`: Merchant-initiated transaction (MIT) that occurs at regular intervals.
     *   - `M_Unscheduled`: Merchant-initiated transaction (MIT) that does not occur on scheduled or regularly occurring dates.
     *
     */
    mitTransactionSource?: POSTDelayAuthorizeCaptureMitTransactionSourceEnum;
    /**
     * A text, rendered on a cardholder’s statement, describing a particular product or service purchased by the cardholder.
     */
    softDescriptor?: string;
    /**
     * The phone number that relates to the soft descriptor, usually the phone number of customer service.
     */
    softDescriptorPhone?: string;
}
