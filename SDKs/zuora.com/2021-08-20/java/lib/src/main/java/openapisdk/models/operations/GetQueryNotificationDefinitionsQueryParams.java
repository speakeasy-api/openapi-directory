package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetQueryNotificationDefinitionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=emailTemplateId")
    public String emailTemplateId;
    public GetQueryNotificationDefinitionsQueryParams withEmailTemplateId(String emailTemplateId) {
        this.emailTemplateId = emailTemplateId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=eventTypeName")
    public String eventTypeName;
    public GetQueryNotificationDefinitionsQueryParams withEventTypeName(String eventTypeName) {
        this.eventTypeName = eventTypeName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public GetQueryNotificationDefinitionsQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=profileId")
    public String profileId;
    public GetQueryNotificationDefinitionsQueryParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public Integer start;
    public GetQueryNotificationDefinitionsQueryParams withStart(Integer start) {
        this.start = start;
        return this;
    }
}