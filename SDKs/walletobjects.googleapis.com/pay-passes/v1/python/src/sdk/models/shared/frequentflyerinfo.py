import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import localizedstring as shared_localizedstring


@dataclass_json
@dataclasses.dataclass
class FrequentFlyerInfo:
    frequent_flyer_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequentFlyerNumber') }})
    frequent_flyer_program_name: Optional[shared_localizedstring.LocalizedString] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequentFlyerProgramName') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
