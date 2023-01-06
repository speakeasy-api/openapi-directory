package shared

import (
	"time"
)

// PostSubscriptionPreviewResponseTypeChargeMetrics
// Container for charge metrics.
type PostSubscriptionPreviewResponseTypeChargeMetrics struct {
	Dmrr                    *string `json:"dmrr,omitempty"`
	Dtcv                    *string `json:"dtcv,omitempty"`
	Mrr                     *string `json:"mrr,omitempty"`
	Number                  *string `json:"number,omitempty"`
	OriginRatePlanID        *string `json:"originRatePlanId,omitempty"`
	OriginalID              *string `json:"originalId,omitempty"`
	ProductRatePlanChargeID *string `json:"productRatePlanChargeId,omitempty"`
	ProductRatePlanID       *string `json:"productRatePlanId,omitempty"`
	Tcv                     *string `json:"tcv,omitempty"`
}

// PostSubscriptionPreviewResponseTypeCreditMemo
//
// Container for credit memos.
//
// **Note:** This container is only available if you set the Zuora REST API minor version to 207.0 or later in the request header, and you have  [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
type PostSubscriptionPreviewResponseTypeCreditMemo struct {
	Amount           *float64                                     `json:"amount,omitempty"`
	AmountWithoutTax *float64                                     `json:"amountWithoutTax,omitempty"`
	CreditMemoItems  []PostSubscriptionPreviewCreditMemoItemsType `json:"creditMemoItems,omitempty"`
	TaxAmount        *float64                                     `json:"taxAmount,omitempty"`
}

type PostSubscriptionPreviewResponseType struct {
	Amount               *float64                                          `json:"amount,omitempty"`
	AmountWithoutTax     *float64                                          `json:"amountWithoutTax,omitempty"`
	ChargeMetrics        *PostSubscriptionPreviewResponseTypeChargeMetrics `json:"chargeMetrics,omitempty"`
	ContractedMrr        *float64                                          `json:"contractedMrr,omitempty"`
	CreditMemo           *PostSubscriptionPreviewResponseTypeCreditMemo    `json:"creditMemo,omitempty"`
	Invoice              map[string]interface{}                            `json:"invoice,omitempty"`
	InvoiceItems         []PostSubscriptionPreviewInvoiceItemsType         `json:"invoiceItems,omitempty"`
	InvoiceTargetDate    *time.Time                                        `json:"invoiceTargetDate,omitempty"`
	Success              *bool                                             `json:"success,omitempty"`
	TargetDate           *time.Time                                        `json:"targetDate,omitempty"`
	TaxAmount            *float64                                          `json:"taxAmount,omitempty"`
	TotalContractedValue *float64                                          `json:"totalContractedValue,omitempty"`
}
