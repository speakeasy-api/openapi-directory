package shared

type VerificationStatusReasonEnum string

const (
	VerificationStatusReasonEnumDataNotAvailable                                 VerificationStatusReasonEnum = "DATA_NOT_AVAILABLE"
	VerificationStatusReasonEnumAccountHolderMismatch                            VerificationStatusReasonEnum = "ACCOUNT_HOLDER_MISMATCH"
	VerificationStatusReasonEnumFullAccountNumberAndBankTransferCodeNotAvailable VerificationStatusReasonEnum = "FULL_ACCOUNT_NUMBER_AND_BANK_TRANSFER_CODE_NOT_AVAILABLE"
	VerificationStatusReasonEnumFullAccountNumberNotAvailable                    VerificationStatusReasonEnum = "FULL_ACCOUNT_NUMBER_NOT_AVAILABLE"
	VerificationStatusReasonEnumBankTransferCodeNotAvailable                     VerificationStatusReasonEnum = "BANK_TRANSFER_CODE_NOT_AVAILABLE"
	VerificationStatusReasonEnumExpired                                          VerificationStatusReasonEnum = "EXPIRED"
	VerificationStatusReasonEnumDataMismatch                                     VerificationStatusReasonEnum = "DATA_MISMATCH"
	VerificationStatusReasonEnumInstructionGenerationError                       VerificationStatusReasonEnum = "INSTRUCTION_GENERATION_ERROR"
)

type VerificationStatusVerificationStatusEnum string

const (
	VerificationStatusVerificationStatusEnumInitiated VerificationStatusVerificationStatusEnum = "INITIATED"
	VerificationStatusVerificationStatusEnumDeposited VerificationStatusVerificationStatusEnum = "DEPOSITED"
	VerificationStatusVerificationStatusEnumSuccess   VerificationStatusVerificationStatusEnum = "SUCCESS"
	VerificationStatusVerificationStatusEnumFailed    VerificationStatusVerificationStatusEnum = "FAILED"
)

type VerificationStatusVerificationTypeEnum string

const (
	VerificationStatusVerificationTypeEnumMatching         VerificationStatusVerificationTypeEnum = "MATCHING"
	VerificationStatusVerificationTypeEnumChallengeDeposit VerificationStatusVerificationTypeEnum = "CHALLENGE_DEPOSIT"
)

type VerificationStatus struct {
	Account            *VerificationAccount                      `json:"account,omitempty"`
	AccountID          *int64                                    `json:"accountId,omitempty"`
	ProviderAccountID  *int64                                    `json:"providerAccountId,omitempty"`
	Reason             *VerificationStatusReasonEnum             `json:"reason,omitempty"`
	RemainingAttempts  *int64                                    `json:"remainingAttempts,omitempty"`
	VerificationDate   *string                                   `json:"verificationDate,omitempty"`
	VerificationID     *int64                                    `json:"verificationId,omitempty"`
	VerificationStatus *VerificationStatusVerificationStatusEnum `json:"verificationStatus,omitempty"`
	VerificationType   *VerificationStatusVerificationTypeEnum   `json:"verificationType,omitempty"`
}
