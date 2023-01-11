import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostQuoteDocType:
    document_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentType') }})
    quote_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('quoteId') }})
    server_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverUrl') }})
    session_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionId') }})
    template_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateId') }})
    apiuser: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiuser') }})
    locale: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locale') }})
    password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    sandbox: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sandbox') }})
    token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    use_sfdc_locale: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useSFDCLocale') }})
    username: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    zquotes_major_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zquotesMajorVersion') }})
    zquotes_minor_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zquotesMinorVersion') }})
    
