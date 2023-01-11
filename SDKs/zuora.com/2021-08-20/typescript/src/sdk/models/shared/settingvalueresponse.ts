import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SettingValueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=errorMessages" })
  errorMessages?: string[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
