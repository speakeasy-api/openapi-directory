import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Podcast model
 */
export declare class Podcast extends SpeakeasyBase {
    author?: string;
    block?: boolean;
    categories: string[];
    copyright?: string;
    country?: string;
    description: string;
    explicit?: boolean;
    image?: string;
    key?: string;
    keywords?: string[];
    language: string;
    link?: string;
    ownerEmail?: string;
    ownerName?: string;
    showType?: string;
    subtitle?: string;
    summary: string;
    title: string;
}
