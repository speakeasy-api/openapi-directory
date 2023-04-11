import { SpeakeasyBase } from "../../../internal/utils";
export declare class BannersBanners extends SpeakeasyBase {
    /**
     * Banner area.
     */
    area?: string;
    /**
     * Banner HTML.
     */
    html?: string;
    /**
     * Banner id.
     */
    id?: string;
    /**
     * Banner name.
     */
    name?: string;
}
/**
 * OK
 */
export declare class Banners extends SpeakeasyBase {
    banners?: BannersBanners[];
}
