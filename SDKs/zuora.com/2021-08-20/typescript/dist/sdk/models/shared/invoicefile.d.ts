import { SpeakeasyBase } from "../../../internal/utils";
export declare class InvoiceFile extends SpeakeasyBase {
    /**
     * The ID of the invoice PDF file. This is the ID for the file object and different from the file handle ID in the `pdfFileUrl` field. To open a file, you have to use the file handle ID.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * The REST URL for the invoice PDF file. Click the URL to open the invoice PDF file.
     *
     * @remarks
     *
     */
    pdfFileUrl?: string;
    /**
     * The version number of the invoice PDF file.
     *
     * @remarks
     *
     */
    versionNumber?: number;
}
