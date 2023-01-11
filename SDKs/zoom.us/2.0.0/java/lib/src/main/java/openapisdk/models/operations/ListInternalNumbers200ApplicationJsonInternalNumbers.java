package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListInternalNumbers200ApplicationJsonInternalNumbers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_for_external_meetings")
    public Boolean allowForExternalMeetings;
    public ListInternalNumbers200ApplicationJsonInternalNumbers withAllowForExternalMeetings(Boolean allowForExternalMeetings) {
        this.allowForExternalMeetings = allowForExternalMeetings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_join")
    public Boolean allowJoin;
    public ListInternalNumbers200ApplicationJsonInternalNumbers withAllowJoin(Boolean allowJoin) {
        this.allowJoin = allowJoin;
        return this;
    }
    @JsonProperty("country")
    public String country;
    public ListInternalNumbers200ApplicationJsonInternalNumbers withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonProperty("display_number")
    public String displayNumber;
    public ListInternalNumbers200ApplicationJsonInternalNumbers withDisplayNumber(String displayNumber) {
        this.displayNumber = displayNumber;
        return this;
    }
    @JsonProperty("labels")
    public String labels;
    public ListInternalNumbers200ApplicationJsonInternalNumbers withLabels(String labels) {
        this.labels = labels;
        return this;
    }
    @JsonProperty("languages")
    public ListInternalNumbers200ApplicationJsonInternalNumbersLanguagesEnum languages;
    public ListInternalNumbers200ApplicationJsonInternalNumbers withLanguages(ListInternalNumbers200ApplicationJsonInternalNumbersLanguagesEnum languages) {
        this.languages = languages;
        return this;
    }
    @JsonProperty("number")
    public String number;
    public ListInternalNumbers200ApplicationJsonInternalNumbers withNumber(String number) {
        this.number = number;
        return this;
    }
    @JsonProperty("type")
    public Long type;
    public ListInternalNumbers200ApplicationJsonInternalNumbers withType(Long type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("visible")
    public Boolean visible;
    public ListInternalNumbers200ApplicationJsonInternalNumbers withVisible(Boolean visible) {
        this.visible = visible;
        return this;
    }
}