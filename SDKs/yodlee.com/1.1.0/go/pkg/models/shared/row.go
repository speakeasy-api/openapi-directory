package shared

type Row struct {
	Field          []Field `json:"field,omitempty"`
	FieldRowChoice *string `json:"fieldRowChoice,omitempty"`
	Form           *string `json:"form,omitempty"`
	ID             *string `json:"id,omitempty"`
	Label          *string `json:"label,omitempty"`
}
