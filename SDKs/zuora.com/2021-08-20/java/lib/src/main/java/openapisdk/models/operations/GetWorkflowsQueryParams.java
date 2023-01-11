package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWorkflowsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callout_trigger")
    public Boolean calloutTrigger;
    public GetWorkflowsQueryParams withCalloutTrigger(Boolean calloutTrigger) {
        this.calloutTrigger = calloutTrigger;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=interval")
    public String interval;
    public GetWorkflowsQueryParams withInterval(String interval) {
        this.interval = interval;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public GetWorkflowsQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ondemand_trigger")
    public Boolean ondemandTrigger;
    public GetWorkflowsQueryParams withOndemandTrigger(Boolean ondemandTrigger) {
        this.ondemandTrigger = ondemandTrigger;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetWorkflowsQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_length")
    public Long pageLength;
    public GetWorkflowsQueryParams withPageLength(Long pageLength) {
        this.pageLength = pageLength;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=scheduled_trigger")
    public Boolean scheduledTrigger;
    public GetWorkflowsQueryParams withScheduledTrigger(Boolean scheduledTrigger) {
        this.scheduledTrigger = scheduledTrigger;
        return this;
    }
}