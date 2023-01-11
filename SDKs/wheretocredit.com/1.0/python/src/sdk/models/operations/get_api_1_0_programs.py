import dataclasses
from typing import Optional
from ..shared import program as shared_program


@dataclasses.dataclass
class GetAPI10ProgramsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    programs: Optional[list[shared_program.Program]] = dataclasses.field(default=None)
    
