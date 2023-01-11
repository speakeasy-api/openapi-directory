package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MeetingCreateApplicationJsonSettingsLanguageInterpretationInterpreters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public MeetingCreateApplicationJsonSettingsLanguageInterpretationInterpreters withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languages")
    public String languages;
    public MeetingCreateApplicationJsonSettingsLanguageInterpretationInterpreters withLanguages(String languages) {
        this.languages = languages;
        return this;
    }
}