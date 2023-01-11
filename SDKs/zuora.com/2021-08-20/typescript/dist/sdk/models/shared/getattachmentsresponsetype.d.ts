import { SpeakeasyBase } from "../../../internal/utils";
import { GetAttachmentResponseWithoutSuccessType } from "./getattachmentresponsewithoutsuccesstype";
export declare class GetAttachmentsResponseType extends SpeakeasyBase {
    attachments?: GetAttachmentResponseWithoutSuccessType[];
    nextPage?: string;
    success?: boolean;
}
