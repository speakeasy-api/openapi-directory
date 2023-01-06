package shared

type CoverageAmountLimitTypeEnum string

const (
	CoverageAmountLimitTypeEnumInNetwork  CoverageAmountLimitTypeEnum = "IN_NETWORK"
	CoverageAmountLimitTypeEnumOutNetwork CoverageAmountLimitTypeEnum = "OUT_NETWORK"
)

type CoverageAmountTypeEnum string

const (
	CoverageAmountTypeEnumDeductible     CoverageAmountTypeEnum = "DEDUCTIBLE"
	CoverageAmountTypeEnumOutOfPocket    CoverageAmountTypeEnum = "OUT_OF_POCKET"
	CoverageAmountTypeEnumAnnualBenefit  CoverageAmountTypeEnum = "ANNUAL_BENEFIT"
	CoverageAmountTypeEnumMaxBenefit     CoverageAmountTypeEnum = "MAX_BENEFIT"
	CoverageAmountTypeEnumCoverageAmount CoverageAmountTypeEnum = "COVERAGE_AMOUNT"
	CoverageAmountTypeEnumMonthlyBenefit CoverageAmountTypeEnum = "MONTHLY_BENEFIT"
	CoverageAmountTypeEnumOther          CoverageAmountTypeEnum = "OTHER"
)

type CoverageAmountUnitTypeEnum string

const (
	CoverageAmountUnitTypeEnumPerFamily CoverageAmountUnitTypeEnum = "PER_FAMILY"
	CoverageAmountUnitTypeEnumPerMember CoverageAmountUnitTypeEnum = "PER_MEMBER"
)

type CoverageAmount struct {
	Cover     *Money                       `json:"cover,omitempty"`
	LimitType *CoverageAmountLimitTypeEnum `json:"limitType,omitempty"`
	Met       *Money                       `json:"met,omitempty"`
	Type      *CoverageAmountTypeEnum      `json:"type,omitempty"`
	UnitType  *CoverageAmountUnitTypeEnum  `json:"unitType,omitempty"`
}
