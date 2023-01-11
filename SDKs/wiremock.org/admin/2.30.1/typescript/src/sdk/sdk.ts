import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { NearMisses } from "./nearmisses";
import { Recordings } from "./recordings";
import { Requests } from "./requests";
import { Scenarios } from "./scenarios";
import { StubMappings } from "./stubmappings";
import { System } from "./system";


export const ServerList = [
	"https://wiremock.org/",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}

/* SDK Documentation: http://wiremock.org/docs/ - WireMock user documentation*/
export class SDK {
  public nearMisses: NearMisses;
  public recordings: Recordings;
  public requests: Requests;
  public scenarios: Scenarios;
  public stubMappings: StubMappings;
  public system: System;

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
    
    this.nearMisses = new NearMisses(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.recordings = new Recordings(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.requests = new Requests(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.scenarios = new Scenarios(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.stubMappings = new StubMappings(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.system = new System(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}