import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import currencyformat as shared_currencyformat
from ..shared import dateformat as shared_dateformat


@dataclass_json
@dataclasses.dataclass
class BudgetSettings:
    currency_format: shared_currencyformat.CurrencyFormat = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency_format') }})
    date_format: shared_dateformat.DateFormat = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_format') }})
    
