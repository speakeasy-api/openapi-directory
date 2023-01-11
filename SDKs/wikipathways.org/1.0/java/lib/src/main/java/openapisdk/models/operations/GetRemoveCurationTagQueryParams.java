package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRemoveCurationTagQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=auth")
    public String auth;
    public GetRemoveCurationTagQueryParams withAuth(String auth) {
        this.auth = auth;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public GetRemoveCurationTagFormatEnum format;
    public GetRemoveCurationTagQueryParams withFormat(GetRemoveCurationTagFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pwId")
    public String pwId;
    public GetRemoveCurationTagQueryParams withPwId(String pwId) {
        this.pwId = pwId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tagName")
    public String tagName;
    public GetRemoveCurationTagQueryParams withTagName(String tagName) {
        this.tagName = tagName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=username")
    public String username;
    public GetRemoveCurationTagQueryParams withUsername(String username) {
        this.username = username;
        return this;
    }
}