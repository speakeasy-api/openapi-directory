package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebinarDeleteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cancel_webinar_reminder")
    public String cancelWebinarReminder;
    public WebinarDeleteQueryParams withCancelWebinarReminder(String cancelWebinarReminder) {
        this.cancelWebinarReminder = cancelWebinarReminder;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=occurrence_id")
    public String occurrenceId;
    public WebinarDeleteQueryParams withOccurrenceId(String occurrenceId) {
        this.occurrenceId = occurrenceId;
        return this;
    }
}