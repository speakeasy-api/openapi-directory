package shared

type TaxDeclaration struct {
	ApprovedWithholdingVariationPercentage *float64              `json:"ApprovedWithholdingVariationPercentage,omitempty"`
	AustralianResidentForTaxPurposes       *bool                 `json:"AustralianResidentForTaxPurposes,omitempty"`
	EligibleToReceiveLeaveLoading          *bool                 `json:"EligibleToReceiveLeaveLoading,omitempty"`
	EmployeeID                             *string               `json:"EmployeeID,omitempty"`
	EmploymentBasis                        *EmploymentBasisEnum  `json:"EmploymentBasis,omitempty"`
	HasHELPDebt                            *bool                 `json:"HasHELPDebt,omitempty"`
	HasSFSSDebt                            *bool                 `json:"HasSFSSDebt,omitempty"`
	HasStudentStartupLoan                  *bool                 `json:"HasStudentStartupLoan,omitempty"`
	HasTradeSupportLoanDebt                *bool                 `json:"HasTradeSupportLoanDebt,omitempty"`
	ResidencyStatus                        *ResidencyStatusEnum  `json:"ResidencyStatus,omitempty"`
	TFNExemptionType                       *TfnExemptionTypeEnum `json:"TFNExemptionType,omitempty"`
	TaxFileNumber                          *string               `json:"TaxFileNumber,omitempty"`
	TaxFreeThresholdClaimed                *bool                 `json:"TaxFreeThresholdClaimed,omitempty"`
	TaxOffsetEstimatedAmount               *float64              `json:"TaxOffsetEstimatedAmount,omitempty"`
	UpdatedDateUTC                         *string               `json:"UpdatedDateUTC,omitempty"`
	UpwardVariationTaxWithholdingAmount    *float64              `json:"UpwardVariationTaxWithholdingAmount,omitempty"`
}

type TaxDeclarationInput struct {
	ApprovedWithholdingVariationPercentage *float64              `json:"ApprovedWithholdingVariationPercentage,omitempty"`
	AustralianResidentForTaxPurposes       *bool                 `json:"AustralianResidentForTaxPurposes,omitempty"`
	EligibleToReceiveLeaveLoading          *bool                 `json:"EligibleToReceiveLeaveLoading,omitempty"`
	EmployeeID                             *string               `json:"EmployeeID,omitempty"`
	EmploymentBasis                        *EmploymentBasisEnum  `json:"EmploymentBasis,omitempty"`
	HasHELPDebt                            *bool                 `json:"HasHELPDebt,omitempty"`
	HasSFSSDebt                            *bool                 `json:"HasSFSSDebt,omitempty"`
	HasStudentStartupLoan                  *bool                 `json:"HasStudentStartupLoan,omitempty"`
	HasTradeSupportLoanDebt                *bool                 `json:"HasTradeSupportLoanDebt,omitempty"`
	ResidencyStatus                        *ResidencyStatusEnum  `json:"ResidencyStatus,omitempty"`
	TFNExemptionType                       *TfnExemptionTypeEnum `json:"TFNExemptionType,omitempty"`
	TaxFileNumber                          *string               `json:"TaxFileNumber,omitempty"`
	TaxFreeThresholdClaimed                *bool                 `json:"TaxFreeThresholdClaimed,omitempty"`
	TaxOffsetEstimatedAmount               *float64              `json:"TaxOffsetEstimatedAmount,omitempty"`
	UpwardVariationTaxWithholdingAmount    *float64              `json:"UpwardVariationTaxWithholdingAmount,omitempty"`
}
