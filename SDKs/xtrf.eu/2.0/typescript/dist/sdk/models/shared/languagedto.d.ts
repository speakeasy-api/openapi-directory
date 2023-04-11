import { SpeakeasyBase } from "../../../internal/utils";
/**
 * language (ie. Polish)
 */
export declare class LanguageDTO extends SpeakeasyBase {
    /**
     * should this value be available on the XTRF selection lists
     */
    active?: boolean;
    /**
     * should this value be set by default in XTRF selection lists
     */
    default?: boolean;
    /**
     * internal identifier
     */
    id?: number;
    /**
     * <a href="http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes">ISO 639-1 code</a>
     */
    iso6391?: string;
    /**
     * <a href="http://en.wikipedia.org/wiki/List_of_ISO_639-2_codes">ISO 639-2 code</a>
     */
    iso6392?: string;
    /**
     * localised name (formatted in the current user's locale)
     */
    name?: string;
    /**
     * should this value be available on the top of XTRF selection lists, in the Preferred section
     */
    preferred?: boolean;
    /**
     * specific symbol or abbreviation
     */
    symbol?: string;
}
