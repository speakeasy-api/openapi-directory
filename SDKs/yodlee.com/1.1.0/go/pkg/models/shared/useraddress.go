package shared

type UserAddress struct {
	Address1 *string `json:"address1,omitempty"`
	Address2 *string `json:"address2,omitempty"`
	Address3 *string `json:"address3,omitempty"`
	City     *string `json:"city,omitempty"`
	Country  *string `json:"country,omitempty"`
	State    *string `json:"state,omitempty"`
	Zip      *string `json:"zip,omitempty"`
}
