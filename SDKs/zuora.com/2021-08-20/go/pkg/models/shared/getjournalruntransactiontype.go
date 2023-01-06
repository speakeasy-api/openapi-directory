package shared

type GetJournalRunTransactionTypeTypeEnum string

const (
	GETJournalRunTransactionTypeTypeEnumInvoiceItem                                       GetJournalRunTransactionTypeTypeEnum = "Invoice Item"
	GETJournalRunTransactionTypeTypeEnumTaxationItem                                      GetJournalRunTransactionTypeTypeEnum = "Taxation Item"
	GETJournalRunTransactionTypeTypeEnumInvoiceItemAdjustmentInvoice                      GetJournalRunTransactionTypeTypeEnum = "Invoice Item Adjustment (Invoice)"
	GETJournalRunTransactionTypeTypeEnumInvoiceItemAdjustmentTax                          GetJournalRunTransactionTypeTypeEnum = "Invoice Item Adjustment (Tax)"
	GETJournalRunTransactionTypeTypeEnumInvoiceAdjustment                                 GetJournalRunTransactionTypeTypeEnum = "Invoice Adjustment"
	GETJournalRunTransactionTypeTypeEnumElectronicPayment                                 GetJournalRunTransactionTypeTypeEnum = "Electronic Payment"
	GETJournalRunTransactionTypeTypeEnumExternalPayment                                   GetJournalRunTransactionTypeTypeEnum = "External Payment"
	GETJournalRunTransactionTypeTypeEnumElectronicRefund                                  GetJournalRunTransactionTypeTypeEnum = "Electronic Refund"
	GETJournalRunTransactionTypeTypeEnumExternalRefund                                    GetJournalRunTransactionTypeTypeEnum = "External Refund"
	GETJournalRunTransactionTypeTypeEnumElectronicCreditBalancePayment                    GetJournalRunTransactionTypeTypeEnum = "Electronic Credit Balance Payment"
	GETJournalRunTransactionTypeTypeEnumExternalCreditBalancePayment                      GetJournalRunTransactionTypeTypeEnum = "External Credit Balance Payment"
	GETJournalRunTransactionTypeTypeEnumElectronicCreditBalanceRefund                     GetJournalRunTransactionTypeTypeEnum = "Electronic Credit Balance Refund"
	GETJournalRunTransactionTypeTypeEnumExternalCreditBalanceRefund                       GetJournalRunTransactionTypeTypeEnum = "External Credit Balance Refund"
	GETJournalRunTransactionTypeTypeEnumCreditBalanceAdjustmentAppliedFromCreditBalance   GetJournalRunTransactionTypeTypeEnum = "Credit Balance Adjustment (Applied from Credit Balance)"
	GETJournalRunTransactionTypeTypeEnumCreditBalanceAdjustmentTransferredToCreditBalance GetJournalRunTransactionTypeTypeEnum = "Credit Balance Adjustment (Transferred to Credit Balance)"
	GETJournalRunTransactionTypeTypeEnumRevenueEventItem                                  GetJournalRunTransactionTypeTypeEnum = "Revenue Event Item"
	GETJournalRunTransactionTypeTypeEnumDebitMemoItemCharge                               GetJournalRunTransactionTypeTypeEnum = "Debit Memo Item (Charge)"
	GETJournalRunTransactionTypeTypeEnumDebitMemoItemTax                                  GetJournalRunTransactionTypeTypeEnum = "Debit Memo Item (Tax)"
	GETJournalRunTransactionTypeTypeEnumCreditMemoItemCharge                              GetJournalRunTransactionTypeTypeEnum = "Credit Memo Item (Charge)"
	GETJournalRunTransactionTypeTypeEnumCreditMemoItemTax                                 GetJournalRunTransactionTypeTypeEnum = "Credit Memo Item (Tax)"
	GETJournalRunTransactionTypeTypeEnumCreditMemoApplicationItem                         GetJournalRunTransactionTypeTypeEnum = "Credit Memo Application Item"
	GETJournalRunTransactionTypeTypeEnumElectronicPaymentApplication                      GetJournalRunTransactionTypeTypeEnum = "Electronic Payment Application"
	GETJournalRunTransactionTypeTypeEnumExternalPaymentApplication                        GetJournalRunTransactionTypeTypeEnum = "External Payment Application"
	GETJournalRunTransactionTypeTypeEnumElectronicRefundApplication                       GetJournalRunTransactionTypeTypeEnum = "Electronic Refund Application"
	GETJournalRunTransactionTypeTypeEnumExternalRefundApplication                         GetJournalRunTransactionTypeTypeEnum = "External Refund Application"
	GETJournalRunTransactionTypeTypeEnumElectronicPaymentApplicationItem                  GetJournalRunTransactionTypeTypeEnum = "Electronic Payment Application Item"
	GETJournalRunTransactionTypeTypeEnumExternalPaymentApplicationItem                    GetJournalRunTransactionTypeTypeEnum = "External Payment Application Item"
	GETJournalRunTransactionTypeTypeEnumElectronicRefundApplicationItem                   GetJournalRunTransactionTypeTypeEnum = "Electronic Refund Application Item"
	GETJournalRunTransactionTypeTypeEnumExternalRefundApplicationItem                     GetJournalRunTransactionTypeTypeEnum = "External Refund Application Item"
)

type GetJournalRunTransactionType struct {
	Type *GetJournalRunTransactionTypeTypeEnum `json:"type,omitempty"`
}
