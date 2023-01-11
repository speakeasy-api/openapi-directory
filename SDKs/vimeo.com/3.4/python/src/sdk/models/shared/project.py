import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import user as shared_user


@dataclass_json
@dataclasses.dataclass
class ProjectMetadataConnectionsVideos:
    r"""ProjectMetadataConnectionsVideos
    A standard connection object indicating how to get all the videos in this project.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class ProjectMetadataConnections:
    r"""ProjectMetadataConnections
    A list of resource URIs related to the project.
    """
    
    videos: ProjectMetadataConnectionsVideos = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    

@dataclass_json
@dataclasses.dataclass
class ProjectMetadata:
    r"""ProjectMetadata
    The project's metadata.
    """
    
    connections: ProjectMetadataConnections = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    

@dataclass_json
@dataclasses.dataclass
class Project:
    created_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_time') }})
    metadata: ProjectMetadata = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    modified_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('modified_time') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    resource_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_key') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    user: shared_user.User = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
