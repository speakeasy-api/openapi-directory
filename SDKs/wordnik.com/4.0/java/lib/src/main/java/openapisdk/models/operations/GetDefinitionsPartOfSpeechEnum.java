package openapisdk.models.operations;


public enum GetDefinitionsPartOfSpeechEnum {
    NOUN("noun"),
    ADJECTIVE("adjective"),
    VERB("verb"),
    ADVERB("adverb"),
    INTERJECTION("interjection"),
    PRONOUN("pronoun"),
    PREPOSITION("preposition"),
    ABBREVIATION("abbreviation"),
    AFFIX("affix"),
    ARTICLE("article"),
    AUXILIARY_VERB("auxiliary-verb"),
    CONJUNCTION("conjunction"),
    DEFINITE_ARTICLE("definite-article"),
    FAMILY_NAME("family-name"),
    GIVEN_NAME("given-name"),
    IDIOM("idiom"),
    IMPERATIVE("imperative"),
    NOUN_PLURAL("noun-plural"),
    NOUN_POSESSIVE("noun-posessive"),
    PAST_PARTICIPLE("past-participle"),
    PHRASAL_PREFIX("phrasal-prefix"),
    PROPER_NOUN("proper-noun"),
    PROPER_NOUN_PLURAL("proper-noun-plural"),
    PROPER_NOUN_POSESSIVE("proper-noun-posessive"),
    SUFFIX("suffix"),
    VERB_INTRANSITIVE("verb-intransitive"),
    VERB_TRANSITIVE("verb-transitive");

    public final String value;

    private GetDefinitionsPartOfSpeechEnum(String value) {
        this.value = value;
    }
}
