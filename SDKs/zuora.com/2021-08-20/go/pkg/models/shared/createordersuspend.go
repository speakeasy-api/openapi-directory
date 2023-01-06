package shared

import (
	"time"
)

type CreateOrderSuspendSuspendPeriodsTypeEnum string

const (
	CreateOrderSuspendSuspendPeriodsTypeEnumDay   CreateOrderSuspendSuspendPeriodsTypeEnum = "Day"
	CreateOrderSuspendSuspendPeriodsTypeEnumWeek  CreateOrderSuspendSuspendPeriodsTypeEnum = "Week"
	CreateOrderSuspendSuspendPeriodsTypeEnumMonth CreateOrderSuspendSuspendPeriodsTypeEnum = "Month"
	CreateOrderSuspendSuspendPeriodsTypeEnumYear  CreateOrderSuspendSuspendPeriodsTypeEnum = "Year"
)

type CreateOrderSuspendSuspendPolicyEnum string

const (
	CreateOrderSuspendSuspendPolicyEnumToday                  CreateOrderSuspendSuspendPolicyEnum = "Today"
	CreateOrderSuspendSuspendPolicyEnumEndOfLastInvoicePeriod CreateOrderSuspendSuspendPolicyEnum = "EndOfLastInvoicePeriod"
	CreateOrderSuspendSuspendPolicyEnumFixedPeriodsFromToday  CreateOrderSuspendSuspendPolicyEnum = "FixedPeriodsFromToday"
	CreateOrderSuspendSuspendPolicyEnumSpecificDate           CreateOrderSuspendSuspendPolicyEnum = "SpecificDate"
)

// CreateOrderSuspend
// Information about an order action of type `Suspend`.
type CreateOrderSuspend struct {
	SuspendPeriods      *int64                                    `json:"suspendPeriods,omitempty"`
	SuspendPeriodsType  *CreateOrderSuspendSuspendPeriodsTypeEnum `json:"suspendPeriodsType,omitempty"`
	SuspendPolicy       CreateOrderSuspendSuspendPolicyEnum       `json:"suspendPolicy"`
	SuspendSpecificDate *time.Time                                `json:"suspendSpecificDate,omitempty"`
}
