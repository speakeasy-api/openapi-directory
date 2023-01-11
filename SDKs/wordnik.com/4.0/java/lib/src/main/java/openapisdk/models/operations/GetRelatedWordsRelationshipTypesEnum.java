package openapisdk.models.operations;


public enum GetRelatedWordsRelationshipTypesEnum {
    SYNONYM("synonym"),
    ANTONYM("antonym"),
    VARIANT("variant"),
    EQUIVALENT("equivalent"),
    CROSS_REFERENCE("cross-reference"),
    RELATED_WORD("related-word"),
    RHYME("rhyme"),
    FORM("form"),
    ETYMOLOGICALLY_RELATED_TERM("etymologically-related-term"),
    HYPERNYM("hypernym"),
    HYPONYM("hyponym"),
    INFLECTED_FORM("inflected-form"),
    PRIMARY("primary"),
    SAME_CONTEXT("same-context"),
    VERB_FORM("verb-form"),
    VERB_STEM("verb-stem"),
    HAS_TOPIC("has_topic");

    public final String value;

    private GetRelatedWordsRelationshipTypesEnum(String value) {
        this.value = value;
    }
}
