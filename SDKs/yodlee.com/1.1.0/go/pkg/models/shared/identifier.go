package shared

type IdentifierTypeEnum string

const (
	IdentifierTypeEnumNie    IdentifierTypeEnum = "NIE"
	IdentifierTypeEnumDni    IdentifierTypeEnum = "DNI"
	IdentifierTypeEnumEin    IdentifierTypeEnum = "EIN"
	IdentifierTypeEnumBn     IdentifierTypeEnum = "BN"
	IdentifierTypeEnumAadhar IdentifierTypeEnum = "AADHAR"
	IdentifierTypeEnumNin    IdentifierTypeEnum = "NIN"
	IdentifierTypeEnumNric   IdentifierTypeEnum = "NRIC"
)

type Identifier struct {
	Type  *IdentifierTypeEnum `json:"type,omitempty"`
	Value *string             `json:"value,omitempty"`
}
