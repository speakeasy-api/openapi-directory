import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CustomObjectRecordsWithError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=record" })
  record?: Record<string, any>;
}
