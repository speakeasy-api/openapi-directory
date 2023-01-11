import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import derivedholdingssummary as shared_derivedholdingssummary
from ..shared import derivedholdingslinks as shared_derivedholdingslinks


@dataclass_json
@dataclasses.dataclass
class DerivedHoldingSummaryResponse:
    holding_summary: Optional[list[shared_derivedholdingssummary.DerivedHoldingsSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('holdingSummary') }})
    link: Optional[shared_derivedholdingslinks.DerivedHoldingsLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    
