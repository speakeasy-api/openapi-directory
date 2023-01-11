import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProviderAccountProfile } from "./provideraccountprofile";



export class ProviderAccountUserProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=providerAccount", elemType: ProviderAccountProfile })
  providerAccount?: ProviderAccountProfile[];
}
