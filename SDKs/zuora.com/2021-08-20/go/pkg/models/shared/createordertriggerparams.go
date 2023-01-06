package shared

import (
	"time"
)

type CreateOrderTriggerParamsTriggerEventEnum string

const (
	CreateOrderTriggerParamsTriggerEventEnumContractEffective  CreateOrderTriggerParamsTriggerEventEnum = "ContractEffective"
	CreateOrderTriggerParamsTriggerEventEnumServiceActivation  CreateOrderTriggerParamsTriggerEventEnum = "ServiceActivation"
	CreateOrderTriggerParamsTriggerEventEnumCustomerAcceptance CreateOrderTriggerParamsTriggerEventEnum = "CustomerAcceptance"
	CreateOrderTriggerParamsTriggerEventEnumSpecificDate       CreateOrderTriggerParamsTriggerEventEnum = "SpecificDate"
)

// CreateOrderTriggerParams
// Specifies when a charge becomes active.
type CreateOrderTriggerParams struct {
	SpecificTriggerDate *time.Time                                `json:"specificTriggerDate,omitempty"`
	TriggerEvent        *CreateOrderTriggerParamsTriggerEventEnum `json:"triggerEvent,omitempty"`
}
