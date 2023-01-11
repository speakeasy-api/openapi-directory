import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CustomObjectCustomFieldDefinitionOriginEnum {
    Custom = "custom"
}


export class CustomObjectCustomFieldDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=origin" })
  origin?: CustomObjectCustomFieldDefinitionOriginEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
