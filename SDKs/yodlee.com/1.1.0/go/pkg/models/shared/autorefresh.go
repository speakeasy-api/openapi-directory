package shared

type AutoRefreshAdditionalStatusEnum string

const (
	AutoRefreshAdditionalStatusEnumScheduled           AutoRefreshAdditionalStatusEnum = "SCHEDULED"
	AutoRefreshAdditionalStatusEnumTempError           AutoRefreshAdditionalStatusEnum = "TEMP_ERROR"
	AutoRefreshAdditionalStatusEnumSiteBlocking        AutoRefreshAdditionalStatusEnum = "SITE_BLOCKING"
	AutoRefreshAdditionalStatusEnumSiteNotSupported    AutoRefreshAdditionalStatusEnum = "SITE_NOT_SUPPORTED"
	AutoRefreshAdditionalStatusEnumRealTimeMfaRequired AutoRefreshAdditionalStatusEnum = "REAL_TIME_MFA_REQUIRED"
	AutoRefreshAdditionalStatusEnumUserActionRequired  AutoRefreshAdditionalStatusEnum = "USER_ACTION_REQUIRED"
	AutoRefreshAdditionalStatusEnumUnsubscribed        AutoRefreshAdditionalStatusEnum = "UNSUBSCRIBED"
	AutoRefreshAdditionalStatusEnumManualAccount       AutoRefreshAdditionalStatusEnum = "MANUAL_ACCOUNT"
)

type AutoRefreshStatusEnum string

const (
	AutoRefreshStatusEnumEnabled  AutoRefreshStatusEnum = "ENABLED"
	AutoRefreshStatusEnumDisabled AutoRefreshStatusEnum = "DISABLED"
)

type AutoRefresh struct {
	AdditionalStatus *AutoRefreshAdditionalStatusEnum `json:"additionalStatus,omitempty"`
	AsOfDate         *string                          `json:"asOfDate,omitempty"`
	Status           *AutoRefreshStatusEnum           `json:"status,omitempty"`
}
