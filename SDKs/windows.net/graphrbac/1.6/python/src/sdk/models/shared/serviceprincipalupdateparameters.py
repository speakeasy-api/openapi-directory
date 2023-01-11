import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ServicePrincipalUpdateParameters:
    r"""ServicePrincipalUpdateParameters
    Active Directory service principal common properties shared among GET, POST and PATCH
    """
    
    account_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountEnabled') }})
    app_role_assignment_required: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appRoleAssignmentRequired') }})
    key_credentials: Optional[list[dict[str, dict[str, Any]]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyCredentials') }})
    password_credentials: Optional[list[dict[str, dict[str, Any]]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passwordCredentials') }})
    service_principal_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('servicePrincipalType') }})
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
