package shared

type BaseVirtualMachine struct {
	DefaultGateway           *string       `json:"default_gateway,omitempty"`
	DestinationFirewallRules []RuleSet     `json:"destination_firewall_rules,omitempty"`
	IPAddresses              []IPV4Address `json:"ip_addresses,omitempty"`
	IPSets                   []Reference   `json:"ip_sets,omitempty"`
	SecurityGroups           []Reference   `json:"security_groups,omitempty"`
	SourceFirewallRules      []RuleSet     `json:"source_firewall_rules,omitempty"`
	Vnics                    []Reference   `json:"vnics,omitempty"`
}
