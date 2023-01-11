package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageMetadataConnectionsMetadataConnectionsVideos
 * Information about the videos associated with this page.
**/
public class OnDemandPageMetadataConnectionsMetadataConnectionsVideos {
    @JsonProperty("extra_total")
    public Double extraTotal;
    public OnDemandPageMetadataConnectionsMetadataConnectionsVideos withExtraTotal(Double extraTotal) {
        this.extraTotal = extraTotal;
        return this;
    }
    @JsonProperty("main_total")
    public Double mainTotal;
    public OnDemandPageMetadataConnectionsMetadataConnectionsVideos withMainTotal(Double mainTotal) {
        this.mainTotal = mainTotal;
        return this;
    }
    @JsonProperty("options")
    public String[] options;
    public OnDemandPageMetadataConnectionsMetadataConnectionsVideos withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public OnDemandPageMetadataConnectionsMetadataConnectionsVideos withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandPageMetadataConnectionsMetadataConnectionsVideos withUri(String uri) {
        this.uri = uri;
        return this;
    }
    @JsonProperty("viewable_total")
    public Double viewableTotal;
    public OnDemandPageMetadataConnectionsMetadataConnectionsVideos withViewableTotal(Double viewableTotal) {
        this.viewableTotal = viewableTotal;
        return this;
    }
}