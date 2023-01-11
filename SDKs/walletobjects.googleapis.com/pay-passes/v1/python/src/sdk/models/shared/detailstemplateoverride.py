import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import detailsiteminfo as shared_detailsiteminfo


@dataclass_json
@dataclasses.dataclass
class DetailsTemplateOverride:
    details_item_infos: Optional[list[shared_detailsiteminfo.DetailsItemInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detailsItemInfos') }})
    
