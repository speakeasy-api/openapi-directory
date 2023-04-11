import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The code that uniquely identifies this content rating:
 *
 * @remarks
 *
 * Option descriptions:
 *  * `drugs` - Drug or alcohol use.
 *  * `language` - Profanity or sexually suggestive content.
 *  * `nudity` - Nudity.
 *  * `safe` - Suitable for all audiences.
 *  * `unrated` - No rating.
 *  * `violence` - Violent or graphic content.
 *
 */
export declare enum ContentRatingCodeEnum {
    Drugs = "drugs",
    Language = "language",
    Nudity = "nudity",
    Safe = "safe",
    Unrated = "unrated",
    Violence = "violence"
}
export declare class ContentRating extends SpeakeasyBase {
    /**
     * The code that uniquely identifies this content rating:
     *
     * @remarks
     *
     * Option descriptions:
     *  * `drugs` - Drug or alcohol use.
     *  * `language` - Profanity or sexually suggestive content.
     *  * `nudity` - Nudity.
     *  * `safe` - Suitable for all audiences.
     *  * `unrated` - No rating.
     *  * `violence` - Violent or graphic content.
     *
     */
    code: ContentRatingCodeEnum;
    /**
     * The description of this content rating.
     */
    name: string;
    /**
     * The canonical relative URI of the content rating.
     */
    uri: string;
}
