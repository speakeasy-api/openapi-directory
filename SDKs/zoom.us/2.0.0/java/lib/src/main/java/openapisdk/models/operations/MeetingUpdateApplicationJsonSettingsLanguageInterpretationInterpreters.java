package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MeetingUpdateApplicationJsonSettingsLanguageInterpretationInterpreters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public MeetingUpdateApplicationJsonSettingsLanguageInterpretationInterpreters withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languages")
    public String languages;
    public MeetingUpdateApplicationJsonSettingsLanguageInterpretationInterpreters withLanguages(String languages) {
        this.languages = languages;
        return this;
    }
}