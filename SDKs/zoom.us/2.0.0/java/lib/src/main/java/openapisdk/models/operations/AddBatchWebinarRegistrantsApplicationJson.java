package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddBatchWebinarRegistrantsApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_approve")
    public Boolean autoApprove;
    public AddBatchWebinarRegistrantsApplicationJson withAutoApprove(Boolean autoApprove) {
        this.autoApprove = autoApprove;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registrants")
    public AddBatchWebinarRegistrantsApplicationJsonRegistrants[] registrants;
    public AddBatchWebinarRegistrantsApplicationJson withRegistrants(AddBatchWebinarRegistrantsApplicationJsonRegistrants[] registrants) {
        this.registrants = registrants;
        return this;
    }
}