import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class TriggerDateNameEnum(str, Enum):
    CONTRACT_EFFECTIVE = "ContractEffective"
    SERVICE_ACTIVATION = "ServiceActivation"
    CUSTOMER_ACCEPTANCE = "CustomerAcceptance"


@dataclass_json
@dataclasses.dataclass
class TriggerDate:
    name: Optional[TriggerDateNameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    trigger_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
