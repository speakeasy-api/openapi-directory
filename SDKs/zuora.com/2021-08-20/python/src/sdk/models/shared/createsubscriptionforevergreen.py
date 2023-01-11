import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import creditcard as shared_creditcard
from ..shared import taxinfo as shared_taxinfo
from ..shared import renewalterm as shared_renewalterm
from ..shared import rateplanoverrideforevergreen as shared_rateplanoverrideforevergreen


@dataclass_json
@dataclasses.dataclass
class CreateSubscriptionForEvergreenNewSubscriptionOwnerAccount:
    r"""CreateSubscriptionForEvergreenNewSubscriptionOwnerAccount
    Information about a new account that will own the subscription. Only available if you have enabled the Owner Transfer feature.
    
    **Note:** The Owner Transfer feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
    
    If you do not set this field or the `subscriptionOwnerAccountNumber` field, the account that owns the order will also own the subscription. Zuora will return an error if you set this field and the `subscriptionOwnerAccountNumber` field.
    
    """
    
    bill_cycle_day: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('billCycleDay') }})
    bill_to_contact: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('billToContact') }})
    currency: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    account_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountNumber') }})
    auto_pay: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoPay') }})
    batch: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batch') }})
    communication_profile_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('communicationProfileId') }})
    credit_card: Optional[shared_creditcard.CreditCard] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditCard') }})
    crm_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('crmId') }})
    custom_fields: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customFields') }})
    hpm_credit_card_payment_method_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hpmCreditCardPaymentMethodId') }})
    invoice_delivery_prefs_email: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoiceDeliveryPrefsEmail') }})
    invoice_delivery_prefs_print: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoiceDeliveryPrefsPrint') }})
    invoice_template_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoiceTemplateId') }})
    notes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    parent_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentId') }})
    payment_gateway: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentGateway') }})
    payment_method: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentMethod') }})
    payment_term: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentTerm') }})
    sold_to_contact: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('soldToContact') }})
    tax_info: Optional[shared_taxinfo.TaxInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxInfo') }})
    
class CreateSubscriptionForEvergreenTermsInitialTermPeriodTypeEnum(str, Enum):
    MONTH = "Month"
    YEAR = "Year"
    DAY = "Day"
    WEEK = "Week"

class CreateSubscriptionForEvergreenTermsInitialTermTermTypeEnum(str, Enum):
    TERMED = "TERMED"
    EVERGREEN = "EVERGREEN"


@dataclass_json
@dataclasses.dataclass
class CreateSubscriptionForEvergreenTermsInitialTerm:
    r"""CreateSubscriptionForEvergreenTermsInitialTerm
    Information about the first term of the subscription.
    
    """
    
    term_type: CreateSubscriptionForEvergreenTermsInitialTermTermTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('termType') }})
    period: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('period') }})
    period_type: Optional[CreateSubscriptionForEvergreenTermsInitialTermPeriodTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('periodType') }})
    start_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
class CreateSubscriptionForEvergreenTermsRenewalSettingEnum(str, Enum):
    RENEW_WITH_SPECIFIC_TERM = "RENEW_WITH_SPECIFIC_TERM"
    RENEW_TO_EVERGREEN = "RENEW_TO_EVERGREEN"


@dataclass_json
@dataclasses.dataclass
class CreateSubscriptionForEvergreenTerms:
    r"""CreateSubscriptionForEvergreenTerms
    Container for the terms and renewal settings of the subscription.
    
    """
    
    initial_term: CreateSubscriptionForEvergreenTermsInitialTerm = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('initialTerm') }})
    renewal_terms: list[shared_renewalterm.RenewalTerm] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('renewalTerms') }})
    auto_renew: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoRenew') }})
    renewal_setting: Optional[CreateSubscriptionForEvergreenTermsRenewalSettingEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('renewalSetting') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateSubscriptionForEvergreen:
    r"""CreateSubscriptionForEvergreen
    Information about an order action of type `CreateSubscription`.
    
    """
    
    invoice_separately: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoiceSeparately') }})
    new_subscription_owner_account: Optional[CreateSubscriptionForEvergreenNewSubscriptionOwnerAccount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newSubscriptionOwnerAccount') }})
    notes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    subscribe_to_rate_plans: Optional[list[shared_rateplanoverrideforevergreen.RatePlanOverrideForEvergreen]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscribeToRatePlans') }})
    subscription_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptionNumber') }})
    subscription_owner_account_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptionOwnerAccountNumber') }})
    terms: Optional[CreateSubscriptionForEvergreenTerms] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('terms') }})
    
