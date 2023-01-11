package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CommentUserMetadataConnections
 * The list of resource URIs related to the user.
**/
public class CommentUserMetadataConnections {
    @JsonProperty("albums")
    public CommentUserMetadataConnectionsAlbums albums;
    public CommentUserMetadataConnections withAlbums(CommentUserMetadataConnectionsAlbums albums) {
        this.albums = albums;
        return this;
    }
    @JsonProperty("appearances")
    public CommentUserMetadataConnectionsAppearances appearances;
    public CommentUserMetadataConnections withAppearances(CommentUserMetadataConnectionsAppearances appearances) {
        this.appearances = appearances;
        return this;
    }
    @JsonProperty("block")
    public CommentUserMetadataConnectionsBlock block;
    public CommentUserMetadataConnections withBlock(CommentUserMetadataConnectionsBlock block) {
        this.block = block;
        return this;
    }
    @JsonProperty("categories")
    public CommentUserMetadataConnectionsCategories categories;
    public CommentUserMetadataConnections withCategories(CommentUserMetadataConnectionsCategories categories) {
        this.categories = categories;
        return this;
    }
    @JsonProperty("channels")
    public CommentUserMetadataConnectionsChannels channels;
    public CommentUserMetadataConnections withChannels(CommentUserMetadataConnectionsChannels channels) {
        this.channels = channels;
        return this;
    }
    @JsonProperty("feed")
    public CommentUserMetadataConnectionsFeed feed;
    public CommentUserMetadataConnections withFeed(CommentUserMetadataConnectionsFeed feed) {
        this.feed = feed;
        return this;
    }
    @JsonProperty("folders")
    public CommentUserMetadataConnectionsFolders folders;
    public CommentUserMetadataConnections withFolders(CommentUserMetadataConnectionsFolders folders) {
        this.folders = folders;
        return this;
    }
    @JsonProperty("followers")
    public CommentUserMetadataConnectionsFollowers followers;
    public CommentUserMetadataConnections withFollowers(CommentUserMetadataConnectionsFollowers followers) {
        this.followers = followers;
        return this;
    }
    @JsonProperty("following")
    public CommentUserMetadataConnectionsFollowing following;
    public CommentUserMetadataConnections withFollowing(CommentUserMetadataConnectionsFollowing following) {
        this.following = following;
        return this;
    }
    @JsonProperty("groups")
    public CommentUserMetadataConnectionsGroups groups;
    public CommentUserMetadataConnections withGroups(CommentUserMetadataConnectionsGroups groups) {
        this.groups = groups;
        return this;
    }
    @JsonProperty("likes")
    public CommentUserMetadataConnectionsLikes likes;
    public CommentUserMetadataConnections withLikes(CommentUserMetadataConnectionsLikes likes) {
        this.likes = likes;
        return this;
    }
    @JsonProperty("moderated_channels")
    public CommentUserMetadataConnectionsModeratedChannels moderatedChannels;
    public CommentUserMetadataConnections withModeratedChannels(CommentUserMetadataConnectionsModeratedChannels moderatedChannels) {
        this.moderatedChannels = moderatedChannels;
        return this;
    }
    @JsonProperty("pictures")
    public CommentUserMetadataConnectionsPictures pictures;
    public CommentUserMetadataConnections withPictures(CommentUserMetadataConnectionsPictures pictures) {
        this.pictures = pictures;
        return this;
    }
    @JsonProperty("portfolios")
    public CommentUserMetadataConnectionsPortfolios portfolios;
    public CommentUserMetadataConnections withPortfolios(CommentUserMetadataConnectionsPortfolios portfolios) {
        this.portfolios = portfolios;
        return this;
    }
    @JsonProperty("recommended_channels")
    public CommentUserMetadataConnectionsRecommendedChannels recommendedChannels;
    public CommentUserMetadataConnections withRecommendedChannels(CommentUserMetadataConnectionsRecommendedChannels recommendedChannels) {
        this.recommendedChannels = recommendedChannels;
        return this;
    }
    @JsonProperty("recommended_users")
    public CommentUserMetadataConnectionsRecommendedUsers recommendedUsers;
    public CommentUserMetadataConnections withRecommendedUsers(CommentUserMetadataConnectionsRecommendedUsers recommendedUsers) {
        this.recommendedUsers = recommendedUsers;
        return this;
    }
    @JsonProperty("shared")
    public CommentUserMetadataConnectionsShared shared;
    public CommentUserMetadataConnections withShared(CommentUserMetadataConnectionsShared shared) {
        this.shared = shared;
        return this;
    }
    @JsonProperty("videos")
    public CommentUserMetadataConnectionsVideos videos;
    public CommentUserMetadataConnections withVideos(CommentUserMetadataConnectionsVideos videos) {
        this.videos = videos;
        return this;
    }
    @JsonProperty("watched_videos")
    public CommentUserMetadataConnectionsWatchedVideos watchedVideos;
    public CommentUserMetadataConnections withWatchedVideos(CommentUserMetadataConnectionsWatchedVideos watchedVideos) {
        this.watchedVideos = watchedVideos;
        return this;
    }
    @JsonProperty("watchlater")
    public CommentUserMetadataConnectionsWatchlater watchlater;
    public CommentUserMetadataConnections withWatchlater(CommentUserMetadataConnectionsWatchlater watchlater) {
        this.watchlater = watchlater;
        return this;
    }
}