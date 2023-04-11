import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetHostedPageType extends SpeakeasyBase {
    /**
     * Page ID of the Payment Page that Zuora assigns when it is created.
     *
     * @remarks
     *
     */
    pageId?: string;
    /**
     * Name of the Payment Page that specified during the page configuration.
     *
     * @remarks
     *
     */
    pageName?: string;
    /**
     * Payment method type of this Payment Page, e.g. 'Credit Card', 'ACH', or 'Bank Transfer'.
     *
     * @remarks
     *
     */
    pageType?: string;
    /**
     * Version of the Payment Page. 1 for Payment Pages 1.0 or 2 for Payment Pages 2.0.
     *
     * @remarks
     *
     */
    pageVersion?: string;
}
