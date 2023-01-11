import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DocumentDownload } from "./documentdownload";



export class DocumentDownloadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=document", elemType: DocumentDownload })
  document?: DocumentDownload[];
}
