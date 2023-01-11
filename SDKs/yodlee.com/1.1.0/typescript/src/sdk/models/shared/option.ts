import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Option extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayText" })
  displayText?: string;

  @SpeakeasyMetadata({ data: "json, name=isSelected" })
  isSelected?: boolean;

  @SpeakeasyMetadata({ data: "json, name=optionValue" })
  optionValue?: string;
}
