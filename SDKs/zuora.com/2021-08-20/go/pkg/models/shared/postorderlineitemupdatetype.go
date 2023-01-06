package shared

import (
	"time"
)

type PostOrderLineItemUpdateTypeItemStateEnum string

const (
	PostOrderLineItemUpdateTypeItemStateEnumExecuting     PostOrderLineItemUpdateTypeItemStateEnum = "Executing"
	PostOrderLineItemUpdateTypeItemStateEnumSentToBilling PostOrderLineItemUpdateTypeItemStateEnum = "SentToBilling"
	PostOrderLineItemUpdateTypeItemStateEnumComplete      PostOrderLineItemUpdateTypeItemStateEnum = "Complete"
	PostOrderLineItemUpdateTypeItemStateEnumCancelled     PostOrderLineItemUpdateTypeItemStateEnum = "Cancelled"
)

type PostOrderLineItemUpdateTypeItemTypeEnum string

const (
	PostOrderLineItemUpdateTypeItemTypeEnumProduct  PostOrderLineItemUpdateTypeItemTypeEnum = "Product"
	PostOrderLineItemUpdateTypeItemTypeEnumFee      PostOrderLineItemUpdateTypeItemTypeEnum = "Fee"
	PostOrderLineItemUpdateTypeItemTypeEnumServices PostOrderLineItemUpdateTypeItemTypeEnum = "Services"
)

type PostOrderLineItemUpdateTypeTaxModeEnum string

const (
	PostOrderLineItemUpdateTypeTaxModeEnumTaxInclusive PostOrderLineItemUpdateTypeTaxModeEnum = "TaxInclusive"
	PostOrderLineItemUpdateTypeTaxModeEnumTaxExclusive PostOrderLineItemUpdateTypeTaxModeEnum = "TaxExclusive"
)

type PostOrderLineItemUpdateType struct {
	UOM                             *string                                   `json:"UOM,omitempty"`
	AccountingCode                  *string                                   `json:"accountingCode,omitempty"`
	AmountPerUnit                   *float64                                  `json:"amountPerUnit,omitempty"`
	BillTargetDate                  *time.Time                                `json:"billTargetDate,omitempty"`
	CustomFields                    map[string]interface{}                    `json:"customFields,omitempty"`
	DeferredRevenueAccountingCode   *string                                   `json:"deferredRevenueAccountingCode,omitempty"`
	Description                     *string                                   `json:"description,omitempty"`
	ItemName                        *string                                   `json:"itemName,omitempty"`
	ItemNumber                      *string                                   `json:"itemNumber,omitempty"`
	ItemState                       *PostOrderLineItemUpdateTypeItemStateEnum `json:"itemState,omitempty"`
	ItemType                        *PostOrderLineItemUpdateTypeItemTypeEnum  `json:"itemType,omitempty"`
	ListPricePerUnit                *float64                                  `json:"listPricePerUnit,omitempty"`
	ProductCode                     *string                                   `json:"productCode,omitempty"`
	PurchaseOrderNumber             *string                                   `json:"purchaseOrderNumber,omitempty"`
	Quantity                        *float64                                  `json:"quantity,omitempty"`
	RecognizedRevenueAccountingCode *string                                   `json:"recognizedRevenueAccountingCode,omitempty"`
	RevenueRecognitionRule          *string                                   `json:"revenueRecognitionRule,omitempty"`
	TaxCode                         *string                                   `json:"taxCode,omitempty"`
	TaxMode                         *PostOrderLineItemUpdateTypeTaxModeEnum   `json:"taxMode,omitempty"`
	TransactionDate                 *time.Time                                `json:"transactionDate,omitempty"`
}
