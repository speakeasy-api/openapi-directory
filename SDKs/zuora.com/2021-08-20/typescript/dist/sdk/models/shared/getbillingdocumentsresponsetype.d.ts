import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetBillingDocumentsResponseTypeDocumentTypeEnum {
    Invoice = "Invoice",
    CreditMemo = "CreditMemo",
    DebitMemo = "DebitMemo"
}
export declare enum GetBillingDocumentsResponseTypeStatusEnum {
    Draft = "Draft",
    Posted = "Posted",
    Canceled = "Canceled",
    Error = "Error"
}
export declare class GetBillingDocumentsResponseType extends SpeakeasyBase {
    accountId?: string;
    amount?: number;
    balance?: number;
    documentDate?: Date;
    documentNumber?: string;
    documentType?: GetBillingDocumentsResponseTypeDocumentTypeEnum;
    id?: string;
    status?: GetBillingDocumentsResponseTypeStatusEnum;
}
