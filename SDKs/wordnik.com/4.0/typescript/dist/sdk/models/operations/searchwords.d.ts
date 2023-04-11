import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SearchWordsRequest extends SpeakeasyBase {
    /**
     * Search term is a Regular Expression
     */
    allowRegex?: string;
    /**
     * Search case sensitive
     */
    caseSensitive?: string;
    /**
     * Exclude these comma-delimited parts of speech (allowable values are noun, adjective, verb, adverb, interjection, pronoun, preposition, abbreviation, affix, article, auxiliary-verb, conjunction, definite-article, family-name, given-name, idiom, imperative, noun-plural, noun-posessive, past-participle, phrasal-prefix, proper-noun, proper-noun-plural, proper-noun-posessive, suffix, verb-intransitive, verb-transitive)
     */
    excludePartOfSpeech?: string;
    /**
     * Only include these comma-delimited parts of speech (allowable values are noun, adjective, verb, adverb, interjection, pronoun, preposition, abbreviation, affix, article, auxiliary-verb, conjunction, definite-article, family-name, given-name, idiom, imperative, noun-plural, noun-posessive, past-participle, phrasal-prefix, proper-noun, proper-noun-plural, proper-noun-posessive, suffix, verb-intransitive, verb-transitive)
     */
    includePartOfSpeech?: string;
    /**
     * Maximum number of results to return
     */
    limit?: number;
    /**
     * Maximum corpus frequency for terms
     */
    maxCorpusCount?: number;
    /**
     * Maximum dictionary definition count
     */
    maxDictionaryCount?: number;
    /**
     * Maximum word length
     */
    maxLength?: number;
    /**
     * Minimum corpus frequency for terms
     */
    minCorpusCount?: number;
    /**
     * Minimum number of dictionary entries for words returned
     */
    minDictionaryCount?: number;
    /**
     * Minimum word length
     */
    minLength?: number;
    /**
     * Search query
     */
    query: string;
    /**
     * Results to skip
     */
    skip?: number;
}
export declare class SearchWordsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
