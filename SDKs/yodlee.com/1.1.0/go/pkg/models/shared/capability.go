package shared

type CapabilityContainerEnum string

const (
	CapabilityContainerEnumBank             CapabilityContainerEnum = "bank"
	CapabilityContainerEnumCreditCard       CapabilityContainerEnum = "creditCard"
	CapabilityContainerEnumInvestment       CapabilityContainerEnum = "investment"
	CapabilityContainerEnumInsurance        CapabilityContainerEnum = "insurance"
	CapabilityContainerEnumLoan             CapabilityContainerEnum = "loan"
	CapabilityContainerEnumReward           CapabilityContainerEnum = "reward"
	CapabilityContainerEnumRealEstate       CapabilityContainerEnum = "realEstate"
	CapabilityContainerEnumOtherAssets      CapabilityContainerEnum = "otherAssets"
	CapabilityContainerEnumOtherLiabilities CapabilityContainerEnum = "otherLiabilities"
)

type Capability struct {
	Container []CapabilityContainerEnum `json:"container,omitempty"`
	Name      *string                   `json:"name,omitempty"`
}
