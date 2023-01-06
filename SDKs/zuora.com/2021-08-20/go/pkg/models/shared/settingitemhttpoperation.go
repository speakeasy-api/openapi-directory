package shared

type SettingItemHTTPOperationMethodEnum string

const (
	SettingItemHTTPOperationMethodEnumGet     SettingItemHTTPOperationMethodEnum = "GET"
	SettingItemHTTPOperationMethodEnumHead    SettingItemHTTPOperationMethodEnum = "HEAD"
	SettingItemHTTPOperationMethodEnumPost    SettingItemHTTPOperationMethodEnum = "POST"
	SettingItemHTTPOperationMethodEnumPut     SettingItemHTTPOperationMethodEnum = "PUT"
	SettingItemHTTPOperationMethodEnumPatch   SettingItemHTTPOperationMethodEnum = "PATCH"
	SettingItemHTTPOperationMethodEnumDelete  SettingItemHTTPOperationMethodEnum = "DELETE"
	SettingItemHTTPOperationMethodEnumOptions SettingItemHTTPOperationMethodEnum = "OPTIONS"
	SettingItemHTTPOperationMethodEnumTrace   SettingItemHTTPOperationMethodEnum = "TRACE"
)

type SettingItemHTTPOperation struct {
	Method       *SettingItemHTTPOperationMethodEnum `json:"method,omitempty"`
	Parameters   []SettingItemHTTPRequestParameter   `json:"parameters,omitempty"`
	RequestType  map[string]interface{}              `json:"requestType,omitempty"`
	ResponseType map[string]interface{}              `json:"responseType,omitempty"`
	URL          *string                             `json:"url,omitempty"`
}
