package shared

import (
	"time"
)

type InitialTermPeriodTypeEnum string

const (
	InitialTermPeriodTypeEnumMonth InitialTermPeriodTypeEnum = "Month"
	InitialTermPeriodTypeEnumYear  InitialTermPeriodTypeEnum = "Year"
	InitialTermPeriodTypeEnumDay   InitialTermPeriodTypeEnum = "Day"
	InitialTermPeriodTypeEnumWeek  InitialTermPeriodTypeEnum = "Week"
)

type InitialTermTermTypeEnum string

const (
	InitialTermTermTypeEnumTermed    InitialTermTermTypeEnum = "TERMED"
	InitialTermTermTypeEnumEvergreen InitialTermTermTypeEnum = "EVERGREEN"
)

// InitialTerm
// The length of the period for the current subscription term.
type InitialTerm struct {
	Period     *int64                     `json:"period,omitempty"`
	PeriodType *InitialTermPeriodTypeEnum `json:"periodType,omitempty"`
	StartDate  *time.Time                 `json:"startDate,omitempty"`
	TermType   InitialTermTermTypeEnum    `json:"termType"`
}
