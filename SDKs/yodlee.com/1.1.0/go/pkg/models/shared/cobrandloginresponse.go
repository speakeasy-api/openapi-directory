package shared

type CobrandLoginResponse struct {
	ApplicationID *string         `json:"applicationId,omitempty"`
	CobrandID     *int64          `json:"cobrandId,omitempty"`
	Locale        *string         `json:"locale,omitempty"`
	Session       *CobrandSession `json:"session,omitempty"`
}
