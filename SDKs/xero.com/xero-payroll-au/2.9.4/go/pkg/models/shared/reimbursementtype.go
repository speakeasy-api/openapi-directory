package shared

type ReimbursementType struct {
	AccountCode         *string `json:"AccountCode,omitempty"`
	CurrentRecord       *bool   `json:"CurrentRecord,omitempty"`
	Name                *string `json:"Name,omitempty"`
	ReimbursementTypeID *string `json:"ReimbursementTypeID,omitempty"`
	UpdatedDateUTC      *string `json:"UpdatedDateUTC,omitempty"`
}

type ReimbursementTypeInput struct {
	AccountCode         *string `json:"AccountCode,omitempty"`
	CurrentRecord       *bool   `json:"CurrentRecord,omitempty"`
	Name                *string `json:"Name,omitempty"`
	ReimbursementTypeID *string `json:"ReimbursementTypeID,omitempty"`
}
