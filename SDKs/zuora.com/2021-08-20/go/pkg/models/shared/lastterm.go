package shared

import (
	"time"
)

type LastTermPeriodTypeEnum string

const (
	LastTermPeriodTypeEnumMonth LastTermPeriodTypeEnum = "Month"
	LastTermPeriodTypeEnumYear  LastTermPeriodTypeEnum = "Year"
	LastTermPeriodTypeEnumDay   LastTermPeriodTypeEnum = "Day"
	LastTermPeriodTypeEnumWeek  LastTermPeriodTypeEnum = "Week"
)

type LastTermTermTypeEnum string

const (
	LastTermTermTypeEnumTermed    LastTermTermTypeEnum = "TERMED"
	LastTermTermTypeEnumEvergreen LastTermTermTypeEnum = "EVERGREEN"
)

// LastTerm
// The length of the period for the current subscription term.
type LastTerm struct {
	Period     *int64                  `json:"period,omitempty"`
	PeriodType *LastTermPeriodTypeEnum `json:"periodType,omitempty"`
	StartDate  *time.Time              `json:"startDate,omitempty"`
	TermType   LastTermTermTypeEnum    `json:"termType"`
}
