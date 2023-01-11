package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VenueApiPostReportQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=notes")
    public String notes;
    public VenueApiPostReportQueryParams withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=reportType")
    public VenueApiPostReportReportTypeEnum reportType;
    public VenueApiPostReportQueryParams withReportType(VenueApiPostReportReportTypeEnum reportType) {
        this.reportType = reportType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=versionNumber")
    public Integer versionNumber;
    public VenueApiPostReportQueryParams withVersionNumber(Integer versionNumber) {
        this.versionNumber = versionNumber;
        return this;
    }
}