import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class TriggerParamsTriggerEventEnum(str, Enum):
    CONTRACT_EFFECTIVE = "ContractEffective"
    SERVICE_ACTIVATION = "ServiceActivation"
    CUSTOMER_ACCEPTANCE = "CustomerAcceptance"


@dataclass_json
@dataclasses.dataclass
class TriggerParams:
    r"""TriggerParams
    Specifies when a charge becomes active.
    
    """
    
    specific_trigger_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('specificTriggerDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    trigger_event: Optional[TriggerParamsTriggerEventEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerEvent') }})
    
