package shared

type CobrandNotificationEventNameEnum string

const (
	CobrandNotificationEventNameEnumRefresh            CobrandNotificationEventNameEnum = "REFRESH"
	CobrandNotificationEventNameEnumDataUpdates        CobrandNotificationEventNameEnum = "DATA_UPDATES"
	CobrandNotificationEventNameEnumAutoRefreshUpdates CobrandNotificationEventNameEnum = "AUTO_REFRESH_UPDATES"
)

type CobrandNotificationEvent struct {
	CallbackURL *string                           `json:"callbackUrl,omitempty"`
	Name        *CobrandNotificationEventNameEnum `json:"name,omitempty"`
}
