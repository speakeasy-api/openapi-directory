package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAdminRequestsRemoveByMetadataRequestBodyXmlEquality {
    @JsonProperty("equalToXml")
    public String equalToXml;
    public PostAdminRequestsRemoveByMetadataRequestBodyXmlEquality withEqualToXml(String equalToXml) {
        this.equalToXml = equalToXml;
        return this;
    }
}