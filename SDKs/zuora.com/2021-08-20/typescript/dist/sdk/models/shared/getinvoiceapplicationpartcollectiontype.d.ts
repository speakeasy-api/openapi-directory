import { SpeakeasyBase } from "../../../internal/utils";
import { GetInvoiceApplicationPartType } from "./getinvoiceapplicationparttype";
/**
 * OK
 */
export declare class GetInvoiceApplicationPartCollectionType extends SpeakeasyBase {
    /**
     * Container for application parts.
     *
     * @remarks
     *
     */
    applicationParts?: GetInvoiceApplicationPartType[];
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
