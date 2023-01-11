import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import renewalterm as shared_renewalterm
from ..shared import createorderrateplanoverride as shared_createorderrateplanoverride

class CreateOrderCreateSubscriptionTermsInitialTermPeriodTypeEnum(str, Enum):
    MONTH = "Month"
    YEAR = "Year"
    DAY = "Day"
    WEEK = "Week"

class CreateOrderCreateSubscriptionTermsInitialTermTermTypeEnum(str, Enum):
    TERMED = "TERMED"
    EVERGREEN = "EVERGREEN"


@dataclass_json
@dataclasses.dataclass
class CreateOrderCreateSubscriptionTermsInitialTerm:
    r"""CreateOrderCreateSubscriptionTermsInitialTerm
    Information about the first term of the subscription.
    
    """
    
    term_type: CreateOrderCreateSubscriptionTermsInitialTermTermTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('termType') }})
    period: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('period') }})
    period_type: Optional[CreateOrderCreateSubscriptionTermsInitialTermPeriodTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('periodType') }})
    start_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
class CreateOrderCreateSubscriptionTermsRenewalSettingEnum(str, Enum):
    RENEW_WITH_SPECIFIC_TERM = "RENEW_WITH_SPECIFIC_TERM"
    RENEW_TO_EVERGREEN = "RENEW_TO_EVERGREEN"


@dataclass_json
@dataclasses.dataclass
class CreateOrderCreateSubscriptionTerms:
    r"""CreateOrderCreateSubscriptionTerms
    Container for the terms and renewal settings of the subscription.
    
    """
    
    initial_term: CreateOrderCreateSubscriptionTermsInitialTerm = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('initialTerm') }})
    auto_renew: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoRenew') }})
    renewal_setting: Optional[CreateOrderCreateSubscriptionTermsRenewalSettingEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('renewalSetting') }})
    renewal_terms: Optional[list[shared_renewalterm.RenewalTerm]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('renewalTerms') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateOrderCreateSubscription:
    r"""CreateOrderCreateSubscription
    Information about an order action of type `CreateSubscription`.
    
    """
    
    invoice_separately: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoiceSeparately') }})
    new_subscription_owner_account: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newSubscriptionOwnerAccount') }})
    notes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    subscribe_to_rate_plans: Optional[list[shared_createorderrateplanoverride.CreateOrderRatePlanOverride]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscribeToRatePlans') }})
    subscription_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptionNumber') }})
    subscription_owner_account_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptionOwnerAccountNumber') }})
    terms: Optional[CreateOrderCreateSubscriptionTerms] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('terms') }})
    
