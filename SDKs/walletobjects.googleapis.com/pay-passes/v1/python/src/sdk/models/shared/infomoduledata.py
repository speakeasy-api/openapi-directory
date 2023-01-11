import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import labelvaluerow as shared_labelvaluerow


@dataclass_json
@dataclasses.dataclass
class InfoModuleData:
    label_value_rows: Optional[list[shared_labelvaluerow.LabelValueRow]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelValueRows') }})
    show_last_update_time: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('showLastUpdateTime') }})
    
