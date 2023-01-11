package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DateFormat
 * The date format setting for the budget.  In some cases the format will not be available and will be specified as null.
**/
public class DateFormat {
    @JsonProperty("format")
    public String format;
    public DateFormat withFormat(String format) {
        this.format = format;
        return this;
    }
}