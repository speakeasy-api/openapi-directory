import { SpeakeasyBase } from "../../../internal/utils";
import { GETAttachmentResponseWithoutSuccessType } from "./getattachmentresponsewithoutsuccesstype";
export declare class GETAttachmentsResponseType extends SpeakeasyBase {
    /**
     * Container for one or more attachments.
     *
     * @remarks
     *
     */
    attachments?: GETAttachmentResponseWithoutSuccessType[];
    /**
     * URL to retrieve the next page of the response if it exists; otherwise absent.
     *
     * @remarks
     *
     */
    nextPage?: string;
    /**
     * Returns `true` if the request was processed successfully.
     *
     * @remarks
     *
     */
    success?: boolean;
}
