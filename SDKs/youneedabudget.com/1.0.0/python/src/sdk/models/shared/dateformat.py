import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DateFormat:
    r"""DateFormat
    The date format setting for the budget.  In some cases the format will not be available and will be specified as null.
    """
    
    format: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    
