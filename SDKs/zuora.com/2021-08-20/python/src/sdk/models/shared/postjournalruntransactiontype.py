import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PostJournalRunTransactionTypeTypeEnum(str, Enum):
    INVOICE_ITEM = "Invoice Item"
    TAXATION_ITEM = "Taxation Item"
    INVOICE_ITEM_ADJUSTMENT_INVOICE_ = "Invoice Item Adjustment (Invoice)"
    INVOICE_ITEM_ADJUSTMENT_TAX_ = "Invoice Item Adjustment (Tax)"
    INVOICE_ADJUSTMENT = "Invoice Adjustment"
    ELECTRONIC_PAYMENT = "Electronic Payment"
    EXTERNAL_PAYMENT = "External Payment"
    ELECTRONIC_REFUND = "Electronic Refund"
    EXTERNAL_REFUND = "External Refund"
    ELECTRONIC_CREDIT_BALANCE_PAYMENT = "Electronic Credit Balance Payment"
    EXTERNAL_CREDIT_BALANCE_PAYMENT = "External Credit Balance Payment"
    ELECTRONIC_CREDIT_BALANCE_REFUND = "Electronic Credit Balance Refund"
    EXTERNAL_CREDIT_BALANCE_REFUND = "External Credit Balance Refund"
    CREDIT_BALANCE_ADJUSTMENT_APPLIED_FROM_CREDIT_BALANCE_ = "Credit Balance Adjustment (Applied from Credit Balance)"
    CREDIT_BALANCE_ADJUSTMENT_TRANSFERRED_TO_CREDIT_BALANCE_ = "Credit Balance Adjustment (Transferred to Credit Balance)"
    REVENUE_EVENT_ITEM = "Revenue Event Item"
    DEBIT_MEMO_ITEM_CHARGE_ = "Debit Memo Item (Charge)"
    DEBIT_MEMO_ITEM_TAX_ = "Debit Memo Item (Tax)"
    CREDIT_MEMO_ITEM_CHARGE_ = "Credit Memo Item (Charge)"
    CREDIT_MEMO_ITEM_TAX_ = "Credit Memo Item (Tax)"
    CREDIT_MEMO_APPLICATION_ITEM = "Credit Memo Application Item"
    ELECTRONIC_PAYMENT_APPLICATION = "Electronic Payment Application"
    EXTERNAL_PAYMENT_APPLICATION = "External Payment Application"
    ELECTRONIC_REFUND_APPLICATION = "Electronic Refund Application"
    EXTERNAL_REFUND_APPLICATION = "External Refund Application"
    ELECTRONIC_PAYMENT_APPLICATION_ITEM = "Electronic Payment Application Item"
    EXTERNAL_PAYMENT_APPLICATION_ITEM = "External Payment Application Item"
    ELECTRONIC_REFUND_APPLICATION_ITEM = "Electronic Refund Application Item"
    EXTERNAL_REFUND_APPLICATION_ITEM = "External Refund Application Item"


@dataclass_json
@dataclasses.dataclass
class PostJournalRunTransactionType:
    type: PostJournalRunTransactionTypeTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
