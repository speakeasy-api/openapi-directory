import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class OnDemandGenreInteractionsPage:
    r"""OnDemandGenreInteractionsPage
    Interactions for On Demand pages that are in this genre.
    """
    
    added: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added') }})
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandGenreInteractions:
    page: OnDemandGenreInteractionsPage = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandGenreMetadataConnectionsPages:
    r"""OnDemandGenreMetadataConnectionsPages
    Information about the On Demand pages related to this group.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandGenreMetadataConnections:
    r"""OnDemandGenreMetadataConnections
    A collection of information connected to this resource.
    """
    
    pages: OnDemandGenreMetadataConnectionsPages = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandGenreMetadata:
    connections: OnDemandGenreMetadataConnections = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandGenre:
    canonical: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('canonical') }})
    interactions: OnDemandGenreInteractions = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interactions') }})
    link: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    metadata: OnDemandGenreMetadata = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
