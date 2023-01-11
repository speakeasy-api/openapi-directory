import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetUsageWrapper extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPage" })
  nextPage?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;

  @SpeakeasyMetadata({ data: "json, name=usage" })
  usage?: Record<string, any>[];
}
