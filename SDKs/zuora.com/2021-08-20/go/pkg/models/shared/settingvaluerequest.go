package shared

type SettingValueRequestMethodEnum string

const (
	SettingValueRequestMethodEnumGet     SettingValueRequestMethodEnum = "GET"
	SettingValueRequestMethodEnumHead    SettingValueRequestMethodEnum = "HEAD"
	SettingValueRequestMethodEnumPost    SettingValueRequestMethodEnum = "POST"
	SettingValueRequestMethodEnumPut     SettingValueRequestMethodEnum = "PUT"
	SettingValueRequestMethodEnumPatch   SettingValueRequestMethodEnum = "PATCH"
	SettingValueRequestMethodEnumDelete  SettingValueRequestMethodEnum = "DELETE"
	SettingValueRequestMethodEnumOptions SettingValueRequestMethodEnum = "OPTIONS"
	SettingValueRequestMethodEnumTrace   SettingValueRequestMethodEnum = "TRACE"
)

type SettingValueRequest struct {
	Body     map[string]interface{}         `json:"body,omitempty"`
	Children []ChildrenSettingValueRequest  `json:"children,omitempty"`
	ID       *string                        `json:"id,omitempty"`
	Method   *SettingValueRequestMethodEnum `json:"method,omitempty"`
	URL      *string                        `json:"url,omitempty"`
}
