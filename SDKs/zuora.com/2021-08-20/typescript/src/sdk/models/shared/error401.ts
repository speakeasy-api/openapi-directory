import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Error401 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
