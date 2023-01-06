package shared

type Name struct {
	First    *string `json:"first,omitempty"`
	FullName *string `json:"fullName,omitempty"`
	Last     *string `json:"last,omitempty"`
	Middle   *string `json:"middle,omitempty"`
}
