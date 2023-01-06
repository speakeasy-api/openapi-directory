package shared

type NsxvManagerDataSource struct {
	CentralCliEnabled *bool                `json:"central_cli_enabled,omitempty"`
	Credentials       *PasswordCredentials `json:"credentials,omitempty"`
	IpfixEnabled      *bool                `json:"ipfix_enabled,omitempty"`
	VcenterID         *string              `json:"vcenter_id,omitempty"`
}
