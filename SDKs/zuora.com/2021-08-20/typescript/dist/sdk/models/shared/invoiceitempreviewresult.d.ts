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
    appliedToChargeNumber?: string;
    chargeDescription?: string;
    chargeName?: string;
    chargeNumber?: string;
    processingType?: InvoiceItemPreviewResultProcessingTypeEnum;
    productName?: string;
    productRatePlanChargeId?: string;
    serviceEndDate?: Date;
    serviceStartDate?: Date;
    subscriptionNumber?: string;
    taxAmount?: number;
}
