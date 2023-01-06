package shared

import (
	"time"
)

type OrderLineItemCommonPostOrderItemStateEnum string

const (
	OrderLineItemCommonPostOrderItemStateEnumExecuting     OrderLineItemCommonPostOrderItemStateEnum = "Executing"
	OrderLineItemCommonPostOrderItemStateEnumSentToBilling OrderLineItemCommonPostOrderItemStateEnum = "SentToBilling"
	OrderLineItemCommonPostOrderItemStateEnumComplete      OrderLineItemCommonPostOrderItemStateEnum = "Complete"
	OrderLineItemCommonPostOrderItemStateEnumCancelled     OrderLineItemCommonPostOrderItemStateEnum = "Cancelled"
)

type OrderLineItemCommonPostOrderItemTypeEnum string

const (
	OrderLineItemCommonPostOrderItemTypeEnumProduct  OrderLineItemCommonPostOrderItemTypeEnum = "Product"
	OrderLineItemCommonPostOrderItemTypeEnumFee      OrderLineItemCommonPostOrderItemTypeEnum = "Fee"
	OrderLineItemCommonPostOrderItemTypeEnumServices OrderLineItemCommonPostOrderItemTypeEnum = "Services"
)

type OrderLineItemCommonPostOrderTaxModeEnum string

const (
	OrderLineItemCommonPostOrderTaxModeEnumTaxInclusive OrderLineItemCommonPostOrderTaxModeEnum = "TaxInclusive"
	OrderLineItemCommonPostOrderTaxModeEnumTaxExclusive OrderLineItemCommonPostOrderTaxModeEnum = "TaxExclusive"
)

type OrderLineItemCommonPostOrder struct {
	UOM                             *string                                    `json:"UOM,omitempty"`
	AmountPerUnit                   *float64                                   `json:"amountPerUnit,omitempty"`
	BillTargetDate                  *time.Time                                 `json:"billTargetDate,omitempty"`
	CustomFields                    map[string]interface{}                     `json:"customFields,omitempty"`
	DeferredRevenueAccountingCode   *string                                    `json:"deferredRevenueAccountingCode,omitempty"`
	Description                     *string                                    `json:"description,omitempty"`
	ItemName                        *string                                    `json:"itemName,omitempty"`
	ItemState                       *OrderLineItemCommonPostOrderItemStateEnum `json:"itemState,omitempty"`
	ItemType                        *OrderLineItemCommonPostOrderItemTypeEnum  `json:"itemType,omitempty"`
	ListPricePerUnit                *float64                                   `json:"listPricePerUnit,omitempty"`
	ProductCode                     *string                                    `json:"productCode,omitempty"`
	ProductRatePlanChargeID         *time.Time                                 `json:"productRatePlanChargeId,omitempty"`
	PurchaseOrderNumber             *string                                    `json:"purchaseOrderNumber,omitempty"`
	Quantity                        *float64                                   `json:"quantity,omitempty"`
	RecognizedRevenueAccountingCode *string                                    `json:"recognizedRevenueAccountingCode,omitempty"`
	RevenueRecognitionRule          *string                                    `json:"revenueRecognitionRule,omitempty"`
	SoldTo                          *string                                    `json:"soldTo,omitempty"`
	SoldToData                      *OrderContact                              `json:"soldToData,omitempty"`
	TaxCode                         *string                                    `json:"taxCode,omitempty"`
	TaxMode                         *OrderLineItemCommonPostOrderTaxModeEnum   `json:"taxMode,omitempty"`
	TransactionDate                 *time.Time                                 `json:"transactionDate,omitempty"`
}
