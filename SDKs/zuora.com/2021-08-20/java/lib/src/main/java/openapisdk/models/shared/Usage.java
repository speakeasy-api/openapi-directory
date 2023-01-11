package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Usage
 * The task usage of a particular day.
 * 
**/
public class Usage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date")
    public String date;
    public Usage withDate(String date) {
        this.date = date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public UsageValues values;
    public Usage withValues(UsageValues values) {
        this.values = values;
        return this;
    }
}