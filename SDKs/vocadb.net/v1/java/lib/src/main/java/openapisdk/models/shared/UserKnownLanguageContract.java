package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserKnownLanguageContract {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cultureCode")
    public String cultureCode;
    public UserKnownLanguageContract withCultureCode(String cultureCode) {
        this.cultureCode = cultureCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("proficiency")
    public UserKnownLanguageContractProficiencyEnum proficiency;
    public UserKnownLanguageContract withProficiency(UserKnownLanguageContractProficiencyEnum proficiency) {
        this.proficiency = proficiency;
        return this;
    }
}