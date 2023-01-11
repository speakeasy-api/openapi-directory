import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpdatedProviderAccount } from "./updatedprovideraccount";



export class UpdatedProviderAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=providerAccount", elemType: UpdatedProviderAccount })
  providerAccount?: UpdatedProviderAccount[];
}
