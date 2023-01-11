import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostUploadFileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fileId" })
  fileId?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
