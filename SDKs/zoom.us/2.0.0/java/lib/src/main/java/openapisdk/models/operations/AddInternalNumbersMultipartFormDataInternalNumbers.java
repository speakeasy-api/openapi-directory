package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddInternalNumbersMultipartFormDataInternalNumbers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_for_external_meetings")
    public Boolean allowForExternalMeetings;
    public AddInternalNumbersMultipartFormDataInternalNumbers withAllowForExternalMeetings(Boolean allowForExternalMeetings) {
        this.allowForExternalMeetings = allowForExternalMeetings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_join")
    public Boolean allowJoin;
    public AddInternalNumbersMultipartFormDataInternalNumbers withAllowJoin(Boolean allowJoin) {
        this.allowJoin = allowJoin;
        return this;
    }
    @JsonProperty("country")
    public String country;
    public AddInternalNumbersMultipartFormDataInternalNumbers withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonProperty("display_number")
    public String displayNumber;
    public AddInternalNumbersMultipartFormDataInternalNumbers withDisplayNumber(String displayNumber) {
        this.displayNumber = displayNumber;
        return this;
    }
    @JsonProperty("labels")
    public String labels;
    public AddInternalNumbersMultipartFormDataInternalNumbers withLabels(String labels) {
        this.labels = labels;
        return this;
    }
    @JsonProperty("languages")
    public AddInternalNumbersMultipartFormDataInternalNumbersLanguagesEnum languages;
    public AddInternalNumbersMultipartFormDataInternalNumbers withLanguages(AddInternalNumbersMultipartFormDataInternalNumbersLanguagesEnum languages) {
        this.languages = languages;
        return this;
    }
    @JsonProperty("number")
    public String number;
    public AddInternalNumbersMultipartFormDataInternalNumbers withNumber(String number) {
        this.number = number;
        return this;
    }
    @JsonProperty("type")
    public Long type;
    public AddInternalNumbersMultipartFormDataInternalNumbers withType(Long type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("visible")
    public Boolean visible;
    public AddInternalNumbersMultipartFormDataInternalNumbers withVisible(Boolean visible) {
        this.visible = visible;
        return this;
    }
}