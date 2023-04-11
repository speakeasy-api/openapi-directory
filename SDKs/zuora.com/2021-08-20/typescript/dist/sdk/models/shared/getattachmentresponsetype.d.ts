import { SpeakeasyBase } from "../../../internal/utils";
export declare class GETAttachmentResponseType extends SpeakeasyBase {
    /**
     * Zuora user id who added this attachment to the object.
     *
     * @remarks
     *
     */
    createdBy?: string;
    /**
     * Date and time when the attachment was added to the object.
     *
     * @remarks
     *
     */
    createdOn?: Date;
    /**
     * Description of the attachment.
     *
     * @remarks
     *
     */
    description?: string;
    /**
     * File type.
     *
     * @remarks
     *
     */
    fileContentType?: string;
    /**
     * File ID of the attached file. Use this file ID with [Get files](https://www.zuora.com/developer/api-reference/#operation/GET_Files) to download the file.
     *
     * @remarks
     *
     */
    fileId?: string;
    /**
     * Attachment file name.
     *
     * @remarks
     *
     */
    fileName?: string;
    /**
     * Id of this attachment.
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
    /**
     * Zuora user id who last updated the attachment.
     *
     * @remarks
     *
     */
    updatedBy?: string;
    /**
     * Date and time when the attachment was last updated.
     *
     * @remarks
     *
     */
    updatedOn?: Date;
}
