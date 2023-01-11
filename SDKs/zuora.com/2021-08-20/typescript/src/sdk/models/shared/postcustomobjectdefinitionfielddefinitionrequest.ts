import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostCustomObjectDefinitionFieldDefinitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
