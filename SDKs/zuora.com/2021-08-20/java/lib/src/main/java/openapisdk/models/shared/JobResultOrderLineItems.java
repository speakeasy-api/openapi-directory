package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class JobResultOrderLineItems {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public JobResultOrderLineItems withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemNumber")
    public String itemNumber;
    public JobResultOrderLineItems withItemNumber(String itemNumber) {
        this.itemNumber = itemNumber;
        return this;
    }
}