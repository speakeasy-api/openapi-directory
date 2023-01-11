import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostCatalogType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=toEntityIds" })
  toEntityIds: string[];
}
