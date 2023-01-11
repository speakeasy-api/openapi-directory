import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ProxyActionexecuteRequestTypeEnum(str, Enum):
    INVOICE_SPLIT = "InvoiceSplit"


@dataclass_json
@dataclasses.dataclass
class ProxyActionexecuteRequest:
    ids: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ids') }})
    synchronous: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('synchronous') }})
    type: ProxyActionexecuteRequestTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
