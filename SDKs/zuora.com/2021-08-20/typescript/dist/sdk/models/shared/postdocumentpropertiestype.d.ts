import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the billing document.
 *
 * @remarks
 *
 */
export declare enum POSTDocumentPropertiesTypeDocumentTypeEnum {
    Invoice = "Invoice",
    CreditMemo = "CreditMemo",
    DebitMemo = "DebitMemo"
}
export declare class POSTDocumentPropertiesType extends SpeakeasyBase {
    /**
     * The custom file name to use to generate new Word or PDF files for the billing document.
     *
     * @remarks
     *
     */
    customFileName?: string;
    /**
     * The unique ID of a billing document that you want to create document properties for.
     *
     * @remarks
     *
     */
    documentId?: string;
    /**
     * The type of the billing document.
     *
     * @remarks
     *
     */
    documentType?: POSTDocumentPropertiesTypeDocumentTypeEnum;
}
