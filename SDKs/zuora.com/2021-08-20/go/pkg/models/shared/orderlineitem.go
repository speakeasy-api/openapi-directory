package shared

import (
	"time"
)

type OrderLineItemItemStateEnum string

const (
	OrderLineItemItemStateEnumExecuting     OrderLineItemItemStateEnum = "Executing"
	OrderLineItemItemStateEnumSentToBilling OrderLineItemItemStateEnum = "SentToBilling"
	OrderLineItemItemStateEnumComplete      OrderLineItemItemStateEnum = "Complete"
	OrderLineItemItemStateEnumCancelled     OrderLineItemItemStateEnum = "Cancelled"
)

type OrderLineItemItemTypeEnum string

const (
	OrderLineItemItemTypeEnumProduct  OrderLineItemItemTypeEnum = "Product"
	OrderLineItemItemTypeEnumFee      OrderLineItemItemTypeEnum = "Fee"
	OrderLineItemItemTypeEnumServices OrderLineItemItemTypeEnum = "Services"
)

type OrderLineItemTaxModeEnum string

const (
	OrderLineItemTaxModeEnumTaxInclusive OrderLineItemTaxModeEnum = "TaxInclusive"
	OrderLineItemTaxModeEnumTaxExclusive OrderLineItemTaxModeEnum = "TaxExclusive"
)

type OrderLineItem struct {
	UOM                             *string                            `json:"UOM,omitempty"`
	AccountingCode                  *string                            `json:"accountingCode,omitempty"`
	AmountPerUnit                   *float64                           `json:"amountPerUnit,omitempty"`
	BillTargetDate                  *time.Time                         `json:"billTargetDate,omitempty"`
	CustomFields                    map[string]interface{}             `json:"customFields,omitempty"`
	DeferredRevenueAccountingCode   *string                            `json:"deferredRevenueAccountingCode,omitempty"`
	Description                     *string                            `json:"description,omitempty"`
	ItemName                        *string                            `json:"itemName,omitempty"`
	ItemNumber                      *string                            `json:"itemNumber,omitempty"`
	ItemState                       *OrderLineItemItemStateEnum        `json:"itemState,omitempty"`
	ItemType                        *OrderLineItemItemTypeEnum         `json:"itemType,omitempty"`
	ListPricePerUnit                *float64                           `json:"listPricePerUnit,omitempty"`
	ProductCode                     *string                            `json:"productCode,omitempty"`
	ProductRatePlanChargeID         *time.Time                         `json:"productRatePlanChargeId,omitempty"`
	PurchaseOrderNumber             *string                            `json:"purchaseOrderNumber,omitempty"`
	Quantity                        *float64                           `json:"quantity,omitempty"`
	RecognizedRevenueAccountingCode *string                            `json:"recognizedRevenueAccountingCode,omitempty"`
	RevenueRecognitionRule          *string                            `json:"revenueRecognitionRule,omitempty"`
	SoldTo                          *string                            `json:"soldTo,omitempty"`
	SoldToData                      *OrderContactRetrieveOrderLineItem `json:"soldToData,omitempty"`
	TaxCode                         *string                            `json:"taxCode,omitempty"`
	TaxMode                         *OrderLineItemTaxModeEnum          `json:"taxMode,omitempty"`
	TransactionDate                 *time.Time                         `json:"transactionDate,omitempty"`
}
