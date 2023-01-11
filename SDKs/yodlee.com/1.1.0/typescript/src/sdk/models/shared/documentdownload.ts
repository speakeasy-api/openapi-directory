import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DocumentDownload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=docContent" })
  docContent?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
