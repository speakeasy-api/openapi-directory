package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ReportOperationLogs200ApplicationJsonOperationLogs {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public String action;
    public ReportOperationLogs200ApplicationJsonOperationLogs withAction(String action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category_type")
    public String categoryType;
    public ReportOperationLogs200ApplicationJsonOperationLogs withCategoryType(String categoryType) {
        this.categoryType = categoryType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operation_detail")
    public String operationDetail;
    public ReportOperationLogs200ApplicationJsonOperationLogs withOperationDetail(String operationDetail) {
        this.operationDetail = operationDetail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operator")
    public String operator;
    public ReportOperationLogs200ApplicationJsonOperationLogs withOperator(String operator) {
        this.operator = operator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("time")
    public OffsetDateTime time;
    public ReportOperationLogs200ApplicationJsonOperationLogs withTime(OffsetDateTime time) {
        this.time = time;
        return this;
    }
}