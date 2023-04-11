import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the billing document.
 *
 * @remarks
 *
 */
export declare enum GETDocumentPropertiesResponseTypeDocumentTypeEnum {
    Invoice = "Invoice",
    CreditMemo = "CreditMemo",
    DebitMemo = "DebitMemo"
}
export declare class GETDocumentPropertiesResponseType extends SpeakeasyBase {
    /**
     * The custom file name used by Word or PDF files generated for the billing document.
     *
     * @remarks
     *
     */
    customFileName?: string;
    /**
     * The unique ID of a billing document.
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
    documentType?: GETDocumentPropertiesResponseTypeDocumentTypeEnum;
    /**
     * The unique ID of a document property.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * Indicates whether the call succeeded.
     *
     * @remarks
     *
     */
    success?: boolean;
}
