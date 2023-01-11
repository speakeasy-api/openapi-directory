package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TagApiPostReportQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=notes")
    public String notes;
    public TagApiPostReportQueryParams withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=reportType")
    public TagApiPostReportReportTypeEnum reportType;
    public TagApiPostReportQueryParams withReportType(TagApiPostReportReportTypeEnum reportType) {
        this.reportType = reportType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=versionNumber")
    public Integer versionNumber;
    public TagApiPostReportQueryParams withVersionNumber(Integer versionNumber) {
        this.versionNumber = versionNumber;
        return this;
    }
}