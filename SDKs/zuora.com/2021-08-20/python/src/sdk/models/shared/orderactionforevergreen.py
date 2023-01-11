import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rateplanoverrideforevergreen as shared_rateplanoverrideforevergreen
from ..shared import cancelsubscription as shared_cancelsubscription
from ..shared import createsubscriptionforevergreen as shared_createsubscriptionforevergreen
from ..shared import ordermetricsforevergreen as shared_ordermetricsforevergreen
from ..shared import ownertransfer as shared_ownertransfer
from ..shared import removeproduct as shared_removeproduct
from ..shared import getorderresume as shared_getorderresume
from ..shared import getordersuspend as shared_getordersuspend
from ..shared import termsandconditions as shared_termsandconditions
from ..shared import triggerdate as shared_triggerdate
from ..shared import rateplanupdateforevergreen as shared_rateplanupdateforevergreen

class OrderActionForEvergreenTypeEnum(str, Enum):
    CREATE_SUBSCRIPTION = "CreateSubscription"
    TERMS_AND_CONDITIONS = "TermsAndConditions"
    ADD_PRODUCT = "AddProduct"
    UPDATE_PRODUCT = "UpdateProduct"
    REMOVE_PRODUCT = "RemoveProduct"
    RENEW_SUBSCRIPTION = "RenewSubscription"
    CANCEL_SUBSCRIPTION = "CancelSubscription"
    OWNER_TRANSFER = "OwnerTransfer"
    SUSPEND = "Suspend"
    RESUME = "Resume"


@dataclass_json
@dataclasses.dataclass
class OrderActionForEvergreen:
    r"""OrderActionForEvergreen
    Represents the processed order action.
    """
    
    add_product: Optional[shared_rateplanoverrideforevergreen.RatePlanOverrideForEvergreen] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addProduct') }})
    cancel_subscription: Optional[shared_cancelsubscription.CancelSubscription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancelSubscription') }})
    create_subscription: Optional[shared_createsubscriptionforevergreen.CreateSubscriptionForEvergreen] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createSubscription') }})
    custom_fields: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customFields') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    order_metrics: Optional[list[shared_ordermetricsforevergreen.OrderMetricsForEvergreen]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderMetrics') }})
    owner_transfer: Optional[shared_ownertransfer.OwnerTransfer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownerTransfer') }})
    remove_product: Optional[shared_removeproduct.RemoveProduct] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('removeProduct') }})
    resume: Optional[shared_getorderresume.GetOrderResume] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resume') }})
    sequence: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sequence') }})
    suspend: Optional[shared_getordersuspend.GetOrderSuspend] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suspend') }})
    terms_and_conditions: Optional[shared_termsandconditions.TermsAndConditions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('termsAndConditions') }})
    trigger_dates: Optional[list[shared_triggerdate.TriggerDate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerDates') }})
    type: Optional[OrderActionForEvergreenTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    update_product: Optional[shared_rateplanupdateforevergreen.RatePlanUpdateForEvergreen] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateProduct') }})
    
