import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cardrowtemplateinfo as shared_cardrowtemplateinfo


@dataclass_json
@dataclasses.dataclass
class CardTemplateOverride:
    card_row_template_infos: Optional[list[shared_cardrowtemplateinfo.CardRowTemplateInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cardRowTemplateInfos') }})
    
