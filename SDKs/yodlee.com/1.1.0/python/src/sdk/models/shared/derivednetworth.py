import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import money as shared_money
from ..shared import derivednetworthhistoricalbalance as shared_derivednetworthhistoricalbalance


@dataclass_json
@dataclasses.dataclass
class DerivedNetworth:
    asset: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('asset') }})
    date_: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    historical_balances: Optional[list[shared_derivednetworthhistoricalbalance.DerivedNetworthHistoricalBalance]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('historicalBalances') }})
    liability: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('liability') }})
    networth: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networth') }})
    
