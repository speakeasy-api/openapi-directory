import { SpeakeasyBase } from "../../../internal/utils";
import { POSTSrpCreateType } from "./postsrpcreatetype";
import { POSTSubscriptionPreviewTypePreviewAccountInfo } from "./postsubscriptionpreviewtypepreviewaccountinfo";
/**
 * Container for custom fields of a Subscription object.
 *
 * @remarks
 *
 */
export declare class POSTSubscriptionPreviewType extends SpeakeasyBase {
    /**
     *
     * @remarks
     * Customer account number or ID.
     *
     * You must specify the account information either in this field or in the `previewAccountInfo` field with the following conditions:
     *
     * * If you already have a customer account, specify the account number or ID in this field.
     * * If you do not have a customer account, provide account information in the `previewAccountInfo` field.
     *
     */
    accountKey?: string;
    /**
     * Effective contract date for this subscription, as yyyy-mm-dd.
     *
     * @remarks
     *
     */
    contractEffectiveDate: Date;
    /**
     * The date on which the services or products within a subscription have been accepted by the customer, as yyyy-mm-dd.
     *
     * @remarks
     *
     * Default value is dependent on the value of other fields. See **Notes** section for more details.
     *
     */
    customerAcceptanceDate?: Date;
    /**
     * Specifies whether to include draft invoice items in subscription previews.
     *
     * @remarks
     * Values are:
     *
     * * `true` (default). Includes draft invoice items in the preview result.
     * * `false`. Excludes draft invoice items in the preview result.
     *
     * **Note:** This field is in Zuora REST API version control. Supported minor versions are 207.0 or later. To use this field in the method, you must set the **zuora-version** parameter to the minor version number in the request header. See [Zuora REST API Versions](https://www.zuora.com/developer/api-reference/#section/API-Versions) for more information.
     *
     */
    includeExistingDraftDocItems?: boolean;
    /**
     * Specifies whether to include draft invoice items in previews.
     *
     * @remarks
     * Values are:
     *
     * * `true` (default). Includes draft invoice items in the preview result.
     * * `false`. Excludes draft invoice items in the preview result.
     *
     * **Note:** This field is in Zuora REST API version control. Supported minor versions are 186.0, 187.0, 188.0, 189.0, and 196.0. See [Zuora REST API Versions](https://www.zuora.com/developer/api-reference/#section/API-Versions) for more information.
     *
     */
    includeExistingDraftInvoiceItems?: boolean;
    /**
     * Duration of the first term of the subscription, in whole months. If `termType` is `TERMED`, then this field is required, and the value must be greater than `0`. If `termType` is `EVERGREEN`, this field is ignored.
     *
     * @remarks
     *
     */
    initialTerm?: number;
    /**
     * The period type of the initial term.
     *
     * @remarks
     *
     * Supported values are:
     *
     * * `Month`
     * * `Year`
     * * `Day`
     * * `Week`
     *
     * The default period type is `Month`.
     *
     *
     */
    initialTermPeriodType?: string;
    /**
     * Invoice owner account number or ID.
     *
     * @remarks
     *
     * **Note:** This feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
     *
     */
    invoiceOwnerAccountKey?: string;
    /**
     * Date through which to calculate charges if an invoice is generated, as yyyy-mm-dd. Default is current date.
     *
     * @remarks
     *
     * **Note:** This field is in Zuora REST API version control. Supported minor versions are 186.0, 187.0, 188.0, 189.0, and 196.0. See [Zuora REST API Versions](https://www.zuora.com/developer/api-reference/#section/API-Versions) for more information.
     *
     */
    invoiceTargetDate?: Date;
    /**
     * String of up to 500 characters.
     */
    notes?: string;
    /**
     * A container for providing a customer account information if you do not have an existing customer account. This customer account information is only used for subscription preview.
     *
     * @remarks
     *
     * You must specify the account information either in this field or in the `accountKey` field with the following conditions:
     *
     * * If you already have a customer account, specify the account number or ID in the accountKey field.
     * * If you do not have a customer account, provide account information in this field.
     *
     */
    previewAccountInfo?: POSTSubscriptionPreviewTypePreviewAccountInfo;
    /**
     * The type of preview you will receive.
     *
     * @remarks
     *
     * This field is in Zuora REST API version control. The supported values of this field depend on the REST API minor version you specified in the request header.
     *
     *
     * * If you do not specify the REST API minor version or specify the minor version number to one of following values in the request header:
     *
     *   * 186.0
     *   * 187.0
     *   * 188.0
     *   * 189.0
     *   * 196.0
     *
     *   The following values are supported in the **previewType** field:
     *
     *   * InvoiceItem
     *   * ChargeMetrics
     *   * InvoiceItemChargeMetrics
     *
     *   The default value is InvoiceItem.
     *
     * * If you specify the REST API minor version to 207.0 or later in the request header, the following values are supported in the **previewType** field:
     *
     *   - LegalDoc
     *   - ChargeMetrics
     *   - LegalDocChargeMetrics
     *
     *   The default value is LegalDoc.
     *
     * See [Zuora REST API Versions](https://www.zuora.com/developer/api-reference/#section/API-Versions) for more information.
     *
     */
    previewType?: string;
    /**
     * The date on which the services or products within a subscription have been activated and access has been provided to the customer, as yyyy-mm-dd.
     *
     * @remarks
     *
     * Default value is dependent on the value of other fields. See **Notes** section for more details.
     *
     */
    serviceActivationDate?: Date;
    /**
     * Container for one or more rate plans for this subscription.
     *
     * @remarks
     *
     */
    subscribeToRatePlans: POSTSrpCreateType[];
    /**
     * Date through which to calculate charges if an invoice is generated, as yyyy-mm-dd. Default is current date.
     *
     * @remarks
     *
     * **Note:** This field is in Zuora REST API version control. Supported minor versions are 207.0 or later. To use this field in the method, you must set the **zuora-version** parameter to the minor version number in the request header. See [Zuora REST API Versions](https://www.zuora.com/developer/api-reference/#section/API-Versions) for more information.
     *
     */
    targetDate?: Date;
    /**
     * The date on which the subscription term begins, as yyyy-mm-dd. If this is a renewal subscription, this date is different from the subscription start date.
     *
     * @remarks
     *
     */
    termStartDate?: Date;
    /**
     * Possible values are: `TERMED`, `EVERGREEN`.
     *
     * @remarks
     *
     */
    termType: string;
}
