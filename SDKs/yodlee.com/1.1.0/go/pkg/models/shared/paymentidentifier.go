package shared

type PaymentIdentifierTypeEnum string

const (
	PaymentIdentifierTypeEnumReferenceNumber PaymentIdentifierTypeEnum = "REFERENCE_NUMBER"
	PaymentIdentifierTypeEnumPlatformCode    PaymentIdentifierTypeEnum = "PLATFORM_CODE"
)

type PaymentIdentifier struct {
	Type  *PaymentIdentifierTypeEnum `json:"type,omitempty"`
	Value *string                    `json:"value,omitempty"`
}
