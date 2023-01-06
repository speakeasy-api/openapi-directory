package shared

import (
	"time"
)

type CreateOrderUpdateProductTriggerParamsTriggerEventEnum string

const (
	CreateOrderUpdateProductTriggerParamsTriggerEventEnumContractEffective  CreateOrderUpdateProductTriggerParamsTriggerEventEnum = "ContractEffective"
	CreateOrderUpdateProductTriggerParamsTriggerEventEnumServiceActivation  CreateOrderUpdateProductTriggerParamsTriggerEventEnum = "ServiceActivation"
	CreateOrderUpdateProductTriggerParamsTriggerEventEnumCustomerAcceptance CreateOrderUpdateProductTriggerParamsTriggerEventEnum = "CustomerAcceptance"
	CreateOrderUpdateProductTriggerParamsTriggerEventEnumSpecificDate       CreateOrderUpdateProductTriggerParamsTriggerEventEnum = "SpecificDate"
)

// CreateOrderUpdateProductTriggerParams
// Specifies when a charge becomes active.
type CreateOrderUpdateProductTriggerParams struct {
	SpecificTriggerDate *time.Time                                             `json:"specificTriggerDate,omitempty"`
	TriggerEvent        *CreateOrderUpdateProductTriggerParamsTriggerEventEnum `json:"triggerEvent,omitempty"`
}
