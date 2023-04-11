import { SpeakeasyBase } from "../../../internal/utils";
export declare class BillingOptions extends SpeakeasyBase {
    /**
     * The invoice date displayed on the invoice.
     */
    documentDate?: Date;
    /**
     * Date through which to calculate charges if an invoice is generated. See [What is a Target Date?](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/G_Bill_Runs/Creating_Bill_Runs#What_is_a_Target_Date.3F).
     */
    targetDate?: Date;
}
