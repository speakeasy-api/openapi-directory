import { SpeakeasyBase } from "../../../internal/utils";
import { ContentProvider } from "./contentprovider";
/**
 * No response was specified
 */
export declare class WordOfTheDay extends SpeakeasyBase {
    category?: string;
    contentProvider?: ContentProvider;
    createdAt?: Date;
    createdBy?: string;
    definitions?: any[];
    examples?: any[];
    htmlExtra?: string;
    id: number;
    note?: string;
    parentId?: string;
    publishDate?: Date;
    word?: string;
}
