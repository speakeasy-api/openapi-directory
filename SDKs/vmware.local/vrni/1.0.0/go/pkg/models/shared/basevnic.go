package shared

type BaseVnic struct {
	IPAddresses   []IPV4Address `json:"ip_addresses,omitempty"`
	Layer2Network *Reference    `json:"layer2_network,omitempty"`
	Vlan          *Vlan         `json:"vlan,omitempty"`
	VM            *Reference    `json:"vm,omitempty"`
}
