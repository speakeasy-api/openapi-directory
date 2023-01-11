package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MeetingCreate201ApplicationJsonSettingsLanguageInterpretation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable")
    public Boolean enable;
    public MeetingCreate201ApplicationJsonSettingsLanguageInterpretation withEnable(Boolean enable) {
        this.enable = enable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interpreters")
    public MeetingCreate201ApplicationJsonSettingsLanguageInterpretationInterpreters[] interpreters;
    public MeetingCreate201ApplicationJsonSettingsLanguageInterpretation withInterpreters(MeetingCreate201ApplicationJsonSettingsLanguageInterpretationInterpreters[] interpreters) {
        this.interpreters = interpreters;
        return this;
    }
}