package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListInternalCalloutCountries200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callout_countries")
    public ListInternalCalloutCountries200ApplicationJsonCalloutCountries[] calloutCountries;
    public ListInternalCalloutCountries200ApplicationJson withCalloutCountries(ListInternalCalloutCountries200ApplicationJsonCalloutCountries[] calloutCountries) {
        this.calloutCountries = calloutCountries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_records")
    public Long totalRecords;
    public ListInternalCalloutCountries200ApplicationJson withTotalRecords(Long totalRecords) {
        this.totalRecords = totalRecords;
        return this;
    }
}