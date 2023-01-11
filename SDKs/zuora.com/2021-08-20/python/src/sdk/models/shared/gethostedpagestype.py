import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gethostedpagetype as shared_gethostedpagetype


@dataclass_json
@dataclasses.dataclass
class GetHostedPagesType:
    hostedpages: Optional[list[shared_gethostedpagetype.GetHostedPageType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostedpages') }})
    success: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    
