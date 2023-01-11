import dataclasses
from typing import Any
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ProxyActiongenerateRequestTypeEnum(str, Enum):
    INVOICE = "Invoice"


@dataclass_json
@dataclasses.dataclass
class ProxyActiongenerateRequest:
    objects: list[dict[str, Any]] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('objects') }})
    type: ProxyActiongenerateRequestTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
