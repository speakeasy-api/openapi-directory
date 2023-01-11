import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Profile } from "./profile";



export class ProviderAccountProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=profile", elemType: Profile })
  profile?: Profile[];
}
