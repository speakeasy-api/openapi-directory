package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnglishTranslatedStringContract {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("english")
    public String english;
    public EnglishTranslatedStringContract withEnglish(String english) {
        this.english = english;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("original")
    public String original;
    public EnglishTranslatedStringContract withOriginal(String original) {
        this.original = original;
        return this;
    }
}