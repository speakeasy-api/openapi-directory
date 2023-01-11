import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AccountDatasetAdditionalStatusEnum {
    LoginInProgress = "LOGIN_IN_PROGRESS",
    DataRetrievalInProgress = "DATA_RETRIEVAL_IN_PROGRESS",
    AcctSummaryReceived = "ACCT_SUMMARY_RECEIVED",
    AvailableDataRetrieved = "AVAILABLE_DATA_RETRIEVED",
    PartialDataRetrieved = "PARTIAL_DATA_RETRIEVED",
    DataRetrievalFailed = "DATA_RETRIEVAL_FAILED",
    DataNotAvailable = "DATA_NOT_AVAILABLE",
    AccountLocked = "ACCOUNT_LOCKED",
    AddlAuthenticationRequired = "ADDL_AUTHENTICATION_REQUIRED",
    BetaSiteDevInProgress = "BETA_SITE_DEV_IN_PROGRESS",
    CredentialsUpdateNeeded = "CREDENTIALS_UPDATE_NEEDED",
    IncorrectCredentials = "INCORRECT_CREDENTIALS",
    PropertyValueNotAvailable = "PROPERTY_VALUE_NOT_AVAILABLE",
    InvalidAddlInfoProvided = "INVALID_ADDL_INFO_PROVIDED",
    RequestTimeOut = "REQUEST_TIME_OUT",
    SiteBlockingError = "SITE_BLOCKING_ERROR",
    UnexpectedSiteError = "UNEXPECTED_SITE_ERROR",
    SiteNotSupported = "SITE_NOT_SUPPORTED",
    SiteUnavailable = "SITE_UNAVAILABLE",
    TechError = "TECH_ERROR",
    UserActionNeededAtSite = "USER_ACTION_NEEDED_AT_SITE",
    SiteSessionInvalidated = "SITE_SESSION_INVALIDATED",
    NewAuthenticationRequired = "NEW_AUTHENTICATION_REQUIRED",
    DatasetNotSupported = "DATASET_NOT_SUPPORTED",
    EnrollmentRequiredForDataset = "ENROLLMENT_REQUIRED_FOR_DATASET",
    ConsentRequired = "CONSENT_REQUIRED",
    ConsentExpired = "CONSENT_EXPIRED",
    ConsentRevoked = "CONSENT_REVOKED",
    IncorrectOauthToken = "INCORRECT_OAUTH_TOKEN",
    MigrationInProgress = "MIGRATION_IN_PROGRESS"
}
export declare enum AccountDatasetNameEnum {
    BasicAggData = "BASIC_AGG_DATA",
    AdvanceAggData = "ADVANCE_AGG_DATA",
    AcctProfile = "ACCT_PROFILE",
    Document = "DOCUMENT"
}
export declare enum AccountDatasetUpdateEligibilityEnum {
    AllowUpdate = "ALLOW_UPDATE",
    AllowUpdateWithCredentials = "ALLOW_UPDATE_WITH_CREDENTIALS",
    DisallowUpdate = "DISALLOW_UPDATE"
}
export declare class AccountDataset extends SpeakeasyBase {
    additionalStatus?: AccountDatasetAdditionalStatusEnum;
    lastUpdateAttempt?: string;
    lastUpdated?: string;
    name?: AccountDatasetNameEnum;
    nextUpdateScheduled?: string;
    updateEligibility?: AccountDatasetUpdateEligibilityEnum;
}
