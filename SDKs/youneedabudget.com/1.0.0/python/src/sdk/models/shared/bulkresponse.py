import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class BulkResponseDataBulk:
    duplicate_import_ids: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('duplicate_import_ids') }})
    transaction_ids: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transaction_ids') }})
    

@dataclass_json
@dataclasses.dataclass
class BulkResponseData:
    bulk: BulkResponseDataBulk = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bulk') }})
    

@dataclass_json
@dataclasses.dataclass
class BulkResponse:
    data: BulkResponseData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
