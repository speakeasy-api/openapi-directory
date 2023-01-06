package shared

type AccountHolderOwnershipEnum string

const (
	AccountHolderOwnershipEnumPrimary         AccountHolderOwnershipEnum = "PRIMARY"
	AccountHolderOwnershipEnumSecondary       AccountHolderOwnershipEnum = "SECONDARY"
	AccountHolderOwnershipEnumCustodian       AccountHolderOwnershipEnum = "CUSTODIAN"
	AccountHolderOwnershipEnumOthers          AccountHolderOwnershipEnum = "OTHERS"
	AccountHolderOwnershipEnumPowerOfAttorney AccountHolderOwnershipEnum = "POWER_OF_ATTORNEY"
	AccountHolderOwnershipEnumTrustee         AccountHolderOwnershipEnum = "TRUSTEE"
	AccountHolderOwnershipEnumJointOwner      AccountHolderOwnershipEnum = "JOINT_OWNER"
	AccountHolderOwnershipEnumBeneficiary     AccountHolderOwnershipEnum = "BENEFICIARY"
	AccountHolderOwnershipEnumAas             AccountHolderOwnershipEnum = "AAS"
	AccountHolderOwnershipEnumBusiness        AccountHolderOwnershipEnum = "BUSINESS"
	AccountHolderOwnershipEnumDba             AccountHolderOwnershipEnum = "DBA"
	AccountHolderOwnershipEnumTrust           AccountHolderOwnershipEnum = "TRUST"
)

type AccountHolder struct {
	Gender     *string                     `json:"gender,omitempty"`
	Identifier []Identifier                `json:"identifier,omitempty"`
	Name       *Name                       `json:"name,omitempty"`
	Ownership  *AccountHolderOwnershipEnum `json:"ownership,omitempty"`
}
