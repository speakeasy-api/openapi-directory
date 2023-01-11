package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MeetingUpdateMultipartFormDataSettingsLanguageInterpretation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable")
    public Boolean enable;
    public MeetingUpdateMultipartFormDataSettingsLanguageInterpretation withEnable(Boolean enable) {
        this.enable = enable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interpreters")
    public MeetingUpdateMultipartFormDataSettingsLanguageInterpretationInterpreters[] interpreters;
    public MeetingUpdateMultipartFormDataSettingsLanguageInterpretation withInterpreters(MeetingUpdateMultipartFormDataSettingsLanguageInterpretationInterpreters[] interpreters) {
        this.interpreters = interpreters;
        return this;
    }
}