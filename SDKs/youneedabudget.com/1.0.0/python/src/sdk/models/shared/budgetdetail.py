import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import account as shared_account
from ..shared import category as shared_category
from ..shared import categorygroup as shared_categorygroup
from ..shared import currencyformat as shared_currencyformat
from ..shared import dateformat as shared_dateformat
from ..shared import monthdetail as shared_monthdetail
from ..shared import payeelocation as shared_payeelocation
from ..shared import payee as shared_payee
from ..shared import scheduledsubtransaction as shared_scheduledsubtransaction
from ..shared import scheduledtransactionsummary as shared_scheduledtransactionsummary
from ..shared import subtransaction as shared_subtransaction
from ..shared import transactionsummary as shared_transactionsummary


@dataclass_json
@dataclasses.dataclass
class BudgetDetail:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    accounts: Optional[list[shared_account.Account]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accounts') }})
    categories: Optional[list[shared_category.Category]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    category_groups: Optional[list[shared_categorygroup.CategoryGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category_groups') }})
    currency_format: Optional[shared_currencyformat.CurrencyFormat] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency_format') }})
    date_format: Optional[shared_dateformat.DateFormat] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_format') }})
    first_month: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_month'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_modified_on: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_modified_on'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_month: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_month'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    months: Optional[list[shared_monthdetail.MonthDetail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('months') }})
    payee_locations: Optional[list[shared_payeelocation.PayeeLocation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payee_locations') }})
    payees: Optional[list[shared_payee.Payee]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payees') }})
    scheduled_subtransactions: Optional[list[shared_scheduledsubtransaction.ScheduledSubTransaction]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduled_subtransactions') }})
    scheduled_transactions: Optional[list[shared_scheduledtransactionsummary.ScheduledTransactionSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduled_transactions') }})
    subtransactions: Optional[list[shared_subtransaction.SubTransaction]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subtransactions') }})
    transactions: Optional[list[shared_transactionsummary.TransactionSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactions') }})
    
