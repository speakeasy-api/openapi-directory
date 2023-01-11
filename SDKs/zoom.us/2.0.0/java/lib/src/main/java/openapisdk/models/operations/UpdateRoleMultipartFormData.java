package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRoleMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=description")
    public String description;
    public UpdateRoleMultipartFormData withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=id")
    public String id;
    public UpdateRoleMultipartFormData withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=name")
    public String name;
    public UpdateRoleMultipartFormData withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=privileges,json")
    public String[] privileges;
    public UpdateRoleMultipartFormData withPrivileges(String[] privileges) {
        this.privileges = privileges;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=sub_account_privileges,json")
    public UpdateRoleMultipartFormDataSubAccountPrivileges subAccountPrivileges;
    public UpdateRoleMultipartFormData withSubAccountPrivileges(UpdateRoleMultipartFormDataSubAccountPrivileges subAccountPrivileges) {
        this.subAccountPrivileges = subAccountPrivileges;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=total_members")
    public Long totalMembers;
    public UpdateRoleMultipartFormData withTotalMembers(Long totalMembers) {
        this.totalMembers = totalMembers;
        return this;
    }
}