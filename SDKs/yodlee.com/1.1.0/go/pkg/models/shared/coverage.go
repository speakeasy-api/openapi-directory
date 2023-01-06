package shared

type CoveragePlanTypeEnum string

const (
	CoveragePlanTypeEnumPpo     CoveragePlanTypeEnum = "PPO"
	CoveragePlanTypeEnumHmo     CoveragePlanTypeEnum = "HMO"
	CoveragePlanTypeEnumUnknown CoveragePlanTypeEnum = "UNKNOWN"
)

type CoverageTypeEnum string

const (
	CoverageTypeEnumVision                        CoverageTypeEnum = "VISION"
	CoverageTypeEnumDental                        CoverageTypeEnum = "DENTAL"
	CoverageTypeEnumMedical                       CoverageTypeEnum = "MEDICAL"
	CoverageTypeEnumHealth                        CoverageTypeEnum = "HEALTH"
	CoverageTypeEnumDeathCover                    CoverageTypeEnum = "DEATH_COVER"
	CoverageTypeEnumTotalPermanentDisability      CoverageTypeEnum = "TOTAL_PERMANENT_DISABILITY"
	CoverageTypeEnumAccidentalDeathCover          CoverageTypeEnum = "ACCIDENTAL_DEATH_COVER"
	CoverageTypeEnumIncomeProtection              CoverageTypeEnum = "INCOME_PROTECTION"
	CoverageTypeEnumDeathTotalPermanentDisability CoverageTypeEnum = "DEATH_TOTAL_PERMANENT_DISABILITY"
	CoverageTypeEnumOther                         CoverageTypeEnum = "OTHER"
)

type Coverage struct {
	Amount    []CoverageAmount      `json:"amount,omitempty"`
	EndDate   *string               `json:"endDate,omitempty"`
	PlanType  *CoveragePlanTypeEnum `json:"planType,omitempty"`
	StartDate *string               `json:"startDate,omitempty"`
	Type      *CoverageTypeEnum     `json:"type,omitempty"`
}
