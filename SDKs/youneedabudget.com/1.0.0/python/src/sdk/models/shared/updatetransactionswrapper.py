import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import updatetransaction as shared_updatetransaction


@dataclass_json
@dataclasses.dataclass
class UpdateTransactionsWrapper:
    transactions: list[shared_updatetransaction.UpdateTransaction] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactions') }})
    
