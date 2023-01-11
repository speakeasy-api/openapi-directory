import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountDataset } from "./accountdataset";
import { ProviderAccountPreferences } from "./provideraccountpreferences";


export enum ProviderAccountAggregationSourceEnum {
    System = "SYSTEM",
    User = "USER"
}

export enum ProviderAccountOauthMigrationStatusEnum {
    InProgress = "IN_PROGRESS",
    ToBeMigrated = "TO_BE_MIGRATED",
    Completed = "COMPLETED"
}

export enum ProviderAccountStatusEnum {
    LoginInProgress = "LOGIN_IN_PROGRESS",
    UserInputRequired = "USER_INPUT_REQUIRED",
    InProgress = "IN_PROGRESS",
    PartialSuccess = "PARTIAL_SUCCESS",
    Success = "SUCCESS",
    Failed = "FAILED",
    MigrationInProgress = "MIGRATION_IN_PROGRESS"
}


export class ProviderAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aggregationSource" })
  aggregationSource?: ProviderAccountAggregationSourceEnum;

  @SpeakeasyMetadata({ data: "json, name=consentId" })
  consentId?: number;

  @SpeakeasyMetadata({ data: "json, name=createdDate" })
  createdDate?: string;

  @SpeakeasyMetadata({ data: "json, name=dataset", elemType: AccountDataset })
  dataset?: AccountDataset[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=isManual" })
  isManual?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lastUpdated" })
  lastUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=oauthMigrationStatus" })
  oauthMigrationStatus?: ProviderAccountOauthMigrationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=preferences" })
  preferences?: ProviderAccountPreferences;

  @SpeakeasyMetadata({ data: "json, name=providerId" })
  providerId?: number;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ProviderAccountStatusEnum;
}
