package shared

type SettingValueResponseWrapperMethodEnum string

const (
	SettingValueResponseWrapperMethodEnumGet     SettingValueResponseWrapperMethodEnum = "GET"
	SettingValueResponseWrapperMethodEnumHead    SettingValueResponseWrapperMethodEnum = "HEAD"
	SettingValueResponseWrapperMethodEnumPost    SettingValueResponseWrapperMethodEnum = "POST"
	SettingValueResponseWrapperMethodEnumPut     SettingValueResponseWrapperMethodEnum = "PUT"
	SettingValueResponseWrapperMethodEnumPatch   SettingValueResponseWrapperMethodEnum = "PATCH"
	SettingValueResponseWrapperMethodEnumDelete  SettingValueResponseWrapperMethodEnum = "DELETE"
	SettingValueResponseWrapperMethodEnumOptions SettingValueResponseWrapperMethodEnum = "OPTIONS"
	SettingValueResponseWrapperMethodEnumTrace   SettingValueResponseWrapperMethodEnum = "TRACE"
)

type SettingValueResponseWrapper struct {
	ID       *string                                `json:"id,omitempty"`
	Method   *SettingValueResponseWrapperMethodEnum `json:"method,omitempty"`
	Response *SettingValueResponse                  `json:"response,omitempty"`
	URL      *string                                `json:"url,omitempty"`
}
