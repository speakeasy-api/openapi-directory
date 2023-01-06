package shared

type DistributedVirtualSwitch struct {
	Hosts          []Reference `json:"hosts,omitempty"`
	VcenterManager *Reference  `json:"vcenter_manager,omitempty"`
	VendorID       *string     `json:"vendor_id,omitempty"`
}
