import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomObjectDefinition } from "./customobjectdefinition";



export class GetAllCustomObjectDefinitionsInNamespaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=definitions", elemType: CustomObjectDefinition })
  definitions?: Record<string, CustomObjectDefinition>;
}
