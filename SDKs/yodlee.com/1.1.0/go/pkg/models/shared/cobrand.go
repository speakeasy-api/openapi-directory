package shared

type Cobrand struct {
	CobrandLogin    string  `json:"cobrandLogin"`
	CobrandPassword string  `json:"cobrandPassword"`
	Locale          *string `json:"locale,omitempty"`
}
