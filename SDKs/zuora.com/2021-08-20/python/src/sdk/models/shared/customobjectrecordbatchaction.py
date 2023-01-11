import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CustomObjectRecordBatchActionTypeEnum(str, Enum):
    DELETE = "delete"
    UPDATE = "update"


@dataclass_json
@dataclasses.dataclass
class CustomObjectRecordBatchAction:
    r"""CustomObjectRecordBatchAction
    The batch action on custom object records
    """
    
    type: CustomObjectRecordBatchActionTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    allow_partial_success: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowPartialSuccess') }})
    ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ids') }})
    records: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('records') }})
    
