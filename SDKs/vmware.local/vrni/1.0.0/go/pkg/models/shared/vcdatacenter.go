package shared

type VcDatacenter struct {
	VcenterManager *Reference `json:"vcenter_manager,omitempty"`
	VendorID       *string    `json:"vendor_id,omitempty"`
}
