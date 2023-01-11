import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutDocumentPropertiesType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customFileName" })
  customFileName?: string;
}
