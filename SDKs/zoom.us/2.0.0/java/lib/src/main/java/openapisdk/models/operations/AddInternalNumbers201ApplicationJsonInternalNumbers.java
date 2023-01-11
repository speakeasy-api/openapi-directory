package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddInternalNumbers201ApplicationJsonInternalNumbers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_for_external_meetings")
    public Boolean allowForExternalMeetings;
    public AddInternalNumbers201ApplicationJsonInternalNumbers withAllowForExternalMeetings(Boolean allowForExternalMeetings) {
        this.allowForExternalMeetings = allowForExternalMeetings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_join")
    public Boolean allowJoin;
    public AddInternalNumbers201ApplicationJsonInternalNumbers withAllowJoin(Boolean allowJoin) {
        this.allowJoin = allowJoin;
        return this;
    }
    @JsonProperty("country")
    public String country;
    public AddInternalNumbers201ApplicationJsonInternalNumbers withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonProperty("display_number")
    public String displayNumber;
    public AddInternalNumbers201ApplicationJsonInternalNumbers withDisplayNumber(String displayNumber) {
        this.displayNumber = displayNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AddInternalNumbers201ApplicationJsonInternalNumbers withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("labels")
    public String labels;
    public AddInternalNumbers201ApplicationJsonInternalNumbers withLabels(String labels) {
        this.labels = labels;
        return this;
    }
    @JsonProperty("languages")
    public AddInternalNumbers201ApplicationJsonInternalNumbersLanguagesEnum languages;
    public AddInternalNumbers201ApplicationJsonInternalNumbers withLanguages(AddInternalNumbers201ApplicationJsonInternalNumbersLanguagesEnum languages) {
        this.languages = languages;
        return this;
    }
    @JsonProperty("number")
    public String number;
    public AddInternalNumbers201ApplicationJsonInternalNumbers withNumber(String number) {
        this.number = number;
        return this;
    }
    @JsonProperty("type")
    public Long type;
    public AddInternalNumbers201ApplicationJsonInternalNumbers withType(Long type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("visible")
    public Boolean visible;
    public AddInternalNumbers201ApplicationJsonInternalNumbers withVisible(Boolean visible) {
        this.visible = visible;
        return this;
    }
}