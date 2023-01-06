package shared

type Vmknic struct {
	Host          *Reference    `json:"host,omitempty"`
	IPAddresses   []IPV4Address `json:"ip_addresses,omitempty"`
	Layer2Network *Reference    `json:"layer2_network,omitempty"`
	Vlan          *Vlan         `json:"vlan,omitempty"`
}
