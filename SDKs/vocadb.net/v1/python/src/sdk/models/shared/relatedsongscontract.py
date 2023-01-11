import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import songforapicontract as shared_songforapicontract


@dataclass_json
@dataclasses.dataclass
class RelatedSongsContract:
    artist_matches: Optional[list[shared_songforapicontract.SongForAPIContract]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artistMatches') }})
    like_matches: Optional[list[shared_songforapicontract.SongForAPIContract]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('likeMatches') }})
    tag_matches: Optional[list[shared_songforapicontract.SongForAPIContract]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagMatches') }})
    
