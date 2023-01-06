package shared

type PostJournalRunTransactionTypeTypeEnum string

const (
	POSTJournalRunTransactionTypeTypeEnumInvoiceItem                                       PostJournalRunTransactionTypeTypeEnum = "Invoice Item"
	POSTJournalRunTransactionTypeTypeEnumTaxationItem                                      PostJournalRunTransactionTypeTypeEnum = "Taxation Item"
	POSTJournalRunTransactionTypeTypeEnumInvoiceItemAdjustmentInvoice                      PostJournalRunTransactionTypeTypeEnum = "Invoice Item Adjustment (Invoice)"
	POSTJournalRunTransactionTypeTypeEnumInvoiceItemAdjustmentTax                          PostJournalRunTransactionTypeTypeEnum = "Invoice Item Adjustment (Tax)"
	POSTJournalRunTransactionTypeTypeEnumInvoiceAdjustment                                 PostJournalRunTransactionTypeTypeEnum = "Invoice Adjustment"
	POSTJournalRunTransactionTypeTypeEnumElectronicPayment                                 PostJournalRunTransactionTypeTypeEnum = "Electronic Payment"
	POSTJournalRunTransactionTypeTypeEnumExternalPayment                                   PostJournalRunTransactionTypeTypeEnum = "External Payment"
	POSTJournalRunTransactionTypeTypeEnumElectronicRefund                                  PostJournalRunTransactionTypeTypeEnum = "Electronic Refund"
	POSTJournalRunTransactionTypeTypeEnumExternalRefund                                    PostJournalRunTransactionTypeTypeEnum = "External Refund"
	POSTJournalRunTransactionTypeTypeEnumElectronicCreditBalancePayment                    PostJournalRunTransactionTypeTypeEnum = "Electronic Credit Balance Payment"
	POSTJournalRunTransactionTypeTypeEnumExternalCreditBalancePayment                      PostJournalRunTransactionTypeTypeEnum = "External Credit Balance Payment"
	POSTJournalRunTransactionTypeTypeEnumElectronicCreditBalanceRefund                     PostJournalRunTransactionTypeTypeEnum = "Electronic Credit Balance Refund"
	POSTJournalRunTransactionTypeTypeEnumExternalCreditBalanceRefund                       PostJournalRunTransactionTypeTypeEnum = "External Credit Balance Refund"
	POSTJournalRunTransactionTypeTypeEnumCreditBalanceAdjustmentAppliedFromCreditBalance   PostJournalRunTransactionTypeTypeEnum = "Credit Balance Adjustment (Applied from Credit Balance)"
	POSTJournalRunTransactionTypeTypeEnumCreditBalanceAdjustmentTransferredToCreditBalance PostJournalRunTransactionTypeTypeEnum = "Credit Balance Adjustment (Transferred to Credit Balance)"
	POSTJournalRunTransactionTypeTypeEnumRevenueEventItem                                  PostJournalRunTransactionTypeTypeEnum = "Revenue Event Item"
	POSTJournalRunTransactionTypeTypeEnumDebitMemoItemCharge                               PostJournalRunTransactionTypeTypeEnum = "Debit Memo Item (Charge)"
	POSTJournalRunTransactionTypeTypeEnumDebitMemoItemTax                                  PostJournalRunTransactionTypeTypeEnum = "Debit Memo Item (Tax)"
	POSTJournalRunTransactionTypeTypeEnumCreditMemoItemCharge                              PostJournalRunTransactionTypeTypeEnum = "Credit Memo Item (Charge)"
	POSTJournalRunTransactionTypeTypeEnumCreditMemoItemTax                                 PostJournalRunTransactionTypeTypeEnum = "Credit Memo Item (Tax)"
	POSTJournalRunTransactionTypeTypeEnumCreditMemoApplicationItem                         PostJournalRunTransactionTypeTypeEnum = "Credit Memo Application Item"
	POSTJournalRunTransactionTypeTypeEnumElectronicPaymentApplication                      PostJournalRunTransactionTypeTypeEnum = "Electronic Payment Application"
	POSTJournalRunTransactionTypeTypeEnumExternalPaymentApplication                        PostJournalRunTransactionTypeTypeEnum = "External Payment Application"
	POSTJournalRunTransactionTypeTypeEnumElectronicRefundApplication                       PostJournalRunTransactionTypeTypeEnum = "Electronic Refund Application"
	POSTJournalRunTransactionTypeTypeEnumExternalRefundApplication                         PostJournalRunTransactionTypeTypeEnum = "External Refund Application"
	POSTJournalRunTransactionTypeTypeEnumElectronicPaymentApplicationItem                  PostJournalRunTransactionTypeTypeEnum = "Electronic Payment Application Item"
	POSTJournalRunTransactionTypeTypeEnumExternalPaymentApplicationItem                    PostJournalRunTransactionTypeTypeEnum = "External Payment Application Item"
	POSTJournalRunTransactionTypeTypeEnumElectronicRefundApplicationItem                   PostJournalRunTransactionTypeTypeEnum = "Electronic Refund Application Item"
	POSTJournalRunTransactionTypeTypeEnumExternalRefundApplicationItem                     PostJournalRunTransactionTypeTypeEnum = "External Refund Application Item"
)

type PostJournalRunTransactionType struct {
	Type PostJournalRunTransactionTypeTypeEnum `json:"type"`
}
