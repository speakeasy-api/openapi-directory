package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddInternalNumbersApplicationJsonInternalNumbers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_for_external_meetings")
    public Boolean allowForExternalMeetings;
    public AddInternalNumbersApplicationJsonInternalNumbers withAllowForExternalMeetings(Boolean allowForExternalMeetings) {
        this.allowForExternalMeetings = allowForExternalMeetings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_join")
    public Boolean allowJoin;
    public AddInternalNumbersApplicationJsonInternalNumbers withAllowJoin(Boolean allowJoin) {
        this.allowJoin = allowJoin;
        return this;
    }
    @JsonProperty("country")
    public String country;
    public AddInternalNumbersApplicationJsonInternalNumbers withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonProperty("display_number")
    public String displayNumber;
    public AddInternalNumbersApplicationJsonInternalNumbers withDisplayNumber(String displayNumber) {
        this.displayNumber = displayNumber;
        return this;
    }
    @JsonProperty("labels")
    public String labels;
    public AddInternalNumbersApplicationJsonInternalNumbers withLabels(String labels) {
        this.labels = labels;
        return this;
    }
    @JsonProperty("languages")
    public AddInternalNumbersApplicationJsonInternalNumbersLanguagesEnum languages;
    public AddInternalNumbersApplicationJsonInternalNumbers withLanguages(AddInternalNumbersApplicationJsonInternalNumbersLanguagesEnum languages) {
        this.languages = languages;
        return this;
    }
    @JsonProperty("number")
    public String number;
    public AddInternalNumbersApplicationJsonInternalNumbers withNumber(String number) {
        this.number = number;
        return this;
    }
    @JsonProperty("type")
    public Long type;
    public AddInternalNumbersApplicationJsonInternalNumbers withType(Long type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("visible")
    public Boolean visible;
    public AddInternalNumbersApplicationJsonInternalNumbers withVisible(Boolean visible) {
        this.visible = visible;
        return this;
    }
}