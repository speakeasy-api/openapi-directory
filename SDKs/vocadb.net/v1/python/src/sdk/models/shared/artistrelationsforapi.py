import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import albumforapicontract as shared_albumforapicontract
from ..shared import releaseeventforapicontract as shared_releaseeventforapicontract
from ..shared import songforapicontract as shared_songforapicontract


@dataclass_json
@dataclasses.dataclass
class ArtistRelationsForAPI:
    latest_albums: Optional[list[shared_albumforapicontract.AlbumForAPIContract]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestAlbums') }})
    latest_events: Optional[list[shared_releaseeventforapicontract.ReleaseEventForAPIContract]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestEvents') }})
    latest_songs: Optional[list[shared_songforapicontract.SongForAPIContract]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestSongs') }})
    popular_albums: Optional[list[shared_albumforapicontract.AlbumForAPIContract]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('popularAlbums') }})
    popular_songs: Optional[list[shared_songforapicontract.SongForAPIContract]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('popularSongs') }})
    
