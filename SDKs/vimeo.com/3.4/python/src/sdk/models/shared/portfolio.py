import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PortfolioMetadataConnectionsVideos:
    r"""PortfolioMetadataConnectionsVideos
    Information about the videos contained within this portfolio.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class PortfolioMetadataConnections:
    r"""PortfolioMetadataConnections
    A list of resource URIs related to the album.
    """
    
    videos: PortfolioMetadataConnectionsVideos = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    

@dataclass_json
@dataclasses.dataclass
class PortfolioMetadata:
    r"""PortfolioMetadata
    Metadata about the album.
    """
    
    connections: PortfolioMetadataConnections = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    
class PortfolioSortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    CLIPS = "clips"
    MODIFIED = "modified"
    RECENT = "recent"


@dataclass_json
@dataclasses.dataclass
class Portfolio:
    created_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_time') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    link: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    metadata: PortfolioMetadata = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    modified_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('modified_time') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    sort: PortfolioSortEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sort') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
