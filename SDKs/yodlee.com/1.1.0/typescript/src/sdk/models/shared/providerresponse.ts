import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Providers } from "./providers";



export class ProviderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=provider", elemType: Providers })
  provider?: Providers[];
}
