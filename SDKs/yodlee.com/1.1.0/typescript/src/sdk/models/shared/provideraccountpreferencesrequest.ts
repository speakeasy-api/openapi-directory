import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProviderAccountPreferences } from "./provideraccountpreferences";



export class ProviderAccountPreferencesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=preferences" })
  preferences?: ProviderAccountPreferences;
}
