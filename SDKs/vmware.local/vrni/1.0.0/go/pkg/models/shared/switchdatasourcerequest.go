package shared

type SwitchDataSourceRequest struct {
	Credentials *PasswordCredentials `json:"credentials,omitempty"`
}
