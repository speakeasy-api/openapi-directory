import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetInvoiceTaxItemTypeTaxRateTypeEnum {
    Percentage = "Percentage",
    FlatFee = "FlatFee"
}
export declare class GetInvoiceTaxItemType extends SpeakeasyBase {
    availableToCreditAmount?: number;
    balance?: number;
    creditAmount?: number;
    exemptAmount?: number;
    id?: string;
    jurisdiction?: string;
    locationCode?: string;
    name?: string;
    paymentAmount?: number;
    taxAmount?: number;
    taxCode?: string;
    taxCodeDescription?: string;
    taxDate?: Date;
    taxRate?: number;
    taxRateDescription?: string;
    taxRateType?: GetInvoiceTaxItemTypeTaxRateTypeEnum;
}
