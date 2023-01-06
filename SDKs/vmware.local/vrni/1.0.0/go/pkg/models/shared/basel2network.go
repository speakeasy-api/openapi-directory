package shared

type BaseL2Network struct {
	Gateways         []string `json:"gateways,omitempty"`
	NetworkAddresses []string `json:"network_addresses,omitempty"`
}
