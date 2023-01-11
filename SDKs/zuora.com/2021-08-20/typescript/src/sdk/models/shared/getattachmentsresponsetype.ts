import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GetAttachmentResponseWithoutSuccessType } from "./getattachmentresponsewithoutsuccesstype";



export class GetAttachmentsResponseType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachments", elemType: GetAttachmentResponseWithoutSuccessType })
  attachments?: GetAttachmentResponseWithoutSuccessType[];

  @SpeakeasyMetadata({ data: "json, name=nextPage" })
  nextPage?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
