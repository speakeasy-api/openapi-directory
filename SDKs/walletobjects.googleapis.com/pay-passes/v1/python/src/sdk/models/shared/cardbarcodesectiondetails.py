import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import barcodesectiondetail as shared_barcodesectiondetail


@dataclass_json
@dataclasses.dataclass
class CardBarcodeSectionDetails:
    first_bottom_detail: Optional[shared_barcodesectiondetail.BarcodeSectionDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstBottomDetail') }})
    first_top_detail: Optional[shared_barcodesectiondetail.BarcodeSectionDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstTopDetail') }})
    second_top_detail: Optional[shared_barcodesectiondetail.BarcodeSectionDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondTopDetail') }})
    
