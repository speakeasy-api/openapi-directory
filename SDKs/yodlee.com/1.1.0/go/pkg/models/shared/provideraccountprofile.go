package shared

type ProviderAccountProfile struct {
	ID      *int64    `json:"id,omitempty"`
	Profile []Profile `json:"profile,omitempty"`
}
