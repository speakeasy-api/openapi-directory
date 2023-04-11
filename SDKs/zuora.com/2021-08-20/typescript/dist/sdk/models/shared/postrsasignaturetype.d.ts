import { SpeakeasyBase } from "../../../internal/utils";
export declare class POSTRSASignatureType extends SpeakeasyBase {
    /**
     * The type of the request. Set it to POST.
     *
     * @remarks
     *
     */
    method: string;
    /**
     * The page id of your Payment Pages 2.0 form. Click **Show Page Id** next to the Payment Page name in the Hosted Page List to retrieve the page id.
     *
     * @remarks
     *
     */
    pageId: string;
    /**
     * The URL that the Payment Page will be served from.
     *
     * @remarks
     * * For US Production environment: Use https://www.zuora.com/apps/PublicHostedPageLite.do
     * * For US API Sandbox environment: Use https://apisandbox.zuora.com/apps/PublicHostedPageLite.do
     * * For EU Cloud Production environment: Use https://eu.zuora.com/apps/PublicHostedPageLite.do
     * * For EU Cloud Sandbox environment: Use https://sandbox.eu.zuora.com/apps/PublicHostedPageLite.do
     * * For US Cloud Production environment: Use https://na.zuora.com/apps/PublicHostedPageLite.do
     * * For US Cloud Sandbox environment: Use https://sandbox.na.zuora.com/apps/PublicHostedPageLite.do
     * * For US Central Sandbox environment: Use https://test.zuora.com/apps/PublicHostedPageLite.do
     * * For EU Central Sandbox environment: Use https://test.eu.zuora.com/apps/PublicHostedPageLite.do
     *
     */
    uri: string;
}
