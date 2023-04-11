import { SpeakeasyBase } from "../../../internal/utils";
import { ContentProvider } from "./contentprovider";
import { ScoredWord } from "./scoredword";
import { Sentence } from "./sentence";
/**
 * No response was specified
 */
export declare class Example extends SpeakeasyBase {
    documentId?: number;
    exampleId?: number;
    id?: number;
    provider?: ContentProvider;
    rating?: number;
    score?: ScoredWord;
    sentence?: Sentence;
    text?: string;
    title?: string;
    url?: string;
    word?: string;
    year?: number;
}
