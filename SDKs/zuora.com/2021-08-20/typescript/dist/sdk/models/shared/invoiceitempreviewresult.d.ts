import { SpeakeasyBase } from "../../../internal/utils";
export declare class InvoiceItemPreviewResultAdditionalInfo extends SpeakeasyBase {
    quantity?: number;
    unitOfMeasure?: string;
}
export declare enum InvoiceItemPreviewResultProcessingTypeEnum {
    Charge = "Charge",
    Discount = "Discount",
    Tax = "Tax"
}
export declare class InvoiceItemPreviewResult extends SpeakeasyBase {
    additionalInfo?: InvoiceItemPreviewResultAdditionalInfo;
    amountWithoutTax?: number;
    /**
     * Available when the chargeNumber of the charge that discount applies to was specified in the request or when the order is amending an existing subscription.
     */
    appliedToChargeNumber?: string;
    chargeDescription?: string;
    chargeName?: string;
    /**
     * Available when the chargeNumber was specified in the request or when the order is amending an existing subscription.
     */
    chargeNumber?: string;
    processingType?: InvoiceItemPreviewResultProcessingTypeEnum;
    productName?: string;
    productRatePlanChargeId?: string;
    serviceEndDate?: Date;
    serviceStartDate?: Date;
    subscriptionNumber?: string;
    taxAmount?: number;
}
