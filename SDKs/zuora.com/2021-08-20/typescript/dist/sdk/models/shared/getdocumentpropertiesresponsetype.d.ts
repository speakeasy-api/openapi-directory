import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDocumentPropertiesResponseTypeDocumentTypeEnum {
    Invoice = "Invoice",
    CreditMemo = "CreditMemo",
    DebitMemo = "DebitMemo"
}
export declare class GetDocumentPropertiesResponseType extends SpeakeasyBase {
    customFileName?: string;
    documentId?: string;
    documentType?: GetDocumentPropertiesResponseTypeDocumentTypeEnum;
    id?: string;
    success?: boolean;
}
