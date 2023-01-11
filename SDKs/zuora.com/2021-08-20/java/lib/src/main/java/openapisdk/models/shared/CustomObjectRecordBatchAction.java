package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomObjectRecordBatchAction
 * The batch action on custom object records
**/
public class CustomObjectRecordBatchAction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowPartialSuccess")
    public Boolean allowPartialSuccess;
    public CustomObjectRecordBatchAction withAllowPartialSuccess(Boolean allowPartialSuccess) {
        this.allowPartialSuccess = allowPartialSuccess;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ids")
    public String[] ids;
    public CustomObjectRecordBatchAction withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("records")
    public java.util.Map<String, java.util.Map<String, Object>> records;
    public CustomObjectRecordBatchAction withRecords(java.util.Map<String, java.util.Map<String, Object>> records) {
        this.records = records;
        return this;
    }
    @JsonProperty("type")
    public CustomObjectRecordBatchActionTypeEnum type;
    public CustomObjectRecordBatchAction withType(CustomObjectRecordBatchActionTypeEnum type) {
        this.type = type;
        return this;
    }
}