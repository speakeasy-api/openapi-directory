import { SpeakeasyBase } from "../../../internal/utils";
export declare class POSTEmailBillingDocfromBillRunType extends SpeakeasyBase {
    /**
     * Whether to send out emails for all the billing documents that are associated with the bill run. If the value is `false`, emails are sent out only for the billing documents that never have emails sent out.
     *
     * @remarks
     *
     */
    resend?: boolean;
}
