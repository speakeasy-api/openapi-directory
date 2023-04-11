import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetRandomWordRequest extends SpeakeasyBase {
    /**
     * CSV part-of-speech values to exclude (allowable values are noun, adjective, verb, adverb, interjection, pronoun, preposition, abbreviation, affix, article, auxiliary-verb, conjunction, definite-article, family-name, given-name, idiom, imperative, noun-plural, noun-posessive, past-participle, phrasal-prefix, proper-noun, proper-noun-plural, proper-noun-posessive, suffix, verb-intransitive, verb-transitive)
     */
    excludePartOfSpeech?: string;
    /**
     * Only return words with dictionary definitions
     */
    hasDictionaryDef?: string;
    /**
     * CSV part-of-speech values to include (allowable values are noun, adjective, verb, adverb, interjection, pronoun, preposition, abbreviation, affix, article, auxiliary-verb, conjunction, definite-article, family-name, given-name, idiom, imperative, noun-plural, noun-posessive, past-participle, phrasal-prefix, proper-noun, proper-noun-plural, proper-noun-posessive, suffix, verb-intransitive, verb-transitive)
     */
    includePartOfSpeech?: string;
    /**
     * Maximum corpus frequency for terms
     */
    maxCorpusCount?: number;
    /**
     * Maximum dictionary count
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
     * Minimum dictionary count
     */
    minDictionaryCount?: number;
    /**
     * Minimum word length
     */
    minLength?: number;
}
export declare class GetRandomWordResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
