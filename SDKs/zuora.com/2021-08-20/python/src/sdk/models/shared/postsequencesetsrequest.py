import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import postsequencesetrequest as shared_postsequencesetrequest


@dataclass_json
@dataclasses.dataclass
class PostSequenceSetsRequest:
    sequence_sets: Optional[list[shared_postsequencesetrequest.PostSequenceSetRequest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sequenceSets') }})
    
