import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CustomObjectCustomFieldDefinitionUpdateOriginEnum {
    Custom = "custom"
}


// CustomObjectCustomFieldDefinitionUpdate
/** 
 * The custom field definition in the custom object
**/
export class CustomObjectCustomFieldDefinitionUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=default" })
  default?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=origin" })
  origin?: CustomObjectCustomFieldDefinitionUpdateOriginEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
