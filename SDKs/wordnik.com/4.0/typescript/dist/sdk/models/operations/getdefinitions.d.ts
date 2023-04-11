import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Return a closed set of XML tags in response
 */
export declare enum GetDefinitionsIncludeTagsEnum {
    False = "false",
    True = "true"
}
/**
 * CSV list of part-of-speech types
 */
export declare enum GetDefinitionsPartOfSpeechEnum {
    Noun = "noun",
    Adjective = "adjective",
    Verb = "verb",
    Adverb = "adverb",
    Interjection = "interjection",
    Pronoun = "pronoun",
    Preposition = "preposition",
    Abbreviation = "abbreviation",
    Affix = "affix",
    Article = "article",
    AuxiliaryVerb = "auxiliary-verb",
    Conjunction = "conjunction",
    DefiniteArticle = "definite-article",
    FamilyName = "family-name",
    GivenName = "given-name",
    Idiom = "idiom",
    Imperative = "imperative",
    NounPlural = "noun-plural",
    NounPosessive = "noun-posessive",
    PastParticiple = "past-participle",
    PhrasalPrefix = "phrasal-prefix",
    ProperNoun = "proper-noun",
    ProperNounPlural = "proper-noun-plural",
    ProperNounPosessive = "proper-noun-posessive",
    Suffix = "suffix",
    VerbIntransitive = "verb-intransitive",
    VerbTransitive = "verb-transitive"
}
/**
 * Source dictionary to return definitions from.  If 'all' is received, results are returned from all sources. If multiple values are received (e.g. 'century,wiktionary'), results are returned from the first specified dictionary that has definitions. If left blank, results are returned from the first dictionary that has definitions. By default, dictionaries are searched in this order: ahd-5, wiktionary, webster, century, wordnet
 */
export declare enum GetDefinitionsSourceDictionariesEnum {
    All = "all",
    Ahd5 = "ahd-5",
    Century = "century",
    Wiktionary = "wiktionary",
    Webster = "webster",
    Wordnet = "wordnet"
}
/**
 * If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.
 */
export declare enum GetDefinitionsUseCanonicalEnum {
    False = "false",
    True = "true"
}
export declare class GetDefinitionsRequest extends SpeakeasyBase {
    /**
     * Return related words with definitions
     */
    includeRelated?: string;
    /**
     * Return a closed set of XML tags in response
     */
    includeTags?: GetDefinitionsIncludeTagsEnum;
    /**
     * Maximum number of results to return
     */
    limit?: number;
    /**
     * CSV list of part-of-speech types
     */
    partOfSpeech?: GetDefinitionsPartOfSpeechEnum;
    /**
     * Source dictionary to return definitions from.  If 'all' is received, results are returned from all sources. If multiple values are received (e.g. 'century,wiktionary'), results are returned from the first specified dictionary that has definitions. If left blank, results are returned from the first dictionary that has definitions. By default, dictionaries are searched in this order: ahd-5, wiktionary, webster, century, wordnet
     */
    sourceDictionaries?: GetDefinitionsSourceDictionariesEnum;
    /**
     * If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.
     */
    useCanonical?: GetDefinitionsUseCanonicalEnum;
    /**
     * Word to return definitions for
     */
    word: string;
}
export declare class GetDefinitionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
