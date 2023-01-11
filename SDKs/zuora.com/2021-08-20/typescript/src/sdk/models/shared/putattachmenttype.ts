import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutAttachmentType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=fileName" })
  fileName?: string;
}
