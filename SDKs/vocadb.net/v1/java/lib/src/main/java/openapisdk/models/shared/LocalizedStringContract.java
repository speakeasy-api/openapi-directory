package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LocalizedStringContract {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public LocalizedStringContractLanguageEnum language;
    public LocalizedStringContract withLanguage(LocalizedStringContractLanguageEnum language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public LocalizedStringContract withValue(String value) {
        this.value = value;
        return this;
    }
}