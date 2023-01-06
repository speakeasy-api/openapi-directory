package shared

type Profile struct {
	Address     []AccountAddress `json:"address,omitempty"`
	Email       []Email          `json:"email,omitempty"`
	Gender      *string          `json:"gender,omitempty"`
	Identifier  []Identifier     `json:"identifier,omitempty"`
	Name        *Name            `json:"name,omitempty"`
	PhoneNumber []PhoneNumber    `json:"phoneNumber,omitempty"`
}
