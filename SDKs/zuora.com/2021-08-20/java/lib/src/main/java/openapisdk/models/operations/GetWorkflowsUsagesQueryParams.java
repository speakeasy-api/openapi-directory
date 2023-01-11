package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetWorkflowsUsagesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endDate")
    public LocalDate endDate;
    public GetWorkflowsUsagesQueryParams withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=metrics")
    public String metrics;
    public GetWorkflowsUsagesQueryParams withMetrics(String metrics) {
        this.metrics = metrics;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startDate")
    public LocalDate startDate;
    public GetWorkflowsUsagesQueryParams withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
}