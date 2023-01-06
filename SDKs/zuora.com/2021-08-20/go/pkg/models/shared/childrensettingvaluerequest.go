package shared

type ChildrenSettingValueRequestMethodEnum string

const (
	ChildrenSettingValueRequestMethodEnumGet     ChildrenSettingValueRequestMethodEnum = "GET"
	ChildrenSettingValueRequestMethodEnumHead    ChildrenSettingValueRequestMethodEnum = "HEAD"
	ChildrenSettingValueRequestMethodEnumPost    ChildrenSettingValueRequestMethodEnum = "POST"
	ChildrenSettingValueRequestMethodEnumPut     ChildrenSettingValueRequestMethodEnum = "PUT"
	ChildrenSettingValueRequestMethodEnumPatch   ChildrenSettingValueRequestMethodEnum = "PATCH"
	ChildrenSettingValueRequestMethodEnumDelete  ChildrenSettingValueRequestMethodEnum = "DELETE"
	ChildrenSettingValueRequestMethodEnumOptions ChildrenSettingValueRequestMethodEnum = "OPTIONS"
	ChildrenSettingValueRequestMethodEnumTrace   ChildrenSettingValueRequestMethodEnum = "TRACE"
)

type ChildrenSettingValueRequest struct {
	Body   map[string]interface{}                 `json:"body,omitempty"`
	ID     *string                                `json:"id,omitempty"`
	Method *ChildrenSettingValueRequestMethodEnum `json:"method,omitempty"`
	URL    *string                                `json:"url,omitempty"`
}
