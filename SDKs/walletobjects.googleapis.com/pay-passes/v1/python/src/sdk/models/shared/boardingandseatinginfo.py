import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import image as shared_image
from ..shared import localizedstring as shared_localizedstring

class BoardingAndSeatingInfoBoardingDoorEnum(str, Enum):
    BOARDING_DOOR_UNSPECIFIED = "BOARDING_DOOR_UNSPECIFIED"
    FRONT_UPPER = "FRONT"
    FRONT_LOWER = "front"
    BACK_UPPER = "BACK"
    BACK_LOWER = "back"


@dataclass_json
@dataclasses.dataclass
class BoardingAndSeatingInfo:
    boarding_door: Optional[BoardingAndSeatingInfoBoardingDoorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boardingDoor') }})
    boarding_group: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boardingGroup') }})
    boarding_position: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boardingPosition') }})
    boarding_privilege_image: Optional[shared_image.Image] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boardingPrivilegeImage') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    seat_assignment: Optional[shared_localizedstring.LocalizedString] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seatAssignment') }})
    seat_class: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seatClass') }})
    seat_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seatNumber') }})
    sequence_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sequenceNumber') }})
    
