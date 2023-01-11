import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import getsequencesetresponse as shared_getsequencesetresponse


@dataclass_json
@dataclasses.dataclass
class PostSequenceSetsResponse:
    sequence_sets: Optional[list[shared_getsequencesetresponse.GetSequenceSetResponse]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sequenceSets') }})
    success: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    
