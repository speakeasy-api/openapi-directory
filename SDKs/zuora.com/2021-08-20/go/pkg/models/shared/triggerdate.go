package shared

import (
	"time"
)

type TriggerDateNameEnum string

const (
	TriggerDateNameEnumContractEffective  TriggerDateNameEnum = "ContractEffective"
	TriggerDateNameEnumServiceActivation  TriggerDateNameEnum = "ServiceActivation"
	TriggerDateNameEnumCustomerAcceptance TriggerDateNameEnum = "CustomerAcceptance"
)

type TriggerDate struct {
	Name        *TriggerDateNameEnum `json:"name,omitempty"`
	TriggerDate *time.Time           `json:"triggerDate,omitempty"`
}
