import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import getentityconnectionsarrayitemstype as shared_getentityconnectionsarrayitemstype


@dataclass_json
@dataclasses.dataclass
class GetEntityConnectionsResponseType:
    entity_connections: Optional[list[shared_getentityconnectionsarrayitemstype.GetEntityConnectionsArrayItemsType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityConnections') }})
    next_page: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPage') }})
    success: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    
