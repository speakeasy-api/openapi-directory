import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GetStoredCredentialProfilesResponseProfilesConsentAgreementSrcEnum(str, Enum):
    EXTERNAL = "External"

class GetStoredCredentialProfilesResponseProfilesStatusEnum(str, Enum):
    AGREED = "Agreed"
    ACTIVE = "Active"
    CANCELLED = "Cancelled"
    EXPIRED = "Expired"

class GetStoredCredentialProfilesResponseProfilesTypeEnum(str, Enum):
    RECURRING = "Recurring"
    UNSCHEDULED = "Unscheduled"


@dataclass_json
@dataclasses.dataclass
class GetStoredCredentialProfilesResponseProfiles:
    r"""GetStoredCredentialProfilesResponseProfiles
    Container for stored credential profiles.
    
    """
    
    activated_on: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activatedOn'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    agreed_on: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agreedOn'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    brand: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('brand') }})
    cancelled_on: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancelledOn'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    consent_agreement_ref: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consentAgreementRef') }})
    consent_agreement_src: Optional[GetStoredCredentialProfilesResponseProfilesConsentAgreementSrcEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consentAgreementSrc') }})
    expired_on: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiredOn'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    payment_method_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentMethodId') }})
    status: Optional[GetStoredCredentialProfilesResponseProfilesStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    type: Optional[GetStoredCredentialProfilesResponseProfilesTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class GetStoredCredentialProfilesResponse:
    profiles: Optional[GetStoredCredentialProfilesResponseProfiles] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profiles') }})
    success: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    
