import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import account as shared_account
from ..shared import currencyformat as shared_currencyformat
from ..shared import dateformat as shared_dateformat


@dataclass_json
@dataclasses.dataclass
class BudgetSummary:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    accounts: Optional[list[shared_account.Account]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accounts') }})
    currency_format: Optional[shared_currencyformat.CurrencyFormat] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency_format') }})
    date_format: Optional[shared_dateformat.DateFormat] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_format') }})
    first_month: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_month'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_modified_on: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_modified_on'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_month: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_month'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
