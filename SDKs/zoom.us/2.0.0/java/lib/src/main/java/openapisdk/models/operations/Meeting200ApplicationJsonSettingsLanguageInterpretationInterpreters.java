package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Meeting200ApplicationJsonSettingsLanguageInterpretationInterpreters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public Meeting200ApplicationJsonSettingsLanguageInterpretationInterpreters withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languages")
    public String languages;
    public Meeting200ApplicationJsonSettingsLanguageInterpretationInterpreters withLanguages(String languages) {
        this.languages = languages;
        return this;
    }
}