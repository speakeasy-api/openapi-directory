import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Exclude these comma-delimited source dictionaries
 */
export declare enum ReverseDictionaryExcludeSourceDictionariesEnum {
    Ahd5 = "ahd-5",
    Century = "century",
    Cmu = "cmu",
    Macmillan = "macmillan",
    Wiktionary = "wiktionary",
    Webster = "webster",
    Wordnet = "wordnet"
}
/**
 * Only include these comma-delimited source dictionaries
 */
export declare enum ReverseDictionaryIncludeSourceDictionariesEnum {
    Ahd5 = "ahd-5",
    Century = "century",
    Cmu = "cmu",
    Macmillan = "macmillan",
    Wiktionary = "wiktionary",
    Webster = "webster",
    Wordnet = "wordnet"
}
/**
 * Return a closed set of XML tags in response
 */
export declare enum ReverseDictionaryIncludeTagsEnum {
    False = "false",
    True = "true"
}
/**
 * Attribute to sort by
 */
export declare enum ReverseDictionarySortByEnum {
    Alpha = "alpha",
    Count = "count"
}
/**
 * Sort direction
 */
export declare enum ReverseDictionarySortOrderEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class ReverseDictionaryRequest extends SpeakeasyBase {
    /**
     * Exclude these comma-delimited parts of speech (allowable values are noun, adjective, verb, adverb, interjection, pronoun, preposition, abbreviation, affix, article, auxiliary-verb, conjunction, definite-article, family-name, given-name, idiom, imperative, noun-plural, noun-posessive, past-participle, phrasal-prefix, proper-noun, proper-noun-plural, proper-noun-posessive, suffix, verb-intransitive, verb-transitive)
     */
    excludePartOfSpeech?: string;
    /**
     * Exclude these comma-delimited source dictionaries
     */
    excludeSourceDictionaries?: ReverseDictionaryExcludeSourceDictionariesEnum;
    /**
     * Expand terms
     */
    expandTerms?: string;
    /**
     * Restricts words and finds closest sense
     */
    findSenseForWord?: string;
    /**
     * Only include these comma-delimited parts of speech (allowable values are noun, adjective, verb, adverb, interjection, pronoun, preposition, abbreviation, affix, article, auxiliary-verb, conjunction, definite-article, family-name, given-name, idiom, imperative, noun-plural, noun-posessive, past-participle, phrasal-prefix, proper-noun, proper-noun-plural, proper-noun-posessive, suffix, verb-intransitive, verb-transitive)
     */
    includePartOfSpeech?: string;
    /**
     * Only include these comma-delimited source dictionaries
     */
    includeSourceDictionaries?: ReverseDictionaryIncludeSourceDictionariesEnum;
    /**
     * Return a closed set of XML tags in response
     */
    includeTags?: ReverseDictionaryIncludeTagsEnum;
    /**
     * Maximum number of results to return
     */
    limit?: number;
    /**
     * Maximum corpus frequency for terms
     */
    maxCorpusCount?: number;
    /**
     * Maximum word length
     */
    maxLength?: number;
    /**
     * Minimum corpus frequency for terms
     */
    minCorpusCount?: number;
    /**
     * Minimum word length
     */
    minLength?: number;
    /**
     * Search term
     */
    query: string;
    /**
     * Results to skip
     */
    skip?: string;
    /**
     * Attribute to sort by
     */
    sortBy?: ReverseDictionarySortByEnum;
    /**
     * Sort direction
     */
    sortOrder?: ReverseDictionarySortOrderEnum;
}
export declare class ReverseDictionaryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
