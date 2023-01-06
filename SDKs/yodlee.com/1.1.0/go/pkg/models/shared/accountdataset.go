package shared

type AccountDatasetAdditionalStatusEnum string

const (
	AccountDatasetAdditionalStatusEnumLoginInProgress              AccountDatasetAdditionalStatusEnum = "LOGIN_IN_PROGRESS"
	AccountDatasetAdditionalStatusEnumDataRetrievalInProgress      AccountDatasetAdditionalStatusEnum = "DATA_RETRIEVAL_IN_PROGRESS"
	AccountDatasetAdditionalStatusEnumAcctSummaryReceived          AccountDatasetAdditionalStatusEnum = "ACCT_SUMMARY_RECEIVED"
	AccountDatasetAdditionalStatusEnumAvailableDataRetrieved       AccountDatasetAdditionalStatusEnum = "AVAILABLE_DATA_RETRIEVED"
	AccountDatasetAdditionalStatusEnumPartialDataRetrieved         AccountDatasetAdditionalStatusEnum = "PARTIAL_DATA_RETRIEVED"
	AccountDatasetAdditionalStatusEnumDataRetrievalFailed          AccountDatasetAdditionalStatusEnum = "DATA_RETRIEVAL_FAILED"
	AccountDatasetAdditionalStatusEnumDataNotAvailable             AccountDatasetAdditionalStatusEnum = "DATA_NOT_AVAILABLE"
	AccountDatasetAdditionalStatusEnumAccountLocked                AccountDatasetAdditionalStatusEnum = "ACCOUNT_LOCKED"
	AccountDatasetAdditionalStatusEnumAddlAuthenticationRequired   AccountDatasetAdditionalStatusEnum = "ADDL_AUTHENTICATION_REQUIRED"
	AccountDatasetAdditionalStatusEnumBetaSiteDevInProgress        AccountDatasetAdditionalStatusEnum = "BETA_SITE_DEV_IN_PROGRESS"
	AccountDatasetAdditionalStatusEnumCredentialsUpdateNeeded      AccountDatasetAdditionalStatusEnum = "CREDENTIALS_UPDATE_NEEDED"
	AccountDatasetAdditionalStatusEnumIncorrectCredentials         AccountDatasetAdditionalStatusEnum = "INCORRECT_CREDENTIALS"
	AccountDatasetAdditionalStatusEnumPropertyValueNotAvailable    AccountDatasetAdditionalStatusEnum = "PROPERTY_VALUE_NOT_AVAILABLE"
	AccountDatasetAdditionalStatusEnumInvalidAddlInfoProvided      AccountDatasetAdditionalStatusEnum = "INVALID_ADDL_INFO_PROVIDED"
	AccountDatasetAdditionalStatusEnumRequestTimeOut               AccountDatasetAdditionalStatusEnum = "REQUEST_TIME_OUT"
	AccountDatasetAdditionalStatusEnumSiteBlockingError            AccountDatasetAdditionalStatusEnum = "SITE_BLOCKING_ERROR"
	AccountDatasetAdditionalStatusEnumUnexpectedSiteError          AccountDatasetAdditionalStatusEnum = "UNEXPECTED_SITE_ERROR"
	AccountDatasetAdditionalStatusEnumSiteNotSupported             AccountDatasetAdditionalStatusEnum = "SITE_NOT_SUPPORTED"
	AccountDatasetAdditionalStatusEnumSiteUnavailable              AccountDatasetAdditionalStatusEnum = "SITE_UNAVAILABLE"
	AccountDatasetAdditionalStatusEnumTechError                    AccountDatasetAdditionalStatusEnum = "TECH_ERROR"
	AccountDatasetAdditionalStatusEnumUserActionNeededAtSite       AccountDatasetAdditionalStatusEnum = "USER_ACTION_NEEDED_AT_SITE"
	AccountDatasetAdditionalStatusEnumSiteSessionInvalidated       AccountDatasetAdditionalStatusEnum = "SITE_SESSION_INVALIDATED"
	AccountDatasetAdditionalStatusEnumNewAuthenticationRequired    AccountDatasetAdditionalStatusEnum = "NEW_AUTHENTICATION_REQUIRED"
	AccountDatasetAdditionalStatusEnumDatasetNotSupported          AccountDatasetAdditionalStatusEnum = "DATASET_NOT_SUPPORTED"
	AccountDatasetAdditionalStatusEnumEnrollmentRequiredForDataset AccountDatasetAdditionalStatusEnum = "ENROLLMENT_REQUIRED_FOR_DATASET"
	AccountDatasetAdditionalStatusEnumConsentRequired              AccountDatasetAdditionalStatusEnum = "CONSENT_REQUIRED"
	AccountDatasetAdditionalStatusEnumConsentExpired               AccountDatasetAdditionalStatusEnum = "CONSENT_EXPIRED"
	AccountDatasetAdditionalStatusEnumConsentRevoked               AccountDatasetAdditionalStatusEnum = "CONSENT_REVOKED"
	AccountDatasetAdditionalStatusEnumIncorrectOauthToken          AccountDatasetAdditionalStatusEnum = "INCORRECT_OAUTH_TOKEN"
	AccountDatasetAdditionalStatusEnumMigrationInProgress          AccountDatasetAdditionalStatusEnum = "MIGRATION_IN_PROGRESS"
)

type AccountDatasetNameEnum string

const (
	AccountDatasetNameEnumBasicAggData   AccountDatasetNameEnum = "BASIC_AGG_DATA"
	AccountDatasetNameEnumAdvanceAggData AccountDatasetNameEnum = "ADVANCE_AGG_DATA"
	AccountDatasetNameEnumAcctProfile    AccountDatasetNameEnum = "ACCT_PROFILE"
	AccountDatasetNameEnumDocument       AccountDatasetNameEnum = "DOCUMENT"
)

type AccountDatasetUpdateEligibilityEnum string

const (
	AccountDatasetUpdateEligibilityEnumAllowUpdate                AccountDatasetUpdateEligibilityEnum = "ALLOW_UPDATE"
	AccountDatasetUpdateEligibilityEnumAllowUpdateWithCredentials AccountDatasetUpdateEligibilityEnum = "ALLOW_UPDATE_WITH_CREDENTIALS"
	AccountDatasetUpdateEligibilityEnumDisallowUpdate             AccountDatasetUpdateEligibilityEnum = "DISALLOW_UPDATE"
)

type AccountDataset struct {
	AdditionalStatus    *AccountDatasetAdditionalStatusEnum  `json:"additionalStatus,omitempty"`
	LastUpdateAttempt   *string                              `json:"lastUpdateAttempt,omitempty"`
	LastUpdated         *string                              `json:"lastUpdated,omitempty"`
	Name                *AccountDatasetNameEnum              `json:"name,omitempty"`
	NextUpdateScheduled *string                              `json:"nextUpdateScheduled,omitempty"`
	UpdateEligibility   *AccountDatasetUpdateEligibilityEnum `json:"updateEligibility,omitempty"`
}
