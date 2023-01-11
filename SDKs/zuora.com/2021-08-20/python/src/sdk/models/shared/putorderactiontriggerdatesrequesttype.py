import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsCharges:
    charge_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chargeNumber') }})
    specific_trigger_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('specificTriggerDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
class PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsTriggerDatesNameEnum(str, Enum):
    SERVICE_ACTIVATION = "ServiceActivation"
    CUSTOMER_ACCEPTANCE = "CustomerAcceptance"


@dataclass_json
@dataclasses.dataclass
class PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsTriggerDates:
    name: Optional[PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsTriggerDatesNameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    trigger_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclasses.dataclass
class PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActions:
    sequence: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sequence') }})
    charges: Optional[list[PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsCharges]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('charges') }})
    trigger_dates: Optional[list[PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsTriggerDates]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerDates') }})
    

@dataclass_json
@dataclasses.dataclass
class PutOrderActionTriggerDatesRequestTypeSubscriptions:
    subscription_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptionNumber') }})
    order_actions: Optional[list[PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActions]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderActions') }})
    

@dataclass_json
@dataclasses.dataclass
class PutOrderActionTriggerDatesRequestType:
    subscriptions: Optional[list[PutOrderActionTriggerDatesRequestTypeSubscriptions]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptions') }})
    
