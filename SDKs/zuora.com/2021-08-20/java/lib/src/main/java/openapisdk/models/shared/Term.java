package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Term
 * List of terms for the subscription.
 * 
**/
public class Term {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public LocalDate endDate;
    public Term withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isEvergreen")
    public Boolean isEvergreen;
    public Term withIsEvergreen(Boolean isEvergreen) {
        this.isEvergreen = isEvergreen;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public LocalDate startDate;
    public Term withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("termNumber")
    public Double termNumber;
    public Term withTermNumber(Double termNumber) {
        this.termNumber = termNumber;
        return this;
    }
}