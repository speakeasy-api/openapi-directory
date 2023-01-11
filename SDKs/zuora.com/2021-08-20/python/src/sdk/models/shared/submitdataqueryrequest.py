import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SubmitDataQueryRequestCompressionEnum(str, Enum):
    NONE = "NONE"
    GZIP = "GZIP"
    ZIP = "ZIP"

class SubmitDataQueryRequestOutputTargetEnum(str, Enum):
    S3 = "S3"


@dataclass_json
@dataclasses.dataclass
class SubmitDataQueryRequestOutput:
    r"""SubmitDataQueryRequestOutput
    Additional information about the query results.
    
    """
    
    target: SubmitDataQueryRequestOutputTargetEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    
class SubmitDataQueryRequestOutputFormatEnum(str, Enum):
    JSON = "JSON"
    CSV = "CSV"
    TSV = "TSV"
    DSV = "DSV"

class SubmitDataQueryRequestSourceDataEnum(str, Enum):
    DATAHUB = "DATAHUB"
    LIVE = "LIVE"


@dataclass_json
@dataclasses.dataclass
class SubmitDataQueryRequest:
    compression: SubmitDataQueryRequestCompressionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('compression') }})
    output: SubmitDataQueryRequestOutput = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('output') }})
    output_format: SubmitDataQueryRequestOutputFormatEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputFormat') }})
    query: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    column_separator: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnSeparator') }})
    encryption_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionKey') }})
    read_deleted: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readDeleted') }})
    source_data: Optional[SubmitDataQueryRequestSourceDataEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceData') }})
    use_index_join: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useIndexJoin') }})
    
