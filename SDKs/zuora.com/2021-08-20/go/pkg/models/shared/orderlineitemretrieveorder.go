package shared

import (
	"time"
)

type OrderLineItemRetrieveOrderItemStateEnum string

const (
	OrderLineItemRetrieveOrderItemStateEnumExecuting     OrderLineItemRetrieveOrderItemStateEnum = "Executing"
	OrderLineItemRetrieveOrderItemStateEnumSentToBilling OrderLineItemRetrieveOrderItemStateEnum = "SentToBilling"
	OrderLineItemRetrieveOrderItemStateEnumComplete      OrderLineItemRetrieveOrderItemStateEnum = "Complete"
	OrderLineItemRetrieveOrderItemStateEnumCancelled     OrderLineItemRetrieveOrderItemStateEnum = "Cancelled"
)

type OrderLineItemRetrieveOrderItemTypeEnum string

const (
	OrderLineItemRetrieveOrderItemTypeEnumProduct  OrderLineItemRetrieveOrderItemTypeEnum = "Product"
	OrderLineItemRetrieveOrderItemTypeEnumFee      OrderLineItemRetrieveOrderItemTypeEnum = "Fee"
	OrderLineItemRetrieveOrderItemTypeEnumServices OrderLineItemRetrieveOrderItemTypeEnum = "Services"
)

type OrderLineItemRetrieveOrderTaxModeEnum string

const (
	OrderLineItemRetrieveOrderTaxModeEnumTaxInclusive OrderLineItemRetrieveOrderTaxModeEnum = "TaxInclusive"
	OrderLineItemRetrieveOrderTaxModeEnumTaxExclusive OrderLineItemRetrieveOrderTaxModeEnum = "TaxExclusive"
)

type OrderLineItemRetrieveOrder struct {
	UOM                             *string                                  `json:"UOM,omitempty"`
	Amount                          *float64                                 `json:"amount,omitempty"`
	AmountPerUnit                   *float64                                 `json:"amountPerUnit,omitempty"`
	BillTargetDate                  *time.Time                               `json:"billTargetDate,omitempty"`
	CustomFields                    map[string]interface{}                   `json:"customFields,omitempty"`
	DeferredRevenueAccountingCode   *string                                  `json:"deferredRevenueAccountingCode,omitempty"`
	Description                     *string                                  `json:"description,omitempty"`
	ID                              *string                                  `json:"id,omitempty"`
	ItemName                        *string                                  `json:"itemName,omitempty"`
	ItemNumber                      *string                                  `json:"itemNumber,omitempty"`
	ItemState                       *OrderLineItemRetrieveOrderItemStateEnum `json:"itemState,omitempty"`
	ItemType                        *OrderLineItemRetrieveOrderItemTypeEnum  `json:"itemType,omitempty"`
	ListPricePerUnit                *float64                                 `json:"listPricePerUnit,omitempty"`
	ProductCode                     *string                                  `json:"productCode,omitempty"`
	ProductRatePlanChargeID         *time.Time                               `json:"productRatePlanChargeId,omitempty"`
	PurchaseOrderNumber             *string                                  `json:"purchaseOrderNumber,omitempty"`
	Quantity                        *float64                                 `json:"quantity,omitempty"`
	RecognizedRevenueAccountingCode *string                                  `json:"recognizedRevenueAccountingCode,omitempty"`
	RevenueRecognitionRule          *string                                  `json:"revenueRecognitionRule,omitempty"`
	SoldTo                          *string                                  `json:"soldTo,omitempty"`
	SoldToData                      *OrderContactRetrieveOrder               `json:"soldToData,omitempty"`
	TaxCode                         *string                                  `json:"taxCode,omitempty"`
	TaxMode                         *OrderLineItemRetrieveOrderTaxModeEnum   `json:"taxMode,omitempty"`
	TransactionDate                 *time.Time                               `json:"transactionDate,omitempty"`
}
