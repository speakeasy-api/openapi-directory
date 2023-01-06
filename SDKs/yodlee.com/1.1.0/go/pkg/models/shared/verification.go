package shared

type VerificationVerificationTypeEnum string

const (
	VerificationVerificationTypeEnumMatching         VerificationVerificationTypeEnum = "MATCHING"
	VerificationVerificationTypeEnumChallengeDeposit VerificationVerificationTypeEnum = "CHALLENGE_DEPOSIT"
)

type VerificationReasonEnum string

const (
	VerificationReasonEnumDataNotAvailable                                 VerificationReasonEnum = "DATA_NOT_AVAILABLE"
	VerificationReasonEnumAccountHolderMismatch                            VerificationReasonEnum = "ACCOUNT_HOLDER_MISMATCH"
	VerificationReasonEnumFullAccountNumberAndBankTransferCodeNotAvailable VerificationReasonEnum = "FULL_ACCOUNT_NUMBER_AND_BANK_TRANSFER_CODE_NOT_AVAILABLE"
	VerificationReasonEnumFullAccountNumberNotAvailable                    VerificationReasonEnum = "FULL_ACCOUNT_NUMBER_NOT_AVAILABLE"
	VerificationReasonEnumBankTransferCodeNotAvailable                     VerificationReasonEnum = "BANK_TRANSFER_CODE_NOT_AVAILABLE"
	VerificationReasonEnumExpired                                          VerificationReasonEnum = "EXPIRED"
	VerificationReasonEnumDataMismatch                                     VerificationReasonEnum = "DATA_MISMATCH"
	VerificationReasonEnumInstructionGenerationError                       VerificationReasonEnum = "INSTRUCTION_GENERATION_ERROR"
)

type VerificationVerificationStatusEnum string

const (
	VerificationVerificationStatusEnumInitiated VerificationVerificationStatusEnum = "INITIATED"
	VerificationVerificationStatusEnumDeposited VerificationVerificationStatusEnum = "DEPOSITED"
	VerificationVerificationStatusEnumSuccess   VerificationVerificationStatusEnum = "SUCCESS"
	VerificationVerificationStatusEnumFailed    VerificationVerificationStatusEnum = "FAILED"
)

type VerificationInput struct {
	Account           *VerificationAccount              `json:"account,omitempty"`
	AccountID         *int64                            `json:"accountId,omitempty"`
	ProviderAccountID *int64                            `json:"providerAccountId,omitempty"`
	VerificationType  *VerificationVerificationTypeEnum `json:"verificationType,omitempty"`
}

type Verification struct {
	Account            *VerificationAccount                `json:"account,omitempty"`
	AccountID          *int64                              `json:"accountId,omitempty"`
	ProviderAccountID  *int64                              `json:"providerAccountId,omitempty"`
	Reason             *VerificationReasonEnum             `json:"reason,omitempty"`
	VerificationDate   *string                             `json:"verificationDate,omitempty"`
	VerificationID     *int64                              `json:"verificationId,omitempty"`
	VerificationStatus *VerificationVerificationStatusEnum `json:"verificationStatus,omitempty"`
	VerificationType   *VerificationVerificationTypeEnum   `json:"verificationType,omitempty"`
}
