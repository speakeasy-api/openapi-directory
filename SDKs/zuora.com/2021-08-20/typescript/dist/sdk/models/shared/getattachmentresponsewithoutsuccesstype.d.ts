import { SpeakeasyBase } from "../../../internal/utils";
export declare class GETAttachmentResponseWithoutSuccessType extends SpeakeasyBase {
    /**
     * Zuora user id of who added this attachment to the object.
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
     * Attachment file type.
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
     * Zuora id of this attachement.
     *
     * @remarks
     *
     */
    id?: string;
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
