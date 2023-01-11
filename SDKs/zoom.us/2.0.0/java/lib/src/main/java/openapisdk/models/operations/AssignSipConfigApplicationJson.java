package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AssignSipConfigApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable")
    public Boolean enable;
    public AssignSipConfigApplicationJson withEnable(Boolean enable) {
        this.enable = enable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("show_callout_internal_number")
    public Boolean showCalloutInternalNumber;
    public AssignSipConfigApplicationJson withShowCalloutInternalNumber(Boolean showCalloutInternalNumber) {
        this.showCalloutInternalNumber = showCalloutInternalNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("show_zoom_provided_callout_countries")
    public Long showZoomProvidedCalloutCountries;
    public AssignSipConfigApplicationJson withShowZoomProvidedCalloutCountries(Long showZoomProvidedCalloutCountries) {
        this.showZoomProvidedCalloutCountries = showZoomProvidedCalloutCountries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("show_zoom_provided_numbers")
    public Long showZoomProvidedNumbers;
    public AssignSipConfigApplicationJson withShowZoomProvidedNumbers(Long showZoomProvidedNumbers) {
        this.showZoomProvidedNumbers = showZoomProvidedNumbers;
        return this;
    }
}