package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSaveCurationTagQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=auth")
    public String auth;
    public GetSaveCurationTagQueryParams withAuth(String auth) {
        this.auth = auth;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public GetSaveCurationTagFormatEnum format;
    public GetSaveCurationTagQueryParams withFormat(GetSaveCurationTagFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pwId")
    public String pwId;
    public GetSaveCurationTagQueryParams withPwId(String pwId) {
        this.pwId = pwId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=revision")
    public Long revision;
    public GetSaveCurationTagQueryParams withRevision(Long revision) {
        this.revision = revision;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tagName")
    public String tagName;
    public GetSaveCurationTagQueryParams withTagName(String tagName) {
        this.tagName = tagName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=text")
    public String text;
    public GetSaveCurationTagQueryParams withText(String text) {
        this.text = text;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=username")
    public String username;
    public GetSaveCurationTagQueryParams withUsername(String username) {
        this.username = username;
        return this;
    }
}