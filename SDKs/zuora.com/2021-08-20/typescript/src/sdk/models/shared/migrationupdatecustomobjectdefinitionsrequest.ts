import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomObjectDefinitionUpdateActionRequest } from "./customobjectdefinitionupdateactionrequest";



export class MigrationUpdateCustomObjectDefinitionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions", elemType: CustomObjectDefinitionUpdateActionRequest })
  actions: CustomObjectDefinitionUpdateActionRequest[];
}
