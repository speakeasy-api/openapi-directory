import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PostCustomObjectDefinitionsRequestDefinition } from "./postcustomobjectdefinitionsrequestdefinition";



export class PostCustomObjectDefinitionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=definitions", elemType: PostCustomObjectDefinitionsRequestDefinition })
  definitions?: Record<string, PostCustomObjectDefinitionsRequestDefinition>;
}
