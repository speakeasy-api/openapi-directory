package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GroupUserMetadataConnections
 * The list of resource URIs related to the user.
**/
public class GroupUserMetadataConnections {
    @JsonProperty("albums")
    public GroupUserMetadataConnectionsAlbums albums;
    public GroupUserMetadataConnections withAlbums(GroupUserMetadataConnectionsAlbums albums) {
        this.albums = albums;
        return this;
    }
    @JsonProperty("appearances")
    public GroupUserMetadataConnectionsAppearances appearances;
    public GroupUserMetadataConnections withAppearances(GroupUserMetadataConnectionsAppearances appearances) {
        this.appearances = appearances;
        return this;
    }
    @JsonProperty("block")
    public GroupUserMetadataConnectionsBlock block;
    public GroupUserMetadataConnections withBlock(GroupUserMetadataConnectionsBlock block) {
        this.block = block;
        return this;
    }
    @JsonProperty("categories")
    public GroupUserMetadataConnectionsCategories categories;
    public GroupUserMetadataConnections withCategories(GroupUserMetadataConnectionsCategories categories) {
        this.categories = categories;
        return this;
    }
    @JsonProperty("channels")
    public GroupUserMetadataConnectionsChannels channels;
    public GroupUserMetadataConnections withChannels(GroupUserMetadataConnectionsChannels channels) {
        this.channels = channels;
        return this;
    }
    @JsonProperty("feed")
    public GroupUserMetadataConnectionsFeed feed;
    public GroupUserMetadataConnections withFeed(GroupUserMetadataConnectionsFeed feed) {
        this.feed = feed;
        return this;
    }
    @JsonProperty("folders")
    public GroupUserMetadataConnectionsFolders folders;
    public GroupUserMetadataConnections withFolders(GroupUserMetadataConnectionsFolders folders) {
        this.folders = folders;
        return this;
    }
    @JsonProperty("followers")
    public GroupUserMetadataConnectionsFollowers followers;
    public GroupUserMetadataConnections withFollowers(GroupUserMetadataConnectionsFollowers followers) {
        this.followers = followers;
        return this;
    }
    @JsonProperty("following")
    public GroupUserMetadataConnectionsFollowing following;
    public GroupUserMetadataConnections withFollowing(GroupUserMetadataConnectionsFollowing following) {
        this.following = following;
        return this;
    }
    @JsonProperty("groups")
    public GroupUserMetadataConnectionsGroups groups;
    public GroupUserMetadataConnections withGroups(GroupUserMetadataConnectionsGroups groups) {
        this.groups = groups;
        return this;
    }
    @JsonProperty("likes")
    public GroupUserMetadataConnectionsLikes likes;
    public GroupUserMetadataConnections withLikes(GroupUserMetadataConnectionsLikes likes) {
        this.likes = likes;
        return this;
    }
    @JsonProperty("moderated_channels")
    public GroupUserMetadataConnectionsModeratedChannels moderatedChannels;
    public GroupUserMetadataConnections withModeratedChannels(GroupUserMetadataConnectionsModeratedChannels moderatedChannels) {
        this.moderatedChannels = moderatedChannels;
        return this;
    }
    @JsonProperty("pictures")
    public GroupUserMetadataConnectionsPictures pictures;
    public GroupUserMetadataConnections withPictures(GroupUserMetadataConnectionsPictures pictures) {
        this.pictures = pictures;
        return this;
    }
    @JsonProperty("portfolios")
    public GroupUserMetadataConnectionsPortfolios portfolios;
    public GroupUserMetadataConnections withPortfolios(GroupUserMetadataConnectionsPortfolios portfolios) {
        this.portfolios = portfolios;
        return this;
    }
    @JsonProperty("recommended_channels")
    public GroupUserMetadataConnectionsRecommendedChannels recommendedChannels;
    public GroupUserMetadataConnections withRecommendedChannels(GroupUserMetadataConnectionsRecommendedChannels recommendedChannels) {
        this.recommendedChannels = recommendedChannels;
        return this;
    }
    @JsonProperty("recommended_users")
    public GroupUserMetadataConnectionsRecommendedUsers recommendedUsers;
    public GroupUserMetadataConnections withRecommendedUsers(GroupUserMetadataConnectionsRecommendedUsers recommendedUsers) {
        this.recommendedUsers = recommendedUsers;
        return this;
    }
    @JsonProperty("shared")
    public GroupUserMetadataConnectionsShared shared;
    public GroupUserMetadataConnections withShared(GroupUserMetadataConnectionsShared shared) {
        this.shared = shared;
        return this;
    }
    @JsonProperty("videos")
    public GroupUserMetadataConnectionsVideos videos;
    public GroupUserMetadataConnections withVideos(GroupUserMetadataConnectionsVideos videos) {
        this.videos = videos;
        return this;
    }
    @JsonProperty("watched_videos")
    public GroupUserMetadataConnectionsWatchedVideos watchedVideos;
    public GroupUserMetadataConnections withWatchedVideos(GroupUserMetadataConnectionsWatchedVideos watchedVideos) {
        this.watchedVideos = watchedVideos;
        return this;
    }
    @JsonProperty("watchlater")
    public GroupUserMetadataConnectionsWatchlater watchlater;
    public GroupUserMetadataConnections withWatchlater(GroupUserMetadataConnectionsWatchlater watchlater) {
        this.watchlater = watchlater;
        return this;
    }
}