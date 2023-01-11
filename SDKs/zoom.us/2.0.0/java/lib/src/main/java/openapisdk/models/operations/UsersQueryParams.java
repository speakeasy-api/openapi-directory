package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_fields")
    public String includeFields;
    public UsersQueryParams withIncludeFields(String includeFields) {
        this.includeFields = includeFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=next_page_token")
    public String nextPageToken;
    public UsersQueryParams withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_number")
    public String pageNumber;
    public UsersQueryParams withPageNumber(String pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public UsersQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=role_id")
    public String roleId;
    public UsersQueryParams withRoleId(String roleId) {
        this.roleId = roleId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public UsersStatusEnum status;
    public UsersQueryParams withStatus(UsersStatusEnum status) {
        this.status = status;
        return this;
    }
}