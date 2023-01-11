package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MeetingCreate201ApplicationJsonSettingsLanguageInterpretationInterpreters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public MeetingCreate201ApplicationJsonSettingsLanguageInterpretationInterpreters withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languages")
    public String languages;
    public MeetingCreate201ApplicationJsonSettingsLanguageInterpretationInterpreters withLanguages(String languages) {
        this.languages = languages;
        return this;
    }
}