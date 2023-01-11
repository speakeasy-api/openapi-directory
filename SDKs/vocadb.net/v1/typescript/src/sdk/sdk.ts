import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { ActivityEntryApi } from "./activityentryapi";
import { AlbumApi } from "./albumapi";
import { ArtistApi } from "./artistapi";
import { CommentApi } from "./commentapi";
import { DiscussionApi } from "./discussionapi";
import { EntryApi } from "./entryapi";
import { EntryTypesApi } from "./entrytypesapi";
import { PvApi } from "./pvapi";
import { ReleaseEventApi } from "./releaseeventapi";
import { ReleaseEventSeriesApi } from "./releaseeventseriesapi";
import { ResourcesApi } from "./resourcesapi";
import { SongApi } from "./songapi";
import { SongListApi } from "./songlistapi";
import { TagApi } from "./tagapi";
import { UserApi } from "./userapi";
import { VenueApi } from "./venueapi";


export const ServerList = [
	"https://vocadb.net",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class SDK {
  public activityEntryApi: ActivityEntryApi;
  public albumApi: AlbumApi;
  public artistApi: ArtistApi;
  public commentApi: CommentApi;
  public discussionApi: DiscussionApi;
  public entryApi: EntryApi;
  public entryTypesApi: EntryTypesApi;
  public pvApi: PvApi;
  public releaseEventApi: ReleaseEventApi;
  public releaseEventSeriesApi: ReleaseEventSeriesApi;
  public resourcesApi: ResourcesApi;
  public songApi: SongApi;
  public songListApi: SongListApi;
  public tagApi: TagApi;
  public userApi: UserApi;
  public venueApi: VenueApi;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(props: SDKProps) {
    this._serverURL = props.serverUrl ?? ServerList[0];

    this._defaultClient = props.defaultClient ?? axios.create({ baseURL: this._serverURL });
    this._securityClient = this._defaultClient;
    
    this.activityEntryApi = new ActivityEntryApi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.albumApi = new AlbumApi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.artistApi = new ArtistApi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.commentApi = new CommentApi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.discussionApi = new DiscussionApi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.entryApi = new EntryApi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.entryTypesApi = new EntryTypesApi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.pvApi = new PvApi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.releaseEventApi = new ReleaseEventApi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.releaseEventSeriesApi = new ReleaseEventSeriesApi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.resourcesApi = new ResourcesApi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.songApi = new SongApi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.songListApi = new SongListApi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.tagApi = new TagApi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.userApi = new UserApi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.venueApi = new VenueApi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}