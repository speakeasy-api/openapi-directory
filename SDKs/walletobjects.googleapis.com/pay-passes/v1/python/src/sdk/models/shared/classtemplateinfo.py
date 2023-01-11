import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cardbarcodesectiondetails as shared_cardbarcodesectiondetails
from ..shared import cardtemplateoverride as shared_cardtemplateoverride
from ..shared import detailstemplateoverride as shared_detailstemplateoverride
from ..shared import listtemplateoverride as shared_listtemplateoverride


@dataclass_json
@dataclasses.dataclass
class ClassTemplateInfo:
    card_barcode_section_details: Optional[shared_cardbarcodesectiondetails.CardBarcodeSectionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cardBarcodeSectionDetails') }})
    card_template_override: Optional[shared_cardtemplateoverride.CardTemplateOverride] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cardTemplateOverride') }})
    details_template_override: Optional[shared_detailstemplateoverride.DetailsTemplateOverride] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detailsTemplateOverride') }})
    list_template_override: Optional[shared_listtemplateoverride.ListTemplateOverride] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listTemplateOverride') }})
    
