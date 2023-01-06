package shared

type BaseService struct {
	PortRanges []PortRange `json:"port_ranges,omitempty"`
	Protocol   *string     `json:"protocol,omitempty"`
}
