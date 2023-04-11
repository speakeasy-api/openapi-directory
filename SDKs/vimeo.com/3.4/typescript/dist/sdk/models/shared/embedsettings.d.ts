import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A collection of information about the buttons that appear on the interface of the embeddable player.
 */
export declare class EmbedSettingsButtons extends SpeakeasyBase {
    /**
     * Whether the Embed button appears in the embeddable player for this video.
     */
    embed: boolean;
    /**
     * Whether the Fullscreen button appears in the embeddable player for this video.
     */
    fullscreen: boolean;
    /**
     * Whether the HD button appears in the embeddable player for this video.
     */
    hd: boolean;
    /**
     * Whether the Like button appears in the embeddable player for this video.
     */
    like: boolean;
    /**
     * Whether the Scaling button appears in the embeddable player for this video.
     */
    scaling: boolean;
    /**
     * Whether the Share button appears in the embeddable player for this video.
     */
    share: boolean;
    /**
     * Whether the Watch Later button appears in the embeddable player for this video.
     */
    watchlater: boolean;
}
/**
 * A collection of information relating to custom logos in the embeddable player.
 */
export declare class EmbedSettingsLogosCustom extends SpeakeasyBase {
    /**
     * Whether the custom logo appears in the embeddable player.
     */
    active: boolean;
    /**
     * The URL that loads upon clicking the custom logo.
     */
    link: string;
    /**
     * Whether the custom logo appears even when the player interface is hidden.
     */
    sticky: boolean;
}
/**
 * A collection of information about the logo in the corner of the embeddable player.
 */
export declare class EmbedSettingsLogos extends SpeakeasyBase {
    /**
     * A collection of information relating to custom logos in the embeddable player.
     */
    custom: EmbedSettingsLogosCustom;
    /**
     * Whether the Vimeo logo appears in the embeddable player for this video.
     */
    vimeo: boolean;
}
/**
 * How the embeddable player handles the video title:
 *
 * @remarks
 *
 * Option descriptions:
 *  * `hide` - The title is hidden.
 *  * `show` - The title is shown.
 *
 */
export declare enum EmbedSettingsTitleNameEnum {
    Hide = "hide",
    Show = "show",
    User = "user"
}
/**
 * How the embeddable player handles the video owner's information:
 *
 * @remarks
 *
 * Option descriptions:
 *  * `hide` - The owner's information is hidden.
 *  * `show` - The owner's information is shown.
 *
 */
export declare enum EmbedSettingsTitleOwnerEnum {
    Hide = "hide",
    Show = "show",
    User = "user"
}
/**
 * How the embeddable player handles the video owner's portrait:
 *
 * @remarks
 *
 * Option descriptions:
 *  * `hide` - The owner's portrait is hidden
 *  * `show` - The owner's portrait is shown.
 *
 */
export declare enum EmbedSettingsTitlePortraitEnum {
    Hide = "hide",
    Show = "show",
    User = "user"
}
/**
 * A collection of information relating to the embeddable player's title bar.
 */
export declare class EmbedSettingsTitle extends SpeakeasyBase {
    /**
     * How the embeddable player handles the video title:
     *
     * @remarks
     *
     * Option descriptions:
     *  * `hide` - The title is hidden.
     *  * `show` - The title is shown.
     *
     */
    name: EmbedSettingsTitleNameEnum;
    /**
     * How the embeddable player handles the video owner's information:
     *
     * @remarks
     *
     * Option descriptions:
     *  * `hide` - The owner's information is hidden.
     *  * `show` - The owner's information is shown.
     *
     */
    owner: EmbedSettingsTitleOwnerEnum;
    /**
     * How the embeddable player handles the video owner's portrait:
     *
     * @remarks
     *
     * Option descriptions:
     *  * `hide` - The owner's portrait is hidden
     *  * `show` - The owner's portrait is shown.
     *
     */
    portrait: EmbedSettingsTitlePortraitEnum;
}
export declare class EmbedSettings extends SpeakeasyBase {
    /**
     * A collection of information about the buttons that appear on the interface of the embeddable player.
     */
    buttons: EmbedSettingsButtons;
    /**
     * The primary player color, which controls the color of the progress bar, buttons, and more.
     */
    color: string;
    /**
     * A collection of information about the logo in the corner of the embeddable player.
     */
    logos: EmbedSettingsLogos;
    /**
     * Whether the playbar appears in the embeddable player for this video.
     */
    playbar: boolean;
    /**
     * Whether the speed controls appear in the embeddable player for this video.
     */
    speed: boolean;
    /**
     * A collection of information relating to the embeddable player's title bar.
     */
    title: EmbedSettingsTitle;
    /**
     * The URI of the embed preset.
     */
    uri?: string;
    /**
     * Whether the volume controls appear in the embeddable player for this video.
     */
    volume: boolean;
}
