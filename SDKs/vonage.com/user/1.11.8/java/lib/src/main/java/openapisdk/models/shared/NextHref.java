package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NextHref
 * URL to the next page of records
**/
public class NextHref {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public NextHref withHref(String href) {
        this.href = href;
        return this;
    }
}