import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import statement as shared_statement


@dataclass_json
@dataclasses.dataclass
class StatementResponse:
    statement: Optional[list[shared_statement.Statement]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statement') }})
    
