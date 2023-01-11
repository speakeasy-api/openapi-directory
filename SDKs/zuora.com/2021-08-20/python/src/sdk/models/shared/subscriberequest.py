import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gatewayoption as shared_gatewayoption
from ..shared import rateplandata as shared_rateplandata


@dataclass_json
@dataclasses.dataclass
class SubscribeRequestPaymentMethodGatewayOptionData:
    r"""SubscribeRequestPaymentMethodGatewayOptionData
     Use this field to pass gateway options.
    
    
    **Character limit**: 255
    
    
    **Values**: GatewayOption 
    """
    
    gateway_option: list[shared_gatewayoption.GatewayOption] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GatewayOption') }})
    
class SubscribeRequestPaymentMethodTypeEnum(str, Enum):
    ACH = "ACH"
    APPLE_PAY = "ApplePay"
    BANK_TRANSFER = "BankTransfer"
    CASH = "Cash"
    CHECK = "Check"
    CREDIT_CARD = "CreditCard"
    CREDIT_CARD_REFERENCE_TRANSACTION = "CreditCardReferenceTransaction"
    DEBIT_CARD = "DebitCard"
    OTHER = "Other"
    PAY_PAL = "PayPal"
    WIRE_TRANSFER = "WireTransfer"


@dataclass_json
@dataclasses.dataclass
class SubscribeRequestPaymentMethod:
    r"""SubscribeRequestPaymentMethod
     This is the object defining the payment details for the Account. The Account will be updated with this payment as the default payment method.
    Use this field if you are associating an electronic payment method with the account. A payment gateway must be enabled.
    Values: A valid electronic PaymentMethod.
    """
    
    type: SubscribeRequestPaymentMethodTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountId') }})
    ach_aba_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AchAbaCode') }})
    ach_account_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AchAccountName') }})
    ach_account_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AchAccountNumber') }})
    ach_account_number_mask: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AchAccountNumberMask') }})
    ach_account_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AchAccountType') }})
    ach_address1: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AchAddress1') }})
    ach_address2: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AchAddress2') }})
    ach_bank_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AchBankName') }})
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Active') }})
    bank_branch_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BankBranchCode') }})
    bank_check_digit: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BankCheckDigit') }})
    bank_city: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BankCity') }})
    bank_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BankCode') }})
    bank_identification_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BankIdentificationNumber') }})
    bank_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BankName') }})
    bank_postal_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BankPostalCode') }})
    bank_street_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BankStreetName') }})
    bank_street_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BankStreetNumber') }})
    bank_transfer_account_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BankTransferAccountName') }})
    bank_transfer_account_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BankTransferAccountNumber') }})
    bank_transfer_account_number_mask: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BankTransferAccountNumberMask') }})
    bank_transfer_account_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BankTransferAccountType') }})
    bank_transfer_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BankTransferType') }})
    business_identification_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BusinessIdentificationCode') }})
    city: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('City') }})
    country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Country') }})
    created_by_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedById') }})
    created_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    credit_card_address1: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditCardAddress1') }})
    credit_card_address2: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditCardAddress2') }})
    credit_card_city: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditCardCity') }})
    credit_card_country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditCardCountry') }})
    credit_card_expiration_month: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditCardExpirationMonth') }})
    credit_card_expiration_year: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditCardExpirationYear') }})
    credit_card_holder_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditCardHolderName') }})
    credit_card_mask_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditCardMaskNumber') }})
    credit_card_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditCardNumber') }})
    credit_card_postal_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditCardPostalCode') }})
    credit_card_security_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditCardSecurityCode') }})
    credit_card_state: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditCardState') }})
    credit_card_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditCardType') }})
    device_session_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceSessionId') }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Email') }})
    existing_mandate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExistingMandate') }})
    first_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirstName') }})
    gateway_option_data: Optional[SubscribeRequestPaymentMethodGatewayOptionData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GatewayOptionData') }})
    iban: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IBAN') }})
    ip_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IPAddress') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    last_failed_sale_transaction_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastFailedSaleTransactionDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastName') }})
    last_transaction_date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastTransactionDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_transaction_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastTransactionStatus') }})
    mandate_creation_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MandateCreationDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    mandate_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MandateID') }})
    mandate_received: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MandateReceived') }})
    mandate_update_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MandateUpdateDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    max_consecutive_payment_failures: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxConsecutivePaymentFailures') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    num_consecutive_failures: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumConsecutiveFailures') }})
    payment_method_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaymentMethodStatus') }})
    payment_retry_window: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaymentRetryWindow') }})
    paypal_baid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaypalBaid') }})
    paypal_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaypalEmail') }})
    paypal_preapproval_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaypalPreapprovalKey') }})
    paypal_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaypalType') }})
    phone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Phone') }})
    postal_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PostalCode') }})
    second_token_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondTokenId') }})
    skip_validation: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SkipValidation') }})
    state: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    street_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreetName') }})
    street_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreetNumber') }})
    token_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TokenId') }})
    total_number_of_error_payments: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalNumberOfErrorPayments') }})
    total_number_of_processed_payments: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalNumberOfProcessedPayments') }})
    updated_by_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdatedById') }})
    updated_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdatedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    use_default_retry_rule: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UseDefaultRetryRule') }})
    
class SubscribeRequestPreviewOptionsPreviewTypeEnum(str, Enum):
    INVOICE_ITEM = "InvoiceItem"
    CHARGE_METRICS = "ChargeMetrics"
    INVOICE_ITEM_CHARGE_METRICS = "InvoiceItemChargeMetrics"


@dataclass_json
@dataclasses.dataclass
class SubscribeRequestPreviewOptions:
    r"""SubscribeRequestPreviewOptions
    Only used if you want to call this operation in preview mode. After a call in preview mode is completed, Zuora will roll back the subscription and return only the temporary invoice data.
    
    """
    
    enable_preview_mode: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnablePreviewMode') }})
    number_of_periods: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfPeriods') }})
    preview_through_term_end: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreviewThroughTermEnd') }})
    preview_type: Optional[SubscribeRequestPreviewOptionsPreviewTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreviewType') }})
    

@dataclass_json
@dataclasses.dataclass
class SubscribeRequestSubscribeOptionsElectronicPaymentOptions:
    payment_method_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaymentMethodId') }})
    

@dataclass_json
@dataclasses.dataclass
class SubscribeRequestSubscribeOptionsExternalPaymentOptions:
    amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    effective_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EffectiveDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    gateway_order_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GatewayOrderId') }})
    payment_method_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaymentMethodId') }})
    reference_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReferenceId') }})
    

@dataclass_json
@dataclasses.dataclass
class SubscribeRequestSubscribeOptionsSubscribeInvoiceProcessingOptions:
    invoice_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InvoiceDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    invoice_processing_scope: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InvoiceProcessingScope') }})
    invoice_target_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InvoiceTargetDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclasses.dataclass
class SubscribeRequestSubscribeOptions:
    r"""SubscribeRequestSubscribeOptions
     This optional object specifies parameters related to invoicing - whether to immediately generate an invoice and collect payment, and whether the invoice should cover all subscriptions or just this new subscription.
    The default behavior is to invoice immediately for all the account's subscriptions, with the current date as the target date, and immediately collect payment if the account's `AutoPay` flag is true.
    
    
    **Values:** A valid SubscribeOptions object. 
    """
    
    generate_invoice: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GenerateInvoice') }})
    process_payments: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProcessPayments') }})
    application_order: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationOrder') }})
    apply_credit: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplyCredit') }})
    apply_credit_balance: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplyCreditBalance') }})
    electronic_payment_options: Optional[SubscribeRequestSubscribeOptionsElectronicPaymentOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ElectronicPaymentOptions') }})
    external_payment_options: Optional[SubscribeRequestSubscribeOptionsExternalPaymentOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExternalPaymentOptions') }})
    subscribe_invoice_processing_options: Optional[SubscribeRequestSubscribeOptionsSubscribeInvoiceProcessingOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubscribeInvoiceProcessingOptions') }})
    

@dataclass_json
@dataclasses.dataclass
class SubscribeRequestSubscriptionData:
    r"""SubscribeRequestSubscriptionData
     This object contains the information on the contract's dates and terms.
    
    
    **Values:** A valid SubscriptionData object. 
    """
    
    rate_plan_data: list[shared_rateplandata.RatePlanData] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RatePlanData') }})
    subscription: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subscription') }})
    

@dataclass_json
@dataclasses.dataclass
class SubscribeRequest:
    account: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Account') }})
    subscription_data: SubscribeRequestSubscriptionData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubscriptionData') }})
    bill_to_contact: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BillToContact') }})
    payment_method: Optional[SubscribeRequestPaymentMethod] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaymentMethod') }})
    preview_options: Optional[SubscribeRequestPreviewOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreviewOptions') }})
    sold_to_contact: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SoldToContact') }})
    subscribe_options: Optional[SubscribeRequestSubscribeOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubscribeOptions') }})
    
