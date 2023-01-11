import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomObjectCustomFieldDefinitionUpdate } from "./customobjectcustomfielddefinitionupdate";



// UpdateCustomObjectCusotmField
/** 
 * A reference to a field.
**/
export class UpdateCustomObjectCusotmField extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=definition" })
  definition?: CustomObjectCustomFieldDefinitionUpdate;

  @SpeakeasyMetadata({ data: "json, name=filterable" })
  filterable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: boolean;

  @SpeakeasyMetadata({ data: "json, name=targetName" })
  targetName?: string;
}
