import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomObjectDefinitionUpdateActionResponse } from "./customobjectdefinitionupdateactionresponse";



export class MigrationUpdateCustomObjectDefinitionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions", elemType: CustomObjectDefinitionUpdateActionResponse })
  actions?: CustomObjectDefinitionUpdateActionResponse[];
}
