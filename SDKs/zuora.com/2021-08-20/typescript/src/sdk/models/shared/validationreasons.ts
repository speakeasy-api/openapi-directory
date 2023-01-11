import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ValidationReasons extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fieldName" })
  fieldName?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
