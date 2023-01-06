package shared

type DistributedVirtualPortgroup struct {
	DistributedVirtualSwitch *Reference `json:"distributed_virtual_switch,omitempty"`
	VcenterManager           *Reference `json:"vcenter_manager,omitempty"`
	VendorID                 *string    `json:"vendor_id,omitempty"`
}
