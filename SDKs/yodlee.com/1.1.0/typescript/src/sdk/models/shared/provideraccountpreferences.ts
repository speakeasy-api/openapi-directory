import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProviderAccountPreferences extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isAutoRefreshEnabled" })
  isAutoRefreshEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isDataExtractsEnabled" })
  isDataExtractsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=linkedProviderAccountId" })
  linkedProviderAccountId?: number;
}
