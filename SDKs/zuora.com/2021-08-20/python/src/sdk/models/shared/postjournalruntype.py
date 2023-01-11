import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import postjournalruntransactiontype as shared_postjournalruntransactiontype


@dataclass_json
@dataclasses.dataclass
class PostJournalRunType:
    journal_entry_date: date = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('journalEntryDate'), 'encoder': utils.dateisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    transaction_types: list[shared_postjournalruntransactiontype.PostJournalRunTransactionType] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionTypes') }})
    accounting_period_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountingPeriodName') }})
    target_end_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetEndDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    target_start_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetStartDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
