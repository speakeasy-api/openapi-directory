"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import dateutil.parser
from dataclasses_json import Undefined, dataclass_json
from datetime import datetime
from enum import Enum
from marshmallow import fields
from sdk import utils
from typing import Optional

class POSTSettlePaymentResponseFinanceInformationTransferredToAccountingEnum(str, Enum):
    r"""Whether the refund was transferred to an external accounting system. Use this field for integration with accounting systems, such as NetSuite."""
    PROCESSING = 'Processing'
    YES = 'Yes'
    NO = 'No'
    ERROR = 'Error'
    IGNORE = 'Ignore'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class POSTSettlePaymentResponseFinanceInformation:
    r"""Container for the finance information related to the refund."""
    
    bank_account_accounting_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('bankAccountAccountingCode'), 'exclude': lambda f: f is None }})
    r"""The accounting code that maps to a bank account in your accounting system."""  
    bank_account_accounting_code_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('bankAccountAccountingCodeType'), 'exclude': lambda f: f is None }})
    r"""The type of the accounting code that maps to a bank account in your accounting system."""  
    transferred_to_accounting: Optional[POSTSettlePaymentResponseFinanceInformationTransferredToAccountingEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('transferredToAccounting'), 'exclude': lambda f: f is None }})
    r"""Whether the refund was transferred to an external accounting system. Use this field for integration with accounting systems, such as NetSuite."""  
    unapplied_payment_accounting_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('unappliedPaymentAccountingCode'), 'exclude': lambda f: f is None }})
    r"""The accounting code for the unapplied payment."""  
    unapplied_payment_accounting_code_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('unappliedPaymentAccountingCodeType'), 'exclude': lambda f: f is None }})
    r"""The type of the accounting code for the unapplied payment."""  
    
class POSTSettlePaymentResponseGatewayStateEnum(str, Enum):
    r"""The status of the payment in the gateway; used for reconciliation."""
    MARKED_FOR_SUBMISSION = 'MarkedForSubmission'
    SUBMITTED = 'Submitted'
    SETTLED = 'Settled'
    NOT_SUBMITTED = 'NotSubmitted'
    FAILED_TO_SETTLE = 'FailedToSettle'

class POSTSettlePaymentResponseTypeEnum(str, Enum):
    r"""The type of the payment."""
    EXTERNAL = 'External'
    ELECTRONIC = 'Electronic'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class POSTSettlePaymentResponse:
    
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('accountId'), 'exclude': lambda f: f is None }})
    r"""The ID of the customer account that the payment is for."""  
    amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('amount'), 'exclude': lambda f: f is None }})
    r"""The total amount of the payment."""  
    applied_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('appliedAmount'), 'exclude': lambda f: f is None }})
    r"""The applied amount of the payment."""  
    auth_transaction_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('authTransactionId'), 'exclude': lambda f: f is None }})
    r"""The authorization transaction ID from the payment gateway."""  
    bank_identification_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('bankIdentificationNumber'), 'exclude': lambda f: f is None }})
    r"""The first six digits of the credit card or debit card used for the payment, when applicable."""  
    cancelled_on: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('cancelledOn'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso'), 'exclude': lambda f: f is None }})
    r"""The date and time when the payment was cancelled, in `yyyy-mm-dd hh:mm:ss` format."""  
    comment: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('comment'), 'exclude': lambda f: f is None }})
    r"""Comments about the payment."""  
    created_by_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('createdById'), 'exclude': lambda f: f is None }})
    r"""The ID of the Zuora user who created the refund."""  
    created_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('createdDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso'), 'exclude': lambda f: f is None }})
    r"""The date and time when the chargeback is created, in `yyyy-mm-dd hh:mm:ss` format. For example, 2019-03-01 15:31:10."""  
    credit_balance_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('creditBalanceAmount'), 'exclude': lambda f: f is None }})
    r"""The amount that the payment transfers to the credit balance. The value is not `0` only for those payments that come from legacy payment operations performed without the Invoice Settlement feature."""  
    currency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('currency'), 'exclude': lambda f: f is None }})
    r"""A currency defined in the web-based UI administrative settings."""  
    effective_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('effectiveDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso'), 'exclude': lambda f: f is None }})
    r"""The date and time when the payment takes effect, in `yyyy-mm-dd hh:mm:ss` format."""  
    finance_information: Optional[POSTSettlePaymentResponseFinanceInformation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('financeInformation'), 'exclude': lambda f: f is None }})
    r"""Container for the finance information related to the refund."""  
    gateway_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('gatewayId'), 'exclude': lambda f: f is None }})
    r"""The ID of the gateway instance that processes the payment."""  
    gateway_order_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('gatewayOrderId'), 'exclude': lambda f: f is None }})
    r"""A merchant-specified natural key value that can be passed to the electronic payment gateway when a payment is created. If not specified, the payment number will be passed in instead."""  
    gateway_response: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('gatewayResponse'), 'exclude': lambda f: f is None }})
    r"""The message returned from the payment gateway for the payment. This message is gateway-dependent."""  
    gateway_response_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('gatewayResponseCode'), 'exclude': lambda f: f is None }})
    r"""The code returned from the payment gateway for the payment. This code is gateway-dependent."""  
    gateway_state: Optional[POSTSettlePaymentResponseGatewayStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('gatewayState'), 'exclude': lambda f: f is None }})
    r"""The status of the payment in the gateway; used for reconciliation."""  
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('id'), 'exclude': lambda f: f is None }})
    r"""The ID of the payment chargeback."""  
    marked_for_submission_on: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('markedForSubmissionOn'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso'), 'exclude': lambda f: f is None }})
    r"""The date and time when a charge was marked and waiting for batch submission to the payment process, in `yyyy-mm-dd hh:mm:ss` format."""  
    number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('number'), 'exclude': lambda f: f is None }})
    r"""The unique identification number of the payment. For example, P-00000001."""  
    payment_method_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('paymentMethodId'), 'exclude': lambda f: f is None }})
    r"""The unique ID of the payment method that the customer used to make the payment."""  
    payment_method_snapshot_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('paymentMethodSnapshotId'), 'exclude': lambda f: f is None }})
    r"""The unique ID of the payment method snapshot which is a copy of the particular Payment Method used in a transaction."""  
    reference_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('referenceId'), 'exclude': lambda f: f is None }})
    r"""The transaction ID returned by the payment gateway for an electronic refund. Use this field to reconcile refunds between your gateway and Zuora Payments."""  
    refund_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('refundAmount'), 'exclude': lambda f: f is None }})
    r"""The amount of the payment that is refunded."""  
    second_payment_reference_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('secondPaymentReferenceId'), 'exclude': lambda f: f is None }})
    r"""The transaction ID returned by the payment gateway if there is an additional transaction for the payment."""  
    settled_on: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('settledOn'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso'), 'exclude': lambda f: f is None }})
    r"""The date and time when the transaction is settled, in `yyyy-mm-dd hh:mm:ss` format."""  
    soft_descriptor: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('softDescriptor'), 'exclude': lambda f: f is None }})
    r"""A payment gateway-specific field that maps Zuora to other gateways."""  
    soft_descriptor_phone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('softDescriptorPhone'), 'exclude': lambda f: f is None }})
    r"""A payment gateway-specific field that maps Zuora to other gateways."""  
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('status'), 'exclude': lambda f: f is None }})
    r"""The status of the payment."""  
    submitted_on: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('submittedOn'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso'), 'exclude': lambda f: f is None }})
    r"""The date and time when the payment was submitted, in `yyyy-mm-dd hh:mm:ss` format."""  
    success: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('success'), 'exclude': lambda f: f is None }})
    r"""Indicates if the request is processed successfully."""  
    type: Optional[POSTSettlePaymentResponseTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('type'), 'exclude': lambda f: f is None }})
    r"""The type of the payment."""  
    unapplied_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('unappliedAmount'), 'exclude': lambda f: f is None }})
    r"""The unapplied amount of the payment."""  
    updated_by_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('updatedById'), 'exclude': lambda f: f is None }})
    r"""The ID of the Zuora user who last updated the payment."""  
    updated_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('updatedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso'), 'exclude': lambda f: f is None }})
    r"""The date and time when the payment was last updated, in `yyyy-mm-dd hh:mm:ss` format. For example, 2019-03-02 15:36:10."""  
    