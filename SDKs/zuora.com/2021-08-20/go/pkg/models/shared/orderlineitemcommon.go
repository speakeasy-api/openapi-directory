package shared

import (
	"time"
)

type OrderLineItemCommonItemStateEnum string

const (
	OrderLineItemCommonItemStateEnumExecuting     OrderLineItemCommonItemStateEnum = "Executing"
	OrderLineItemCommonItemStateEnumSentToBilling OrderLineItemCommonItemStateEnum = "SentToBilling"
	OrderLineItemCommonItemStateEnumComplete      OrderLineItemCommonItemStateEnum = "Complete"
	OrderLineItemCommonItemStateEnumCancelled     OrderLineItemCommonItemStateEnum = "Cancelled"
)

type OrderLineItemCommonItemTypeEnum string

const (
	OrderLineItemCommonItemTypeEnumProduct  OrderLineItemCommonItemTypeEnum = "Product"
	OrderLineItemCommonItemTypeEnumFee      OrderLineItemCommonItemTypeEnum = "Fee"
	OrderLineItemCommonItemTypeEnumServices OrderLineItemCommonItemTypeEnum = "Services"
)

type OrderLineItemCommonTaxModeEnum string

const (
	OrderLineItemCommonTaxModeEnumTaxInclusive OrderLineItemCommonTaxModeEnum = "TaxInclusive"
	OrderLineItemCommonTaxModeEnumTaxExclusive OrderLineItemCommonTaxModeEnum = "TaxExclusive"
)

type OrderLineItemCommon struct {
	UOM                             *string                           `json:"UOM,omitempty"`
	AccountingCode                  *string                           `json:"accountingCode,omitempty"`
	AmountPerUnit                   *float64                          `json:"amountPerUnit,omitempty"`
	BillTargetDate                  *time.Time                        `json:"billTargetDate,omitempty"`
	CustomFields                    map[string]interface{}            `json:"customFields,omitempty"`
	DeferredRevenueAccountingCode   *string                           `json:"deferredRevenueAccountingCode,omitempty"`
	Description                     *string                           `json:"description,omitempty"`
	ItemName                        *string                           `json:"itemName,omitempty"`
	ItemNumber                      *string                           `json:"itemNumber,omitempty"`
	ItemState                       *OrderLineItemCommonItemStateEnum `json:"itemState,omitempty"`
	ItemType                        *OrderLineItemCommonItemTypeEnum  `json:"itemType,omitempty"`
	ListPricePerUnit                *float64                          `json:"listPricePerUnit,omitempty"`
	ProductCode                     *string                           `json:"productCode,omitempty"`
	PurchaseOrderNumber             *string                           `json:"purchaseOrderNumber,omitempty"`
	Quantity                        *float64                          `json:"quantity,omitempty"`
	RecognizedRevenueAccountingCode *string                           `json:"recognizedRevenueAccountingCode,omitempty"`
	RevenueRecognitionRule          *string                           `json:"revenueRecognitionRule,omitempty"`
	TaxCode                         *string                           `json:"taxCode,omitempty"`
	TaxMode                         *OrderLineItemCommonTaxModeEnum   `json:"taxMode,omitempty"`
	TransactionDate                 *time.Time                        `json:"transactionDate,omitempty"`
}
