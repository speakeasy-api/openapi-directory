package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWorkflowsTasksQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=action_type")
    public String actionType;
    public GetWorkflowsTasksQueryParams withActionType(String actionType) {
        this.actionType = actionType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=call_type")
    public String callType;
    public GetWorkflowsTasksQueryParams withCallType(String callType) {
        this.callType = callType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String id;
    public GetWorkflowsTasksQueryParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=instance")
    public Boolean instance;
    public GetWorkflowsTasksQueryParams withInstance(Boolean instance) {
        this.instance = instance;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public GetWorkflowsTasksQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=object")
    public String object;
    public GetWorkflowsTasksQueryParams withObject(String object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=object_id")
    public String objectId;
    public GetWorkflowsTasksQueryParams withObjectId(String objectId) {
        this.objectId = objectId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetWorkflowsTasksQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_length")
    public Long pageLength;
    public GetWorkflowsTasksQueryParams withPageLength(Long pageLength) {
        this.pageLength = pageLength;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tags")
    public String tags;
    public GetWorkflowsTasksQueryParams withTags(String tags) {
        this.tags = tags;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=workflow_id")
    public String workflowId;
    public GetWorkflowsTasksQueryParams withWorkflowId(String workflowId) {
        this.workflowId = workflowId;
        return this;
    }
}