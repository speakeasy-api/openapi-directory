import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Limits the total results per type of relationship type
 */
export declare enum GetRelatedWordsRelationshipTypesEnum {
    Synonym = "synonym",
    Antonym = "antonym",
    Variant = "variant",
    Equivalent = "equivalent",
    CrossReference = "cross-reference",
    RelatedWord = "related-word",
    Rhyme = "rhyme",
    Form = "form",
    EtymologicallyRelatedTerm = "etymologically-related-term",
    Hypernym = "hypernym",
    Hyponym = "hyponym",
    InflectedForm = "inflected-form",
    Primary = "primary",
    SameContext = "same-context",
    VerbForm = "verb-form",
    VerbStem = "verb-stem",
    HasTopic = "has_topic"
}
/**
 * If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.
 */
export declare enum GetRelatedWordsUseCanonicalEnum {
    False = "false",
    True = "true"
}
export declare class GetRelatedWordsRequest extends SpeakeasyBase {
    /**
     * Restrict to the supplied relationship types
     */
    limitPerRelationshipType?: number;
    /**
     * Limits the total results per type of relationship type
     */
    relationshipTypes?: GetRelatedWordsRelationshipTypesEnum;
    /**
     * If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.
     */
    useCanonical?: GetRelatedWordsUseCanonicalEnum;
    /**
     * Word to fetch relationships for
     */
    word: string;
}
export declare class GetRelatedWordsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
