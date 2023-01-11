import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Document } from "./document";



export class DocumentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=document", elemType: Document })
  document?: Document[];
}
