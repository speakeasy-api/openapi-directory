import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ProxyActionupdateRequest:
    objects: list[dict[str, Any]] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('objects') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
