package shared

type PhoneNumberTypeEnum string

const (
	PhoneNumberTypeEnumHome     PhoneNumberTypeEnum = "HOME"
	PhoneNumberTypeEnumWork     PhoneNumberTypeEnum = "WORK"
	PhoneNumberTypeEnumLandline PhoneNumberTypeEnum = "LANDLINE"
	PhoneNumberTypeEnumMobile   PhoneNumberTypeEnum = "MOBILE"
)

type PhoneNumber struct {
	Type  *PhoneNumberTypeEnum `json:"type,omitempty"`
	Value *string              `json:"value,omitempty"`
}
