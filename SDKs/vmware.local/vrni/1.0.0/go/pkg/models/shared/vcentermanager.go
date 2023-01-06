package shared

type VCenterManager struct {
	Fqdn       *string      `json:"fqdn,omitempty"`
	IPAddress  *IPV4Address `json:"ip_address,omitempty"`
	NsxManager *Reference   `json:"nsx_manager,omitempty"`
	VM         *Reference   `json:"vm,omitempty"`
}
