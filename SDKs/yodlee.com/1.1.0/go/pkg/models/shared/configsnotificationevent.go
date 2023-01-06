package shared

type ConfigsNotificationEventNameEnum string

const (
	ConfigsNotificationEventNameEnumRefresh            ConfigsNotificationEventNameEnum = "REFRESH"
	ConfigsNotificationEventNameEnumDataUpdates        ConfigsNotificationEventNameEnum = "DATA_UPDATES"
	ConfigsNotificationEventNameEnumAutoRefreshUpdates ConfigsNotificationEventNameEnum = "AUTO_REFRESH_UPDATES"
)

type ConfigsNotificationEvent struct {
	CallbackURL *string                           `json:"callbackUrl,omitempty"`
	Name        *ConfigsNotificationEventNameEnum `json:"name,omitempty"`
}
