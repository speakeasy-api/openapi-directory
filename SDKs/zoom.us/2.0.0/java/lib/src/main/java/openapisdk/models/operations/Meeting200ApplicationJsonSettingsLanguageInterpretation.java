package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Meeting200ApplicationJsonSettingsLanguageInterpretation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable")
    public Boolean enable;
    public Meeting200ApplicationJsonSettingsLanguageInterpretation withEnable(Boolean enable) {
        this.enable = enable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interpreters")
    public Meeting200ApplicationJsonSettingsLanguageInterpretationInterpreters[] interpreters;
    public Meeting200ApplicationJsonSettingsLanguageInterpretation withInterpreters(Meeting200ApplicationJsonSettingsLanguageInterpretationInterpreters[] interpreters) {
        this.interpreters = interpreters;
        return this;
    }
}