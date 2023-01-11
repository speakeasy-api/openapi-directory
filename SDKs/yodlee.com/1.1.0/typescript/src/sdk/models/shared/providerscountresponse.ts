import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProvidersCount } from "./providerscount";



export class ProvidersCountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=provider" })
  provider?: ProvidersCount;
}
