package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandSeasonUserMetadataConnections
 * The list of resource URIs related to the user.
**/
public class OnDemandSeasonUserMetadataConnections {
    @JsonProperty("albums")
    public OnDemandSeasonUserMetadataConnectionsAlbums albums;
    public OnDemandSeasonUserMetadataConnections withAlbums(OnDemandSeasonUserMetadataConnectionsAlbums albums) {
        this.albums = albums;
        return this;
    }
    @JsonProperty("appearances")
    public OnDemandSeasonUserMetadataConnectionsAppearances appearances;
    public OnDemandSeasonUserMetadataConnections withAppearances(OnDemandSeasonUserMetadataConnectionsAppearances appearances) {
        this.appearances = appearances;
        return this;
    }
    @JsonProperty("block")
    public OnDemandSeasonUserMetadataConnectionsBlock block;
    public OnDemandSeasonUserMetadataConnections withBlock(OnDemandSeasonUserMetadataConnectionsBlock block) {
        this.block = block;
        return this;
    }
    @JsonProperty("categories")
    public OnDemandSeasonUserMetadataConnectionsCategories categories;
    public OnDemandSeasonUserMetadataConnections withCategories(OnDemandSeasonUserMetadataConnectionsCategories categories) {
        this.categories = categories;
        return this;
    }
    @JsonProperty("channels")
    public OnDemandSeasonUserMetadataConnectionsChannels channels;
    public OnDemandSeasonUserMetadataConnections withChannels(OnDemandSeasonUserMetadataConnectionsChannels channels) {
        this.channels = channels;
        return this;
    }
    @JsonProperty("feed")
    public OnDemandSeasonUserMetadataConnectionsFeed feed;
    public OnDemandSeasonUserMetadataConnections withFeed(OnDemandSeasonUserMetadataConnectionsFeed feed) {
        this.feed = feed;
        return this;
    }
    @JsonProperty("folders")
    public OnDemandSeasonUserMetadataConnectionsFolders folders;
    public OnDemandSeasonUserMetadataConnections withFolders(OnDemandSeasonUserMetadataConnectionsFolders folders) {
        this.folders = folders;
        return this;
    }
    @JsonProperty("followers")
    public OnDemandSeasonUserMetadataConnectionsFollowers followers;
    public OnDemandSeasonUserMetadataConnections withFollowers(OnDemandSeasonUserMetadataConnectionsFollowers followers) {
        this.followers = followers;
        return this;
    }
    @JsonProperty("following")
    public OnDemandSeasonUserMetadataConnectionsFollowing following;
    public OnDemandSeasonUserMetadataConnections withFollowing(OnDemandSeasonUserMetadataConnectionsFollowing following) {
        this.following = following;
        return this;
    }
    @JsonProperty("groups")
    public OnDemandSeasonUserMetadataConnectionsGroups groups;
    public OnDemandSeasonUserMetadataConnections withGroups(OnDemandSeasonUserMetadataConnectionsGroups groups) {
        this.groups = groups;
        return this;
    }
    @JsonProperty("likes")
    public OnDemandSeasonUserMetadataConnectionsLikes likes;
    public OnDemandSeasonUserMetadataConnections withLikes(OnDemandSeasonUserMetadataConnectionsLikes likes) {
        this.likes = likes;
        return this;
    }
    @JsonProperty("moderated_channels")
    public OnDemandSeasonUserMetadataConnectionsModeratedChannels moderatedChannels;
    public OnDemandSeasonUserMetadataConnections withModeratedChannels(OnDemandSeasonUserMetadataConnectionsModeratedChannels moderatedChannels) {
        this.moderatedChannels = moderatedChannels;
        return this;
    }
    @JsonProperty("pictures")
    public OnDemandSeasonUserMetadataConnectionsPictures pictures;
    public OnDemandSeasonUserMetadataConnections withPictures(OnDemandSeasonUserMetadataConnectionsPictures pictures) {
        this.pictures = pictures;
        return this;
    }
    @JsonProperty("portfolios")
    public OnDemandSeasonUserMetadataConnectionsPortfolios portfolios;
    public OnDemandSeasonUserMetadataConnections withPortfolios(OnDemandSeasonUserMetadataConnectionsPortfolios portfolios) {
        this.portfolios = portfolios;
        return this;
    }
    @JsonProperty("recommended_channels")
    public OnDemandSeasonUserMetadataConnectionsRecommendedChannels recommendedChannels;
    public OnDemandSeasonUserMetadataConnections withRecommendedChannels(OnDemandSeasonUserMetadataConnectionsRecommendedChannels recommendedChannels) {
        this.recommendedChannels = recommendedChannels;
        return this;
    }
    @JsonProperty("recommended_users")
    public OnDemandSeasonUserMetadataConnectionsRecommendedUsers recommendedUsers;
    public OnDemandSeasonUserMetadataConnections withRecommendedUsers(OnDemandSeasonUserMetadataConnectionsRecommendedUsers recommendedUsers) {
        this.recommendedUsers = recommendedUsers;
        return this;
    }
    @JsonProperty("shared")
    public OnDemandSeasonUserMetadataConnectionsShared shared;
    public OnDemandSeasonUserMetadataConnections withShared(OnDemandSeasonUserMetadataConnectionsShared shared) {
        this.shared = shared;
        return this;
    }
    @JsonProperty("videos")
    public OnDemandSeasonUserMetadataConnectionsVideos videos;
    public OnDemandSeasonUserMetadataConnections withVideos(OnDemandSeasonUserMetadataConnectionsVideos videos) {
        this.videos = videos;
        return this;
    }
    @JsonProperty("watched_videos")
    public OnDemandSeasonUserMetadataConnectionsWatchedVideos watchedVideos;
    public OnDemandSeasonUserMetadataConnections withWatchedVideos(OnDemandSeasonUserMetadataConnectionsWatchedVideos watchedVideos) {
        this.watchedVideos = watchedVideos;
        return this;
    }
    @JsonProperty("watchlater")
    public OnDemandSeasonUserMetadataConnectionsWatchlater watchlater;
    public OnDemandSeasonUserMetadataConnections withWatchlater(OnDemandSeasonUserMetadataConnectionsWatchlater watchlater) {
        this.watchlater = watchlater;
        return this;
    }
}