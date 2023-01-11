package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AlbumMetadataInteractions
 * A list of resource URIs related to the album.
**/
public class AlbumMetadataInteractions {
    @JsonProperty("add_custom_thumbnails")
    public AlbumMetadataInteractionsAddCustomThumbnails addCustomThumbnails;
    public AlbumMetadataInteractions withAddCustomThumbnails(AlbumMetadataInteractionsAddCustomThumbnails addCustomThumbnails) {
        this.addCustomThumbnails = addCustomThumbnails;
        return this;
    }
    @JsonProperty("add_logos")
    public AlbumMetadataInteractionsAddLogos addLogos;
    public AlbumMetadataInteractions withAddLogos(AlbumMetadataInteractionsAddLogos addLogos) {
        this.addLogos = addLogos;
        return this;
    }
    @JsonProperty("add_videos")
    public AlbumMetadataInteractionsAddVideos addVideos;
    public AlbumMetadataInteractions withAddVideos(AlbumMetadataInteractionsAddVideos addVideos) {
        this.addVideos = addVideos;
        return this;
    }
}