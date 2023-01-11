package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MeetingCreateMultipartFormDataSettingsLanguageInterpretationInterpreters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public MeetingCreateMultipartFormDataSettingsLanguageInterpretationInterpreters withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languages")
    public String languages;
    public MeetingCreateMultipartFormDataSettingsLanguageInterpretationInterpreters withLanguages(String languages) {
        this.languages = languages;
        return this;
    }
}