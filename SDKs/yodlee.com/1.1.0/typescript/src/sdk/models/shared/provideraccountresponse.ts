import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProviderAccount } from "./provideraccount";



export class ProviderAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=providerAccount", elemType: ProviderAccount })
  providerAccount?: ProviderAccount[];
}
