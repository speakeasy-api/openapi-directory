package shared

type AccountProfile struct {
	Address     []AccountAddress `json:"address,omitempty"`
	Email       []Email          `json:"email,omitempty"`
	Identifier  []Identifier     `json:"identifier,omitempty"`
	PhoneNumber []PhoneNumber    `json:"phoneNumber,omitempty"`
}
