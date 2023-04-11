import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The options on how the preview through date is calculated. Available for preview only. The 'TermEnd' option is invalid when any subscription included in this order is evergreen.
 *
 * @remarks
 *
 * If set the value of this field to `SpecificDate`, you must specify a specific date in the 'specificPreviewThruDate' field.
 *
 * If set the value of this field to `NumberOfPeriods`, you must use the `previewNumberOfPeriods` field to specify how many periods you want to preview.
 *
 */
export declare enum PreviewOptionsPreviewThruTypeEnum {
    SpecificDate = "SpecificDate",
    TermEnd = "TermEnd",
    NumberOfPeriods = "NumberOfPeriods"
}
export declare enum PreviewOptionsPreviewTypesEnum {
    ChargeMetrics = "ChargeMetrics",
    BillingDocs = "BillingDocs",
    OrderDeltaMetrics = "OrderDeltaMetrics",
    OrderMetrics = "OrderMetrics",
    RampMetrics = "RampMetrics",
    RampDeltaMetrics = "RampDeltaMetrics"
}
export declare class PreviewOptions extends SpeakeasyBase {
    /**
     * The number of periods to preview when the value of the `previewThroughType` field is set to `NumberOfPeriods`.
     */
    previewNumberOfPeriods?: number;
    /**
     * The options on how the preview through date is calculated. Available for preview only. The 'TermEnd' option is invalid when any subscription included in this order is evergreen.
     *
     * @remarks
     *
     * If set the value of this field to `SpecificDate`, you must specify a specific date in the 'specificPreviewThruDate' field.
     *
     * If set the value of this field to `NumberOfPeriods`, you must use the `previewNumberOfPeriods` field to specify how many periods you want to preview.
     *
     */
    previewThruType?: PreviewOptionsPreviewThruTypeEnum;
    /**
     * One or more types of the preview. It can include:
     *
     * @remarks
     *
     * * ChargeMetrics: charge level metrics will be returned in the response, including: `cmrr`, `tcv`, `tcb`, and `tax`.
     * * BillingDocs: `invoices` and `creditMemos` will be returned in the response. Note `creditMemos` is only available if the Invoice Settlement feature is enabled.
     * * OrderDeltaMetrics: order delta metrics will be returned in the response, including: `orderDeltaMrr`, `orderDeltaTcb` and  `orderDeltaTcv`.
     * * OrderMetrics: order metrics will be returned in the response, including: `quantity`, `mrr`, `tcb`, `tcv`, and `elp`. **Note:** As of Zuora Billing Release 306, Zuora has upgraded the methodologies for calculating metrics in [Orders](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders). The new methodologies are reflected in the OrderDeltaMetrics. It is recommended that all customers use the [Order Delta Metrics](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Delta_Metrics/AA_Overview_of_Order_Delta_Metrics). If you are an existing [Order Metrics](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/AA_Overview_of_Orders/Key_Metrics_for_Orders) customer and want to migrate to Order Delta Metrics, submit a request at [Zuora Global Support](https://support.zuora.com/). Whereas new customers, and existing customers not currently on [Order Metrics](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/AA_Overview_of_Orders/Key_Metrics_for_Orders), will no longer have access to Order Metrics, existing customers currently using Order Metrics will continue to be supported.
     * * RampMetrics: ramp metrics will be returned in the response, including: `quantity`, `mrr`, `tcb`, `tcv` metrics for each charge and each ramp interval.
     * * RampDeltaMetrics: ramp metrics changes will be returned in the response, including: `deltaQuantity`, `deltaMrr`, `deltaTcb`, `deltaTcv` metrics for each charge and each ramp interval.
     *
     */
    previewTypes?: PreviewOptionsPreviewTypesEnum[];
    /**
     * The end date of the order preview. You can preview the invoice charges through the preview through date. (Invoice preview only)
     *
     * @remarks
     *
     *
     * **Note:** This field is only applicable if the 'previewThruType' field is set to 'SpecificDate'.
     *
     */
    specificPreviewThruDate?: Date;
}
