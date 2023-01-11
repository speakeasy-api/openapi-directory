import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProviderAccountDetail } from "./provideraccountdetail";



export class ProviderAccountDetailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=providerAccount", elemType: ProviderAccountDetail })
  providerAccount?: ProviderAccountDetail[];
}
