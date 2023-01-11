package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReleaseEventApiPostReportQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=notes")
    public String notes;
    public ReleaseEventApiPostReportQueryParams withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=reportType")
    public ReleaseEventApiPostReportReportTypeEnum reportType;
    public ReleaseEventApiPostReportQueryParams withReportType(ReleaseEventApiPostReportReportTypeEnum reportType) {
        this.reportType = reportType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=versionNumber")
    public Integer versionNumber;
    public ReleaseEventApiPostReportQueryParams withVersionNumber(Integer versionNumber) {
        this.versionNumber = versionNumber;
        return this;
    }
}