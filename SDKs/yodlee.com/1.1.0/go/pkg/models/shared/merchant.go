package shared

type MerchantSourceEnum string

const (
	MerchantSourceEnumYodlee  MerchantSourceEnum = "YODLEE"
	MerchantSourceEnumFactual MerchantSourceEnum = "FACTUAL"
)

type Merchant struct {
	Address       *AccountAddress     `json:"address,omitempty"`
	CategoryLabel []string            `json:"categoryLabel,omitempty"`
	Contact       *Contact            `json:"contact,omitempty"`
	Coordinates   *Coordinates        `json:"coordinates,omitempty"`
	ID            *string             `json:"id,omitempty"`
	Name          *string             `json:"name,omitempty"`
	Source        *MerchantSourceEnum `json:"source,omitempty"`
	Website       *string             `json:"website,omitempty"`
}
