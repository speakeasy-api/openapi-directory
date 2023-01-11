package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import openapisdk.utils.SpeakeasyMetadata;

public class CreateReportModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
@SpeakeasyMetadata("form:name=reason")
    public String reason;
    public CreateReportModel withReason(String reason) {
        this.reason = reason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportType")
@SpeakeasyMetadata("form:name=reportType")
    public CreateReportModelReportTypeEnum reportType;
    public CreateReportModel withReportType(CreateReportModelReportTypeEnum reportType) {
        this.reportType = reportType;
        return this;
    }
}