package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReportDailyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=month")
    public Long month;
    public ReportDailyQueryParams withMonth(Long month) {
        this.month = month;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=year")
    public Long year;
    public ReportDailyQueryParams withYear(Long year) {
        this.year = year;
        return this;
    }
}