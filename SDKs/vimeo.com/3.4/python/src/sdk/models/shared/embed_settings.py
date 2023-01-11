import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class EmbedSettingsButtons:
    r"""EmbedSettingsButtons
    A collection of information about the buttons that appear on the interface of the embeddable player.
    """
    
    embed: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('embed') }})
    fullscreen: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullscreen') }})
    hd: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hd') }})
    like: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('like') }})
    scaling: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scaling') }})
    share: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('share') }})
    watchlater: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('watchlater') }})
    

@dataclass_json
@dataclasses.dataclass
class EmbedSettingsLogosCustom:
    r"""EmbedSettingsLogosCustom
    A collection of information relating to custom logos in the embeddable player.
    """
    
    active: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    link: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    sticky: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sticky') }})
    

@dataclass_json
@dataclasses.dataclass
class EmbedSettingsLogos:
    r"""EmbedSettingsLogos
    A collection of information about the logo in the corner of the embeddable player.
    """
    
    custom: EmbedSettingsLogosCustom = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom') }})
    vimeo: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('vimeo') }})
    
class EmbedSettingsTitleNameEnum(str, Enum):
    HIDE = "hide"
    SHOW = "show"
    USER = "user"

class EmbedSettingsTitleOwnerEnum(str, Enum):
    HIDE = "hide"
    SHOW = "show"
    USER = "user"

class EmbedSettingsTitlePortraitEnum(str, Enum):
    HIDE = "hide"
    SHOW = "show"
    USER = "user"


@dataclass_json
@dataclasses.dataclass
class EmbedSettingsTitle:
    r"""EmbedSettingsTitle
    A collection of information relating to the embeddable player's title bar.
    """
    
    name: EmbedSettingsTitleNameEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    owner: EmbedSettingsTitleOwnerEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    portrait: EmbedSettingsTitlePortraitEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portrait') }})
    

@dataclass_json
@dataclasses.dataclass
class EmbedSettings:
    buttons: EmbedSettingsButtons = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('buttons') }})
    color: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    logos: EmbedSettingsLogos = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('logos') }})
    playbar: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('playbar') }})
    speed: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('speed') }})
    title: EmbedSettingsTitle = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    volume: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('volume') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
