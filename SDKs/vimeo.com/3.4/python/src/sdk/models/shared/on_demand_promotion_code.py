import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class OnDemandPromotionCode:
    code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    link: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    max_uses: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_uses') }})
    uses: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uses') }})
    
