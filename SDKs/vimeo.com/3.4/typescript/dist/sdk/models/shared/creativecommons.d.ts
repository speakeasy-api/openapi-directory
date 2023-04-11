import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The code that uniquely identifies this Creative Commons license:
 *
 * @remarks
 *
 * Option descriptions:
 *  * `by` - Attribution
 *  * `by-nc` - Attribution Non-Commercial
 *  * `by-nc-nd` - Attribution Non-Commercial No Derivatives
 *  * `by-nc-sa` - Attribution Non-Commercial Share Alike
 *  * `by-nd` - Attribution No Derivatives
 *  * `by-sa` - Attribution Share Alike
 *  * `cc0` - Public Domain Dedication
 *
 */
export declare enum CreativeCommonsCodeEnum {
    By = "by",
    ByNc = "by-nc",
    ByNcNd = "by-nc-nd",
    ByNcSa = "by-nc-sa",
    ByNd = "by-nd",
    BySa = "by-sa",
    Cc0 = "cc0"
}
export declare class CreativeCommons extends SpeakeasyBase {
    /**
     * The code that uniquely identifies this Creative Commons license:
     *
     * @remarks
     *
     * Option descriptions:
     *  * `by` - Attribution
     *  * `by-nc` - Attribution Non-Commercial
     *  * `by-nc-nd` - Attribution Non-Commercial No Derivatives
     *  * `by-nc-sa` - Attribution Non-Commercial Share Alike
     *  * `by-nd` - Attribution No Derivatives
     *  * `by-sa` - Attribution Share Alike
     *  * `cc0` - Public Domain Dedication
     *
     */
    code: CreativeCommonsCodeEnum;
    /**
     * The description of this Creative Commons license.
     */
    name: string;
    /**
     * The canonical relative URI of the Creative Commons license.
     */
    uri: string;
}
