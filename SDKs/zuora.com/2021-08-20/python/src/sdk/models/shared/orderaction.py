import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rateplanoverride as shared_rateplanoverride
from ..shared import cancelsubscription as shared_cancelsubscription
from ..shared import createsubscription as shared_createsubscription
from ..shared import orderitem as shared_orderitem
from ..shared import ordermetric as shared_ordermetric
from ..shared import ownertransfer as shared_ownertransfer
from ..shared import removeproduct as shared_removeproduct
from ..shared import getorderresume as shared_getorderresume
from ..shared import getordersuspend as shared_getordersuspend
from ..shared import termsandconditions as shared_termsandconditions
from ..shared import triggerdate as shared_triggerdate
from ..shared import rateplanupdate as shared_rateplanupdate

class OrderActionTypeEnum(str, Enum):
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
class OrderAction:
    r"""OrderAction
    Represents the processed order action.
    """
    
    add_product: Optional[shared_rateplanoverride.RatePlanOverride] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addProduct') }})
    cancel_subscription: Optional[shared_cancelsubscription.CancelSubscription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancelSubscription') }})
    create_subscription: Optional[shared_createsubscription.CreateSubscription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createSubscription') }})
    custom_fields: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customFields') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    order_items: Optional[list[shared_orderitem.OrderItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderItems') }})
    order_metrics: Optional[list[shared_ordermetric.OrderMetric]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderMetrics') }})
    owner_transfer: Optional[shared_ownertransfer.OwnerTransfer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownerTransfer') }})
    remove_product: Optional[shared_removeproduct.RemoveProduct] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('removeProduct') }})
    resume: Optional[shared_getorderresume.GetOrderResume] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resume') }})
    sequence: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sequence') }})
    suspend: Optional[shared_getordersuspend.GetOrderSuspend] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suspend') }})
    terms_and_conditions: Optional[shared_termsandconditions.TermsAndConditions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('termsAndConditions') }})
    trigger_dates: Optional[list[shared_triggerdate.TriggerDate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerDates') }})
    type: Optional[OrderActionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    update_product: Optional[shared_rateplanupdate.RatePlanUpdate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateProduct') }})
    
