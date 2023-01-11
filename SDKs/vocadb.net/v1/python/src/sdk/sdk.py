

import requests

from . import utils

from .activityentryapi import ActivityEntryAPI
from .albumapi import AlbumAPI
from .artistapi import ArtistAPI
from .commentapi import CommentAPI
from .discussionapi import DiscussionAPI
from .entryapi import EntryAPI
from .entrytypesapi import EntryTypesAPI
from .pvapi import PvAPI
from .releaseeventapi import ReleaseEventAPI
from .releaseeventseriesapi import ReleaseEventSeriesAPI
from .resourcesapi import ResourcesAPI
from .songapi import SongAPI
from .songlistapi import SongListAPI
from .tagapi import TagAPI
from .userapi import UserAPI
from .venueapi import VenueAPI


SERVERS = [
	"https://vocadb.net",
]


class SDK:
    
    activity_entry_api: ActivityEntryAPI
    album_api: AlbumAPI
    artist_api: ArtistAPI
    comment_api: CommentAPI
    discussion_api: DiscussionAPI
    entry_api: EntryAPI
    entry_types_api: EntryTypesAPI
    pv_api: PvAPI
    release_event_api: ReleaseEventAPI
    release_event_series_api: ReleaseEventSeriesAPI
    resources_api: ResourcesAPI
    song_api: SongAPI
    song_list_api: SongListAPI
    tag_api: TagAPI
    user_api: UserAPI
    venue_api: VenueAPI

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        self._init_sdks()


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        self._init_sdks()
    

    def config_client(self, client: requests.Session):
        self._client = client
        self._init_sdks()
    
    
    def _init_sdks(self):
        
        self.activity_entry_api = ActivityEntryAPI(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.album_api = AlbumAPI(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.artist_api = ArtistAPI(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.comment_api = CommentAPI(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.discussion_api = DiscussionAPI(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.entry_api = EntryAPI(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.entry_types_api = EntryTypesAPI(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.pv_api = PvAPI(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.release_event_api = ReleaseEventAPI(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.release_event_series_api = ReleaseEventSeriesAPI(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.resources_api = ResourcesAPI(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.song_api = SongAPI(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.song_list_api = SongListAPI(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.tag_api = TagAPI(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.user_api = UserAPI(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.venue_api = VenueAPI(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
    
    