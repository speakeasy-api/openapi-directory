import { SpeakeasyBase } from "../../../internal/utils";
export declare class POSTAttachmentResponseType extends SpeakeasyBase {
    /**
     * ID to identify the attached file. Use this file ID with [Get files](https://www.zuora.com/developer/api-reference/#operation/GET_Files) to download the file.
     *
     * @remarks
     *
     */
    fileId?: string;
    /**
     * Attachment id.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * Returns `true` if the request was processed successfully.
     *
     * @remarks
     *
     */
    success?: boolean;
}
