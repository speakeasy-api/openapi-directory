package shared

type FieldTypeEnum string

const (
	FieldTypeEnumText     FieldTypeEnum = "text"
	FieldTypeEnumPassword FieldTypeEnum = "password"
	FieldTypeEnumOption   FieldTypeEnum = "option"
	FieldTypeEnumCheckbox FieldTypeEnum = "checkbox"
	FieldTypeEnumRadio    FieldTypeEnum = "radio"
	FieldTypeEnumImage    FieldTypeEnum = "image"
)

type FieldInput struct {
	ID    *string `json:"id,omitempty"`
	Image *string `json:"image,omitempty"`
	Value *string `json:"value,omitempty"`
}

type Field struct {
	ID              *string        `json:"id,omitempty"`
	Image           *string        `json:"image,omitempty"`
	IsOptional      *bool          `json:"isOptional,omitempty"`
	IsValueProvided *bool          `json:"isValueProvided,omitempty"`
	MaxLength       *int64         `json:"maxLength,omitempty"`
	MinLength       *int64         `json:"minLength,omitempty"`
	Name            *string        `json:"name,omitempty"`
	Option          []Option       `json:"option,omitempty"`
	Prefix          *string        `json:"prefix,omitempty"`
	Suffix          *string        `json:"suffix,omitempty"`
	Type            *FieldTypeEnum `json:"type,omitempty"`
	Value           *string        `json:"value,omitempty"`
	ValueEditable   *string        `json:"valueEditable,omitempty"`
}
