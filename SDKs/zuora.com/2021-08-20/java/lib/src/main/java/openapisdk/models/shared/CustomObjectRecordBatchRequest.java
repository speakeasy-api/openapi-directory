package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CustomObjectRecordBatchRequest
 * Request of processing custom object records in batch.
**/
public class CustomObjectRecordBatchRequest {
    @JsonProperty("action")
    public CustomObjectRecordBatchAction action;
    public CustomObjectRecordBatchRequest withAction(CustomObjectRecordBatchAction action) {
        this.action = action;
        return this;
    }
}