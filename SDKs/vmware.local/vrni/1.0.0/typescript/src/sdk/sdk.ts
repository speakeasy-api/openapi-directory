import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { Applications } from "./applications";
import { Authentication } from "./authentication";
import { DataSources } from "./datasources";
import { Entities } from "./entities";
import { Info } from "./info";
import { Infrastructure } from "./infrastructure";
import { Microsegmentation } from "./microsegmentation";
import { Search } from "./search";


export const ServerList = [
	"http://vmware.local",
	"https://vrni.example.com/api/ni",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class SDK {
  public applications: Applications;
  public authentication: Authentication;
  public dataSources: DataSources;
  public entities: Entities;
  public info: Info;
  public infrastructure: Infrastructure;
  public microsegmentation: Microsegmentation;
  public search: Search;

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
    
    this.applications = new Applications(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.authentication = new Authentication(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.dataSources = new DataSources(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.entities = new Entities(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.info = new Info(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.infrastructure = new Infrastructure(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.microsegmentation = new Microsegmentation(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.search = new Search(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}