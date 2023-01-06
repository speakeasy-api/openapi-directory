package shared

type RenewalTermPeriodTypeEnum string

const (
	RenewalTermPeriodTypeEnumMonth RenewalTermPeriodTypeEnum = "Month"
	RenewalTermPeriodTypeEnumYear  RenewalTermPeriodTypeEnum = "Year"
	RenewalTermPeriodTypeEnumDay   RenewalTermPeriodTypeEnum = "Day"
	RenewalTermPeriodTypeEnumWeek  RenewalTermPeriodTypeEnum = "Week"
)

type RenewalTerm struct {
	Period     *int64                     `json:"period,omitempty"`
	PeriodType *RenewalTermPeriodTypeEnum `json:"periodType,omitempty"`
}
