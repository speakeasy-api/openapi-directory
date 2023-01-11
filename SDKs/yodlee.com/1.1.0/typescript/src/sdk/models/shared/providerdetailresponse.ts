import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProviderDetail } from "./providerdetail";



export class ProviderDetailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=provider", elemType: ProviderDetail })
  provider?: ProviderDetail[];
}
