import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostPaymentMethodDecryptionCardHolderInfo:
    r"""PostPaymentMethodDecryptionCardHolderInfo
    Container for cardholder information. If provided, Zuora will only use this information for this card. If not provided, Zuora will use the account's existing bill-to contact information for this card.
    """
    
    address_line1: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addressLine1') }})
    address_line2: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addressLine2') }})
    card_holder_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cardHolderName') }})
    city: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    phone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone') }})
    state: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    zip_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zipCode') }})
    
class PostPaymentMethodDecryptionMitConsentAgreementSrcEnum(str, Enum):
    EXTERNAL = "External"

class PostPaymentMethodDecryptionMitProfileActionEnum(str, Enum):
    ACTIVATE = "Activate"
    PERSIST = "Persist"

class PostPaymentMethodDecryptionMitProfileTypeEnum(str, Enum):
    RECURRING = "Recurring"


@dataclass_json
@dataclasses.dataclass
class PostPaymentMethodDecryption:
    integration_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('integrationType') }})
    merchant_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantID') }})
    payment_token: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentToken') }})
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountID') }})
    card_holder_info: Optional[PostPaymentMethodDecryptionCardHolderInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cardHolderInfo') }})
    invoice_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoiceId') }})
    mit_consent_agreement_src: Optional[PostPaymentMethodDecryptionMitConsentAgreementSrcEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mitConsentAgreementSrc') }})
    mit_profile_action: Optional[PostPaymentMethodDecryptionMitProfileActionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mitProfileAction') }})
    mit_profile_type: Optional[PostPaymentMethodDecryptionMitProfileTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mitProfileType') }})
    payment_gateway: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentGateway') }})
    process_payment: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processPayment') }})
    
