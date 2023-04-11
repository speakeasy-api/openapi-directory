import { SpeakeasyBase } from "../../../internal/utils";
import { GETBillingDocumentsResponseType } from "./getbillingdocumentsresponsetype";
export declare class BillingDocumentQueryResponseElementType extends SpeakeasyBase {
    /**
     * Container for billing documents.
     *
     * @remarks
     *
     */
    documents?: GETBillingDocumentsResponseType[];
    /**
     * URL to retrieve the next page of the response if it exists; otherwise absent.
     *
     * @remarks
     *
     */
    nextPage?: string;
    /**
     * Returns `true` if the request was processed successfully.
     */
    success?: boolean;
}
