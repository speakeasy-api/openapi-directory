import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import albumcontract as shared_albumcontract
from ..shared import artistforsongcontract as shared_artistforsongcontract
from ..shared import lyricsforsongcontract as shared_lyricsforsongcontract
from ..shared import entrythumbforapicontract as shared_entrythumbforapicontract
from ..shared import localizedstringcontract as shared_localizedstringcontract
from ..shared import pvcontract as shared_pvcontract
from ..shared import releaseeventforapicontract as shared_releaseeventforapicontract
from ..shared import tagusageforapicontract as shared_tagusageforapicontract
from ..shared import weblinkforapicontract as shared_weblinkforapicontract
from ..shared import albumcontract as shared_albumcontract
from ..shared import releaseeventforapicontract as shared_releaseeventforapicontract

class SongForAPIContractDefaultNameLanguageEnum(str, Enum):
    UNSPECIFIED = "Unspecified"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"

class SongForAPIContractPvServicesEnum(str, Enum):
    NOTHING = "Nothing"
    NICO_NICO_DOUGA = "NicoNicoDouga"
    YOUTUBE = "Youtube"
    SOUND_CLOUD = "SoundCloud"
    VIMEO = "Vimeo"
    PIAPRO = "Piapro"
    BILIBILI = "Bilibili"
    FILE = "File"
    LOCAL_FILE = "LocalFile"
    CREOFUGA = "Creofuga"
    BANDCAMP = "Bandcamp"

class SongForAPIContractSongTypeEnum(str, Enum):
    UNSPECIFIED = "Unspecified"
    ORIGINAL = "Original"
    REMASTER = "Remaster"
    REMIX = "Remix"
    COVER = "Cover"
    ARRANGEMENT = "Arrangement"
    INSTRUMENTAL = "Instrumental"
    MASHUP = "Mashup"
    MUSIC_PV = "MusicPV"
    DRAMA_PV = "DramaPV"
    LIVE = "Live"
    ILLUSTRATION = "Illustration"
    OTHER = "Other"

class SongForAPIContractStatusEnum(str, Enum):
    DRAFT = "Draft"
    FINISHED = "Finished"
    APPROVED = "Approved"
    LOCKED = "Locked"


@dataclass_json
@dataclasses.dataclass
class SongForAPIContract:
    additional_names: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalNames') }})
    albums: Optional[list[shared_albumcontract.AlbumContract]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('albums') }})
    artist_string: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artistString') }})
    artists: Optional[list[shared_artistforsongcontract.ArtistForSongContract]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artists') }})
    create_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    default_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultName') }})
    default_name_language: Optional[SongForAPIContractDefaultNameLanguageEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultNameLanguage') }})
    deleted: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    favorited_times: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('favoritedTimes') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    length_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lengthSeconds') }})
    lyrics: Optional[list[shared_lyricsforsongcontract.LyricsForSongContract]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lyrics') }})
    main_picture: Optional[shared_entrythumbforapicontract.EntryThumbForAPIContract] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mainPicture') }})
    merged_to: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mergedTo') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    names: Optional[list[shared_localizedstringcontract.LocalizedStringContract]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('names') }})
    original_version_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originalVersionId') }})
    publish_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    pv_services: Optional[SongForAPIContractPvServicesEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pvServices') }})
    pvs: Optional[list[shared_pvcontract.PvContract]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pvs') }})
    rating_score: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ratingScore') }})
    release_event: Optional[shared_releaseeventforapicontract.ReleaseEventForAPIContract] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('releaseEvent') }})
    song_type: Optional[SongForAPIContractSongTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('songType') }})
    status: Optional[SongForAPIContractStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: Optional[list[shared_tagusageforapicontract.TagUsageForAPIContract]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    thumb_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbUrl') }})
    version: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    web_links: Optional[list[shared_weblinkforapicontract.WebLinkForAPIContract]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webLinks') }})
    

@dataclass_json
@dataclasses.dataclass
class SongForAPIContractInput:
    additional_names: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalNames') }})
    albums: Optional[list[shared_albumcontract.AlbumContractInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('albums') }})
    artist_string: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artistString') }})
    artists: Optional[list[shared_artistforsongcontract.ArtistForSongContract]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artists') }})
    create_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    default_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultName') }})
    default_name_language: Optional[SongForAPIContractDefaultNameLanguageEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultNameLanguage') }})
    deleted: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    favorited_times: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('favoritedTimes') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    length_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lengthSeconds') }})
    lyrics: Optional[list[shared_lyricsforsongcontract.LyricsForSongContract]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lyrics') }})
    main_picture: Optional[shared_entrythumbforapicontract.EntryThumbForAPIContract] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mainPicture') }})
    merged_to: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mergedTo') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    names: Optional[list[shared_localizedstringcontract.LocalizedStringContract]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('names') }})
    original_version_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originalVersionId') }})
    publish_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    pv_services: Optional[SongForAPIContractPvServicesEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pvServices') }})
    pvs: Optional[list[shared_pvcontract.PvContract]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pvs') }})
    rating_score: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ratingScore') }})
    release_event: Optional[shared_releaseeventforapicontract.ReleaseEventForAPIContractInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('releaseEvent') }})
    song_type: Optional[SongForAPIContractSongTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('songType') }})
    status: Optional[SongForAPIContractStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: Optional[list[shared_tagusageforapicontract.TagUsageForAPIContract]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    thumb_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbUrl') }})
    version: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    web_links: Optional[list[shared_weblinkforapicontract.WebLinkForAPIContract]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webLinks') }})
    
