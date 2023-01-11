import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import odataerror as shared_odataerror


@dataclass_json
@dataclasses.dataclass
class GraphError:
    r"""GraphError
    Active Directory error information.
    """
    
    odata_error: Optional[shared_odataerror.OdataError] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('odata.error') }})
    
