import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Apiv2 {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create podcast
     */
    createPodcast(req: operations.CreatePodcastRequestBody, config?: AxiosRequestConfig): Promise<operations.CreatePodcastResponse>;
    /**
     * Create podcast episode
     */
    createPodcastEpisode(req: operations.CreatePodcastEpisodeRequest, config?: AxiosRequestConfig): Promise<operations.CreatePodcastEpisodeResponse>;
    /**
     * Delete podcast
     */
    deletePodcast(req: operations.DeletePodcastRequest, config?: AxiosRequestConfig): Promise<operations.DeletePodcastResponse>;
    /**
     * Delete podcast episode
     */
    deletePodcast1(req: operations.DeletePodcast1Request, config?: AxiosRequestConfig): Promise<operations.DeletePodcast1Response>;
    /**
     * List stations
     */
    getPartnerAggregatorStations(req: operations.GetPartnerAggregatorStationsRequest, config?: AxiosRequestConfig): Promise<operations.GetPartnerAggregatorStationsResponse>;
    /**
     * Get podcast
     */
    getPodcast(req: operations.GetPodcastRequest, config?: AxiosRequestConfig): Promise<operations.GetPodcastResponse>;
    /**
     * Get the list of Categories that can be used to filter podcasts in the search podcasts request
     */
    getPodcastCategories(config?: AxiosRequestConfig): Promise<operations.GetPodcastCategoriesResponse>;
    /**
     * Get the list of Countries that can be used to filter podcasts in the search podcasts request
     */
    getPodcastCountries(config?: AxiosRequestConfig): Promise<operations.GetPodcastCountriesResponse>;
    /**
     * Get podcast episode
     */
    getPodcastEpisode(req: operations.GetPodcastEpisodeRequest, config?: AxiosRequestConfig): Promise<operations.GetPodcastEpisodeResponse>;
    /**
     * Get podcast episodes
     */
    getPodcastEpisodes(req: operations.GetPodcastEpisodesRequest, config?: AxiosRequestConfig): Promise<operations.GetPodcastEpisodesResponse>;
    /**
     * Get the list of Languages that can be used to filter podcasts in the search podcasts request
     */
    getPodcastLanguages(config?: AxiosRequestConfig): Promise<operations.GetPodcastLanguagesResponse>;
    /**
     * Get the list of Countries that can be used to filter stations in the search stations request
     */
    getStationCountries(config?: AxiosRequestConfig): Promise<operations.GetStationCountriesResponse>;
    /**
     * Get the list of Genres that can be used to filter stations in the search stations request
     */
    getStationGenres(config?: AxiosRequestConfig): Promise<operations.GetStationGenresResponse>;
    /**
     * Get the list of Languages that can be used to filter stations in the search stations request
     */
    getStationLanguages(config?: AxiosRequestConfig): Promise<operations.GetStationLanguagesResponse>;
    /**
     * Search podcasts
     */
    searchPodcasts(req: shared.PodcastSearchParams, config?: AxiosRequestConfig): Promise<operations.SearchPodcastsResponse>;
    /**
     * Search stations
     */
    searchStations(req: shared.StationSearchParams, config?: AxiosRequestConfig): Promise<operations.SearchStationsResponse>;
    /**
     * Update podcast
     */
    updatePodcast(req: operations.UpdatePodcastRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePodcastResponse>;
    /**
     * Update podcast episode
     */
    updatePodcastEpisode(req: operations.UpdatePodcastEpisodeRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePodcastEpisodeResponse>;
}
