import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ProxyGetPaymentMethodSnapshotAchAccountTypeEnum(str, Enum):
    BUSINESS_CHECKING = "BusinessChecking"
    CHECKING = "Checking"
    SAVING = "Saving"

class ProxyGetPaymentMethodSnapshotBankTransferTypeEnum(str, Enum):
    AUTOMATISCH_INCASSO = "AutomatischIncasso"
    LASTSCHRIFT_DE = "LastschriftDE"
    LASTSCHRIFT_AT = "LastschriftAT"
    DEMANDE_DE_PRELEVEMENT = "DemandeDePrelevement"
    DIRECT_DEBIT_UK = "DirectDebitUK"
    DOMICIL = "Domicil"
    LASTSCHRIFT_CH = "LastschriftCH"
    RID = "RID"
    ORDEN_DE_DOMICILIACION = "OrdenDeDomiciliacion"
    AUTOGIRO = "Autogiro"
    BETALINGSSERVICE = "Betalingsservice"

class ProxyGetPaymentMethodSnapshotCreditCardTypeEnum(str, Enum):
    AMERICAN_EXPRESS = "AmericanExpress"
    DISCOVER = "Discover"
    MASTER_CARD = "MasterCard"
    VISA = "Visa"

class ProxyGetPaymentMethodSnapshotExistingMandateEnum(str, Enum):
    YES = "Yes"
    NO = "No"

class ProxyGetPaymentMethodSnapshotPaymentMethodStatusEnum(str, Enum):
    ACTIVE = "Active"
    CLOSED = "Closed"

class ProxyGetPaymentMethodSnapshotPaypalTypeEnum(str, Enum):
    EXPRESS_CHECKOUT = "ExpressCheckout"
    ADAPTIVE_PAYMENTS = "AdaptivePayments"

class ProxyGetPaymentMethodSnapshotTypeEnum(str, Enum):
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
class ProxyGetPaymentMethodSnapshot:
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountId') }})
    ach_aba_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AchAbaCode') }})
    ach_account_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AchAccountName') }})
    ach_account_number_mask: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AchAccountNumberMask') }})
    ach_account_type: Optional[ProxyGetPaymentMethodSnapshotAchAccountTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AchAccountType') }})
    ach_bank_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AchBankName') }})
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
    bank_transfer_account_number_mask: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BankTransferAccountNumberMask') }})
    bank_transfer_account_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BankTransferAccountType') }})
    bank_transfer_type: Optional[ProxyGetPaymentMethodSnapshotBankTransferTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BankTransferType') }})
    business_identification_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BusinessIdentificationCode') }})
    city: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('City') }})
    company_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompanyName') }})
    country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Country') }})
    credit_card_address1: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditCardAddress1') }})
    credit_card_address2: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditCardAddress2') }})
    credit_card_city: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditCardCity') }})
    credit_card_country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditCardCountry') }})
    credit_card_expiration_month: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditCardExpirationMonth') }})
    credit_card_expiration_year: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditCardExpirationYear') }})
    credit_card_holder_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditCardHolderName') }})
    credit_card_mask_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditCardMaskNumber') }})
    credit_card_postal_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditCardPostalCode') }})
    credit_card_state: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditCardState') }})
    credit_card_type: Optional[ProxyGetPaymentMethodSnapshotCreditCardTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditCardType') }})
    device_session_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceSessionId') }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Email') }})
    existing_mandate: Optional[ProxyGetPaymentMethodSnapshotExistingMandateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExistingMandate') }})
    first_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirstName') }})
    iban: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IBAN') }})
    ip_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IPAddress') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    identity_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityNumber') }})
    is_company: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsCompany') }})
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
    payment_method_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaymentMethodId') }})
    payment_method_status: Optional[ProxyGetPaymentMethodSnapshotPaymentMethodStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaymentMethodStatus') }})
    payment_retry_window: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaymentRetryWindow') }})
    paypal_baid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaypalBaid') }})
    paypal_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaypalEmail') }})
    paypal_preapproval_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaypalPreapprovalKey') }})
    paypal_type: Optional[ProxyGetPaymentMethodSnapshotPaypalTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaypalType') }})
    phone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Phone') }})
    postal_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PostalCode') }})
    second_token_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondTokenId') }})
    state: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    street_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreetName') }})
    street_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreetNumber') }})
    token_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TokenId') }})
    total_number_of_error_payments: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalNumberOfErrorPayments') }})
    total_number_of_processed_payments: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalNumberOfProcessedPayments') }})
    type: Optional[ProxyGetPaymentMethodSnapshotTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    use_default_retry_rule: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UseDefaultRetryRule') }})
    
