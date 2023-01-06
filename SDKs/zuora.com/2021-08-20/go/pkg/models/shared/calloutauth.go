package shared

// CalloutAuth
// If requiredAuth is true, this object is required.
type CalloutAuth struct {
	Domain     *string `json:"domain,omitempty"`
	Password   *string `json:"password,omitempty"`
	Preemptive *bool   `json:"preemptive,omitempty"`
	Username   *string `json:"username,omitempty"`
}
