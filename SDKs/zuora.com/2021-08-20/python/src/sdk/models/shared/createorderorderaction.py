import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import createorderrateplanoverride as shared_createorderrateplanoverride
from ..shared import cancelsubscription as shared_cancelsubscription
from ..shared import createordercreatesubscription as shared_createordercreatesubscription
from ..shared import ownertransfer as shared_ownertransfer
from ..shared import removeproduct as shared_removeproduct
from ..shared import createorderresume as shared_createorderresume
from ..shared import createordersuspend as shared_createordersuspend
from ..shared import createordertermsandconditions as shared_createordertermsandconditions
from ..shared import triggerdate as shared_triggerdate
from ..shared import createorderrateplanupdate as shared_createorderrateplanupdate

class CreateOrderOrderActionTypeEnum(str, Enum):
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
class CreateOrderOrderAction:
    type: CreateOrderOrderActionTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    add_product: Optional[shared_createorderrateplanoverride.CreateOrderRatePlanOverride] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addProduct') }})
    cancel_subscription: Optional[shared_cancelsubscription.CancelSubscription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancelSubscription') }})
    create_subscription: Optional[shared_createordercreatesubscription.CreateOrderCreateSubscription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createSubscription') }})
    custom_fields: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customFields') }})
    owner_transfer: Optional[shared_ownertransfer.OwnerTransfer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownerTransfer') }})
    remove_product: Optional[shared_removeproduct.RemoveProduct] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('removeProduct') }})
    resume: Optional[shared_createorderresume.CreateOrderResume] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resume') }})
    suspend: Optional[shared_createordersuspend.CreateOrderSuspend] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suspend') }})
    terms_and_conditions: Optional[shared_createordertermsandconditions.CreateOrderTermsAndConditions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('termsAndConditions') }})
    trigger_dates: Optional[list[shared_triggerdate.TriggerDate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerDates') }})
    update_product: Optional[shared_createorderrateplanupdate.CreateOrderRatePlanUpdate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateProduct') }})
    
