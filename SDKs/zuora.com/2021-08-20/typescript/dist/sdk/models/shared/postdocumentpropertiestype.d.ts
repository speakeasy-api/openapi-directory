import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDocumentPropertiesTypeDocumentTypeEnum {
    Invoice = "Invoice",
    CreditMemo = "CreditMemo",
    DebitMemo = "DebitMemo"
}
export declare class PostDocumentPropertiesType extends SpeakeasyBase {
    customFileName?: string;
    documentId?: string;
    documentType?: PostDocumentPropertiesTypeDocumentTypeEnum;
}
