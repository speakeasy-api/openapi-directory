import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PreviewOrderTriggerParamsTriggerEventEnum(str, Enum):
    CONTRACT_EFFECTIVE = "ContractEffective"
    SERVICE_ACTIVATION = "ServiceActivation"
    CUSTOMER_ACCEPTANCE = "CustomerAcceptance"
    SPECIFIC_DATE = "SpecificDate"


@dataclass_json
@dataclasses.dataclass
class PreviewOrderTriggerParams:
    r"""PreviewOrderTriggerParams
    Specifies when a charge becomes active.
    
    """
    
    specific_trigger_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('specificTriggerDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    trigger_event: Optional[PreviewOrderTriggerParamsTriggerEventEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerEvent') }})
    
