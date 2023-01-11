import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import derivedholdingsaccount as shared_derivedholdingsaccount
from ..shared import derivedholding as shared_derivedholding
from ..shared import money as shared_money


@dataclass_json
@dataclasses.dataclass
class DerivedHoldingsSummary:
    account: Optional[list[shared_derivedholdingsaccount.DerivedHoldingsAccount]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    classification_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classificationType') }})
    classification_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classificationValue') }})
    holding: Optional[list[shared_derivedholding.DerivedHolding]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('holding') }})
    value: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
