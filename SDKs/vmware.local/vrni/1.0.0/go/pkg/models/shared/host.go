package shared

type Host struct {
	Cluster         *Reference  `json:"cluster,omitempty"`
	ConnectionState *string     `json:"connection_state,omitempty"`
	Datastores      []Reference `json:"datastores,omitempty"`
	MaintenanceMode *string     `json:"maintenance_mode,omitempty"`
	NsxManager      *Reference  `json:"nsx_manager,omitempty"`
	ServiceTag      *string     `json:"service_tag,omitempty"`
	VcenterManager  *Reference  `json:"vcenter_manager,omitempty"`
	VendorID        *string     `json:"vendor_id,omitempty"`
	VMCount         *int32      `json:"vm_count,omitempty"`
	Vmknics         []Reference `json:"vmknics,omitempty"`
}
