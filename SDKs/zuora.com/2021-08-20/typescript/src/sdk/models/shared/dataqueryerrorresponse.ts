import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DataQueryErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
