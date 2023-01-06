package shared

type UpdateVerificationVerificationTypeEnum string

const (
	UpdateVerificationVerificationTypeEnumMatching         UpdateVerificationVerificationTypeEnum = "MATCHING"
	UpdateVerificationVerificationTypeEnumChallengeDeposit UpdateVerificationVerificationTypeEnum = "CHALLENGE_DEPOSIT"
)

type UpdateVerificationInput struct {
	Account           *VerificationAccount                    `json:"account,omitempty"`
	AccountID         *int64                                  `json:"accountId,omitempty"`
	ProviderAccountID *int64                                  `json:"providerAccountId,omitempty"`
	Transaction       []VerificationTransaction               `json:"transaction"`
	VerificationType  *UpdateVerificationVerificationTypeEnum `json:"verificationType,omitempty"`
}
