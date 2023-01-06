package shared

type NsxvManagerDataSourceRequest struct {
	CentralCliEnabled *bool               `json:"central_cli_enabled,omitempty"`
	Credentials       PasswordCredentials `json:"credentials"`
	IpfixEnabled      *bool               `json:"ipfix_enabled,omitempty"`
	VcenterID         string              `json:"vcenter_id"`
}
