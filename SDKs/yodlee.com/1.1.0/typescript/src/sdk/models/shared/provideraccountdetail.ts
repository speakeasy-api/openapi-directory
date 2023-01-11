import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountDataset } from "./accountdataset";
import { LoginForm } from "./loginform";
import { ProviderAccountPreferences } from "./provideraccountpreferences";


export enum ProviderAccountDetailAggregationSourceEnum {
    System = "SYSTEM",
    User = "USER"
}

export enum ProviderAccountDetailOauthMigrationStatusEnum {
    InProgress = "IN_PROGRESS",
    ToBeMigrated = "TO_BE_MIGRATED",
    Completed = "COMPLETED"
}

export enum ProviderAccountDetailStatusEnum {
    LoginInProgress = "LOGIN_IN_PROGRESS",
    UserInputRequired = "USER_INPUT_REQUIRED",
    InProgress = "IN_PROGRESS",
    PartialSuccess = "PARTIAL_SUCCESS",
    Success = "SUCCESS",
    Failed = "FAILED",
    MigrationInProgress = "MIGRATION_IN_PROGRESS"
}


export class ProviderAccountDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aggregationSource" })
  aggregationSource?: ProviderAccountDetailAggregationSourceEnum;

  @SpeakeasyMetadata({ data: "json, name=consentId" })
  consentId: number;

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

  @SpeakeasyMetadata({ data: "json, name=loginForm", elemType: LoginForm })
  loginForm?: LoginForm[];

  @SpeakeasyMetadata({ data: "json, name=oauthMigrationStatus" })
  oauthMigrationStatus?: ProviderAccountDetailOauthMigrationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=preferences" })
  preferences?: ProviderAccountPreferences;

  @SpeakeasyMetadata({ data: "json, name=providerId" })
  providerId?: number;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ProviderAccountDetailStatusEnum;
}
