package shared

type EmailTypeEnum string

const (
	EmailTypeEnumPrimary   EmailTypeEnum = "PRIMARY"
	EmailTypeEnumSecondary EmailTypeEnum = "SECONDARY"
	EmailTypeEnumPersonal  EmailTypeEnum = "PERSONAL"
	EmailTypeEnumWork      EmailTypeEnum = "WORK"
	EmailTypeEnumOthers    EmailTypeEnum = "OTHERS"
)

type Email struct {
	Type  *EmailTypeEnum `json:"type,omitempty"`
	Value *string        `json:"value,omitempty"`
}
