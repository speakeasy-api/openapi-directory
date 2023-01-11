package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUpdatePathwayQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=auth")
    public String auth;
    public GetUpdatePathwayQueryParams withAuth(String auth) {
        this.auth = auth;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=description")
    public String description;
    public GetUpdatePathwayQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public GetUpdatePathwayFormatEnum format;
    public GetUpdatePathwayQueryParams withFormat(GetUpdatePathwayFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=gpml")
    public String gpml;
    public GetUpdatePathwayQueryParams withGpml(String gpml) {
        this.gpml = gpml;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pwId")
    public String pwId;
    public GetUpdatePathwayQueryParams withPwId(String pwId) {
        this.pwId = pwId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=revision")
    public Long revision;
    public GetUpdatePathwayQueryParams withRevision(Long revision) {
        this.revision = revision;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=username")
    public String username;
    public GetUpdatePathwayQueryParams withUsername(String username) {
        this.username = username;
        return this;
    }
}